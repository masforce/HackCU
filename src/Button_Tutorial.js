import React, { Component } from 'react';
import Button from 'reactstrap/es/Button';

export default class Button_Tutorial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: "default",
            button_color: "secondary",
            message: "",
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    render() {
        return (
            <div>
                <h1>BUTTONS</h1>
                <Button color={this.state.button_color}>Change My Color!</Button>
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
}