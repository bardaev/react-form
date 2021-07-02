import React from "react";
import LeftPanel from "./LeftPanel";
import 'antd/dist/antd.css'
import { Steps } from 'antd';
import RightPanel from "./RightPanel";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
// import UserContext from "./UserContext";

const { Step } = Steps;

export const UserContext = React.createContext(null)

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.setGeneral = (objGeneral) => {
            this.setState({general: {...this.state.general, [Object.entries(objGeneral)[0][0]]: Object.entries(objGeneral)[0][1]}})
        }

        this.setPassport = (objPassport) => {
            this.setState({passport: {...this.state.passport, [Object.entries(objPassport)[0][0]]: Object.entries(objPassport)[0][1]}})
        }

        this.setAddress = (objAddress) => {
            this.setState({address: {...this.state.address, [Object.entries(objAddress)[0][0]]: Object.entries(objAddress)[0][1]}})
        }

        this.state = {
            general: {
                fullName: '',
                changeLastName: false,
                newLastName: '',
                setGeneral: this.setGeneral
            },
            passport: {
                serial: '',
                number: '',
                code: '',
                dateOfIssue: '',
                issuedBy: '',
                birthday: '',
                placeOfBirth: '',
                setPassport: this.setPassport
            },
            address: {
                generalAddress: '',
                coincidenceAddress: false,
                factAddress: '',
                setAddress: this.setAddress
            },
            progress: {
                current: 0,
                percent: 0
            }
        }
    }

    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <Grid container style={{flexGrow: 1}}>
                        <Typography variant="h3" gutterBottom>
                            Паспортные данные
                        </Typography>
                        <Grid item xs={6}>
                            <LeftPanel />
                        </Grid>
                        <Grid item xs={6}>
                            <RightPanel />
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <Steps current={this.state.current} percent={this.state.percent} >
                        <Step title="Шаг " />
                        <Step title="Шаг 2" />
                        <Step title="Шаг 3" />
                    </Steps>
                    {console.log(this.state)}
                </UserContext.Provider>
            </div>
        );
    }
}

export default Index