import React, { Component } from 'react';
import './App.css';
import Alert from 'reactstrap/es/Alert';
import Button from "./Button_Tutorial";
import Input from "reactstrap/es/Input";

export default class Alert_Tutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert_selected_option: "default",
      alert_color: "secondary",
      alert_message: "",
      alert_text: "I am an Alert! Edit Me!"
    };
    this.handle_alert_change = this.handle_alert_change.bind(this);
    this.update_alert_text = this.update_alert_text.bind(this);
  };

  render() {
    return (
        <div>
          <h1>ALERTS</h1>
          <Alert color={this.state.alert_color}>{this.state.alert_text}</Alert>
          <Input type="text" onChange={this.update_alert_text}/>
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
        message = `<Alert color='danger'>${this.state.alert_text}</Alert>`;
        break;
      case "green":
        color = "success";
        message = `<Alert color='success'>${this.state.alert_text}</Alert>`;
        break;
      case "blue":
        color = "primary";
        message = `<Alert color='primary'>${this.state.alert_text}</Alert>`;
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

  update_alert_text(event) {
    this.setState({alert_text: event.target.value})
  }
}
