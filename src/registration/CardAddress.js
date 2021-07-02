import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {UserContext} from './Index'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {TextField} from "@material-ui/core";

class CardAddress extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Адрес регистрации
                        </Typography>
                        <TextField
                            id="standard-basic"
                            disabled
                            label="Адрес регистрации"
                            value={this.context.address.generalAddress} />
                        <br/>
                        <FormControlLabel control={<Checkbox
                            disabled
                            checked={this.context.address.coincidenceAddress}
                            inputProps={{ 'aria-label': 'primary checkbox' }} />} label="Совпадает с фактическим?" />
                        <br/>
                        <TextField id="standard-basic" disabled label="Фактический адрес" />
                    </CardContent>
                </Card>
            </>
        )
    }
}

CardAddress.contextType = UserContext

export default CardAddress