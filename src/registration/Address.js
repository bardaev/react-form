import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'date-fns';
import {UserContext} from "./Index";

class Address extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddrRegister = this.handleAddrRegister.bind(this)
        this.handleCoincidenceAddress = this.handleCoincidenceAddress.bind(this)
        this.handleAddrFact = this.handleAddrFact.bind(this)
    }

    handleAddrRegister(e) {
        this.context.address.setAddress({generalAddress: e.target.value})
    }

    handleCoincidenceAddress(e) {
        this.context.address.setAddress({coincidenceAddress: !this.context.address.coincidenceAddress})
    }

    handleAddrFact(e) {
        this.context.address.setAddress({factAddress: e.target.value})
    }

    render() {
        return (
            <>
                <Typography variant="h5" gutterBottom>
                    Адрес регистрации
                </Typography>
                <TextField
                    id="standard-basic"
                    label="Адрес регистрации"
                    value={this.context.address.generalAddress}
                    onChange={this.handleAddrRegister}/>
                <br/>
                <FormControlLabel control={<Checkbox
                    checked={this.context.address.coincidenceAddress}
                    onChange={this.handleCoincidenceAddress}
                    inputProps={{ 'aria-label': 'primary checkbox' }} />} label="Совпадает с фактическим?" />
                <br/>
                <TextField id="standard-basic" label="Фактический адрес" />
            </>
        )
    }

}

Address.contextType = UserContext

export default Address