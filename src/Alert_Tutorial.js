import React, { Component } from 'react';
import './App.css';
import Button from "reactstrap/es/Button";
import Alert from 'reactstrap/es/Alert';

export default class Alert_Tutorial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alert_selected_option: "default",
            alert_color: "secondary",
            alert_message: ""
        };
        this.handle_alert_change = this.handle_alert_change.bind(this);
    };

    render() {
        return (
            <div>
                <h1>ALERTS</h1>
                <Alert color={this.state.alert_color}>I am an Alert! Change My Color!</Alert>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="red" checked={this.state.alert_selected_option === 'red'} onChange={this.handle_alert_change} />
                            RED
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="green" checked={this.state.alert_selected_option === 'green'} onChange={this.handle_alert_change}/>
                            GREEN
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="blue" checked={this.state.alert_selected_option === 'blue'} onChange={this.handle_alert_change}/>
                            BLUE
                        </label>
                    </div>
                    <div>
                        {this.state.alert_message}
                    </div>
                </form>
            </div>
        );
    }

    handle_alert_change(changeEvent) {
        let color = "";
        let message = "";
        switch(changeEvent.target.value) {
            case "red":
                color = "danger";
                message = "<Alert color='danger'>Change my color!</Alert>";
                break;
            case "green":
                color = "success";
                message = "<Alert color='success'>Change my color!</Alert>";
                break;
            case "blue":
                color = "primary";
                message = "<Alert color='primary'>Change my color!</Alert>";
                break;
            default:
                color = "secondary";
        }

        this.setState({
            alert_selected_option: changeEvent.target.value,
            alert_color: color,
            alert_message: message
        });
    }
}

