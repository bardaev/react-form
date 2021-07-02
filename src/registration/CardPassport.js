import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {UserContext} from './Index'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";

class CardPassport extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Паспортные данные
                        </Typography>
                        <TextField id="standard-basic" label="Серия" disabled value={this.context.passport.serial} />
                        <br/>
                        <TextField id="standard-basic" label="Номер" disabled value={this.context.passport.number} />
                        <br/>
                        <TextField id="standard-basic" label="код" disabled value={this.context.passport.code} />
                        <br/>
                        <MuiPickersUtilsProvider style={{width: "234px"}} utils={DateFnsUtils}>
                            <Grid justify="space-around">
                                <KeyboardDatePicker
                                    disabled
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Дата выдачи"
                                    value={this.context.passport.dateOfIssue}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <br />
                        <TextField id="standard-basic" label="Кем выдан" disabled value={this.context.passport.issuedBy} />
                        <br />
                        <MuiPickersUtilsProvider style={{width: "234px"}} utils={DateFnsUtils}>
                            <Grid justify="space-around">
                                <KeyboardDatePicker
                                    disabled
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Дата рождения"
                                    value={this.context.passport.birthday}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <br />
                        <TextField id="standard-basic" label="Место рождения" disabled value={this.context.passport.placeOfBirth} />
                    </CardContent>
                </Card>
            </>
        )
    }
}

CardPassport.contextType = UserContext

export default CardPassport