import React from "react";
import Typography from '@material-ui/core/Typography';
import General from "./General";
import Passport from "./Passport";
import Address from "./Address";
import Button from '@material-ui/core/Button';

const rootStyle = {
    width: '100%',
    maxWidth: 500,
}

class LeftPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={rootStyle}>
                <General />
                <br/>
                <br/>
                <Passport />
                <br/>
                <br/>
                <Address />
                <br/>
                <br/>
                <Button variant="contained" color="primary">Продолжить</Button>
            </div>
        )
    }

}

export default LeftPanel