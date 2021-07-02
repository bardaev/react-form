import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {UserContext} from './Index'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

class CardGeneral extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Card>
                    <CardContent>
                        <Typography>ФИО: {this.context.general.fullName}</Typography>
                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={this.context.general.changeLastName}
                            onChange={this.handleChange}>
                            <FormControlLabel disabled value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel disabled value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                        <Typography>Новое ФИО: {this.context.general.newLastName}</Typography>
                    </CardContent>
                </Card>
            </>
        )
    }
}

CardGeneral.contextType = UserContext

export default CardGeneral