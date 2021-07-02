import React from "react";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from "@material-ui/core/Typography";
import {UserContext} from "./Index";

class General extends React.Component {
    constructor(props) {
        super(props);

        this.styleText = {
            width: '25ch',
        }

        this.lastNameRef = React.createRef()

        this.handleChange = this.handleChange.bind(this)
        this.handleFullName = this.handleFullName.bind(this)
        this.handleNewLastName = this.handleNewLastName.bind(this)
    }

    handleFullName(e) {
        this.context.general.setGeneral({fullName: e.target.value})
    }

    handleChange() {
        let lastNameChBox = this.context.general.changeLastName
        this.context.general.setGeneral({changeLastName: !lastNameChBox})
    }

    handleNewLastName(e) {
        this.context.general.setGeneral({newLastName: e.target.value})
    }

    render() {
        return (
            <>
                <Typography variant="h5" gutterBottom>
                    Основная информация
                </Typography>
                <TextField
                    id="standard-basic"
                    label="ФИО"
                    value={this.context.general.fullName}
                    onChange={this.handleFullName} />
                <br/>
                <br/>
                <FormLabel component="legend">Смена фамилии</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={this.context.general.changeLastName}
                    onChange={this.handleChange}>
                    <FormControlLabel value={true} control={<Radio />} label="Yes" />
                    <FormControlLabel value={false} control={<Radio />} label="No" />
                </RadioGroup>
                <TextField
                    ref={this.lastNameRef}
                    id="standard-basic"
                    value={this.context.general.newLastName}
                    label="Новая фамилия"
                    onChange={this.handleNewLastName} />
            </>
        )
    }
}

General.contextType = UserContext

export default General