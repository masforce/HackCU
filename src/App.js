import React, { Component } from 'react';
import './App.css';
import Button from "reactstrap/es/Button";

export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          selectedOption: "default",
          button_color: "secondary",
          message: ""
      };

      this.handleOptionChange = this.handleOptionChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render() {
    return (
        <div className="container">
            <Button color={this.state.button_color}>Change my color!</Button>
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={this.handleFormSubmit}>
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
            </div>
        </div>
    );
  }

    handleOptionChange(changeEvent) {
        let color = "";
        let message = "";
        switch(changeEvent.target.value) {
            case "red":
                color = "danger";
                message = "<Button color='danger'>Change my color!</Button>";
                break;
            case "green":
                color = "success";
                message = "<Button color='success'>Change my color!</Button>";
                break;
            case "blue":
                color = "primary";
                message = "<Button color='primary'>Change my color!</Button>";
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

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();

        console.log('You have selected:', this.state.selectedOption);
    }
}
