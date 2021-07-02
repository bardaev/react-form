import * as React from "react";
import {Controller, useForm} from "react-hook-form";
import './Form.css'
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MaskedInput from "react-text-mask/dist/reactTextMask";
import Input from '@material-ui/core/Input';
import CardContent from '@material-ui/core/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FioSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import Index from './registration/Index'


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const card = makeStyles({
    root: {
        textAlign: "left",
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const date = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

export default function Form() {

    const {register, handleSubmit, control, setValue} = useForm();
    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({...data}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    const classes = useStyles();
    const cardStyle = card()
    const [value, setVal] = React.useState(0);
    const [gender, setGender] = React.useState(true);
    const [fio, setFio] = React.useState();
    const [errorEmail, setErrorEmail] = React.useState(false);

    const handleGender = (e) => {
        setGender(e.target.checked)
        setValue("gender", e.target.checked)
    }

    const handleEmail = (e) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e.target.value).toLowerCase())) {
            setErrorEmail(false)
        } else {
            setErrorEmail(true)
        }
    }

    const handleChange = (event, newValue) => {
        setVal(newValue);
    };

    return (
        <>
            <Card className={cardStyle.root}>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="span">
                        Личный кабинет клиента
                    </Typography>
                    <br/>
                    <br/>
                    <Typography gutterBottom variant="span" component="span">
                        Войдите или зарегистрируйтесь в личном кабинете. При регистрации укажите действующий номер телефона, на него будет направлен пароль через смс:
                    </Typography>
                </CardContent>

                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="off"
                        aria-label="scrollable prevent tabs example"
                    >
                        <Tab icon={<ExitToAppIcon/>} label="Вход" aria-label="signin" {...a11yProps(0)} />
                        <Tab icon={<PersonAddIcon/>} label="Регистрация" aria-label="signup" {...a11yProps(1)} />
                        <Tab icon={<PersonAddIcon/>} label="Регистрация" aria-label="signup" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.root}>
                            <TabPanel value={value} index={0}>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        rules={{ required: 'Phone required' }}
                                        render={( {field }) => (
                                            <Input
                                                onChange={(e) => field.onChange(e.target.value.replace(/^\+7|\D+/g, ""))}
                                                name="textmask"
                                                inputComponent={TextMaskCustom}
                                                startAdornment={<InputAdornment position="start">+7 </InputAdornment>}
                                            />
                                        )}
                                    />

                                    <br/>
                                    <TextField
                                        {...register("password")}
                                        type="password"
                                        id="standard-basic"
                                        label="Password" />
                                    <input type="submit" value="Войти в личный кабинет"/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <TextField
                                    {...register("lastname")}
                                    id="standard-basic"
                                    type="text"
                                    label="Last name" />
                                <br/>
                                <TextField
                                    {...register("firstname")}
                                    id="standard-basic"
                                    type="text"
                                    label="First name" />
                                <br/>
                                <TextField
                                    {...register("patronymic")}
                                    type="text"
                                    id="standard-basic"
                                    label="Patronymic" />

                                <br/>

                                <TextField
                                    {...register("date")}
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={date.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <br/>

                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{ required: 'Phone required' }}
                                    render={( {field }) => (
                                        <Input
                                            onChange={(e) => field.onChange(e.target.value.replace(/^\+7|\D+/g, ""))}
                                            name="textmask"
                                            inputComponent={TextMaskCustom}
                                            startAdornment={<InputAdornment position="start">+7 </InputAdornment>}
                                        />
                                    )}
                                />

                                <br/>
                                <TextField
                                    error={errorEmail}
                                    onChange={handleEmail}
                                    id="standard-error-helper-text"
                                    label="Email"
                                    defaultValue=""
                                    helperText="Incorrect entry."
                                />
                                <br/>
                                <FormControlLabel
                                    control={<Checkbox checked={gender} onChange={handleGender} name="Gender" />}
                                    label="Gender"
                                />
                                <FioSuggestions token="8ba07cfc54decc062e7f1da84b32f41fee377fa3" value={fio} onChange={setFio} />
                                <input type="submit" value="Зарегистрироваться"/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Index />
                            </TabPanel>
                        </div>


                    </form>
                </CardContent>

            </Card>
        </>
    );
}
