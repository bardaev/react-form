import React from "react";
import CardGeneral from "./CardGeneral";
import CardPassport from "./CardPassport";
import CardAddress from "./CardAddress";

class RightPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <CardGeneral />
                <br/>
                <br/>
                <CardPassport />
                <br/>
                <br/>
                <CardAddress />
            </div>
        );
    }
}

export default RightPanel