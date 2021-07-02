import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import {UserContext} from "./Index";

class Passport extends React.Component {
    constructor(props) {
        super(props);

        this.handleSerial = this.handleSerial.bind(this)
        this.handleNumber = this.handleNumber.bind(this)
        this.handleCode = this.handleCode.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this)
        this.handleIssuedBy = this.handleIssuedBy.bind(this)
        this.handleBirthday = this.handleBirthday.bind(this)
        this.handlePlaceOfBirth = this.handlePlaceOfBirth.bind(this)
    }

    handleSerial(e) {
        this.context.passport.setPassport({serial: e.target.value})
    }

    handleNumber(e) {
        this.context.passport.setPassport({number: e.target.value})
    }

    handleCode(e) {
        this.context.passport.setPassport({code: e.target.value})
    }

    handleDateChange(date) {
        this.context.passport.setPassport({dateOfIssue: date})
    }

    handleBirthdayChange(date) {
        this.context.passport.setPassport({birthday: date})
    }

    handleIssuedBy(e) {
        this.context.passport.setPassport({passport: e.target.value})
    }

    handleBirthday(e) {
        this.context.passport.setPassport({birthday: e.target.value})
    }

    handlePlaceOfBirth(e) {
        this.context.passport.setPassport({placeOfBirth: e.target.value})
    }

    render() {
        return (
            <>
                <Typography variant="h5" gutterBottom>
                    Паспортные данные
                </Typography>
                <TextField id="standard-basic" label="Серия" value={this.context.passport.serial} onChange={this.handleSerial} />
                <br/>
                <TextField id="standard-basic" label="Номер" value={this.context.passport.number} onChange={this.handleNumber} />
                <br/>
                <TextField id="standard-basic" label="код" value={this.context.passport.code} onChange={this.handleCode} />
                <br/>
                <MuiPickersUtilsProvider style={{width: "234px"}} utils={DateFnsUtils}>
                    <Grid justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Дата выдачи"
                            value={this.context.passport.dateOfIssue}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <br />
                <TextField id="standard-basic" label="Кем выдан" value={this.context.passport.issuedBy} onChange={this.handleIssuedBy} />
                <br />
                <MuiPickersUtilsProvider style={{width: "234px"}} utils={DateFnsUtils}>
                    <Grid justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Дата рождения"
                            value={this.context.passport.birthday}
                            onChange={this.handleBirthdayChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <br />
                <TextField id="standard-basic" label="Место рождения" value={this.context.passport.placeOfBirth} onChange={this.handlePlaceOfBirth} />
            </>
        )
    }

}

Passport.contextType = UserContext

export default Passport