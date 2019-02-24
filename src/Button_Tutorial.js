import React, { Component } from 'react';
import Button from 'reactstrap/es/Button';
import Input from 'reactstrap/es/Input';

export default class Button_Tutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "default",
      button_color: "secondary",
      message: "",
      button_text: "I am a Button! Edit Me!"
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.update_button_text = this.update_button_text.bind(this);
  }

  render() {
    return (
        <div>
          <h1>BUTTONS</h1>
          <Button color={this.state.button_color}>{this.state.button_text}</Button>
          <Input type="text" onChange={this.update_button_text}/>
          <form>
            <div className="radio">
              <label>
                <input type="radio" value="red" checked={this.state.selectedOption === 'red'} onChange={this.handleOptionChange} />
                RED
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="green" checked={this.state.selectedOption === 'green'} onChange={this.handleOptionChange}/>
                GREEN
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="blue" checked={this.state.selectedOption === 'blue'} onChange={this.handleOptionChange}/>
                BLUE
              </label>
            </div>
            <div>
              {this.state.message}
            </div>
          </form>
        </div>
    );
  }

  update_button_text(event) {
    this.setState({button_text: event.target.value}) ;
  }

  handleOptionChange(changeEvent) {
    let color = "";
    let message = "";
    switch(changeEvent.target.value) {
      case "red":
        color = "danger";
        message = `<Button color='danger'>${this.state.button_text}</Button>`;
        break;
      case "green":
        color = "success";
        message = `<Button color='success'>${this.state.button_text}</Button>`;
        break;
      case "blue":
        color = "primary";
        message = `<Button color='primary'>${this.state.button_text}</Button>`;
        break;
      default:
        color = "secondary";
    }
    this.setState({
      selectedOption: changeEvent.target.value,
      button_color: color,
      message: message
    });
  }
}