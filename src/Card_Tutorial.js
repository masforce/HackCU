import React, { Component } from 'react';
import {Card, CardHeader, CardBody, CardText, Input, Row, Col} from 'reactstrap';
import Container from "reactstrap/es/Container";

export default class Card_Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header_text: 'I am a card! Edit me!',
            body_text: 'This is some text for the body of the card',
            header_color: "gray",
            body_color: "silver",
            header_option: "default",
            body_option: "default",
            message: ""
        };

        this.update_header_text = this.update_header_text.bind(this);
        this.update_card_text = this.update_card_text.bind(this);
        this.handle_body_change = this.handle_body_change.bind(this);
        this.handle_header_change = this.handle_header_change.bind(this);
    }

    render() {
        return (
            <div>
                <h1>CARDS</h1>
                <Container>
                    <Card>
                        <CardHeader style={{color: "white", background: this.state.header_color}}>{this.state.header_text}</CardHeader>
                        <CardBody style={{color: "white", background: this.state.body_color}}>
                            <CardText>{this.state.body_text}</CardText>
                        </CardBody>
                    </Card>
                </Container>
                <br/>
                <Input type="text" placeholder="Enter some text for your card header..." onChange={this.update_header_text}/>
                <Input type="text" placeholder="Enter some text for your card body..." onChange={this.update_card_text}/>
                <Row>
                    <Col>
                        <form>
                            <h2>Choose a header color...</h2>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="red" checked={this.state.header_option === 'red'} onChange={this.handle_header_change} />
                                    RED
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="green" checked={this.state.header_option === 'green'} onChange={this.handle_header_change}/>
                                    GREEN
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="blue" checked={this.state.header_option === 'blue'} onChange={this.handle_header_change}/>
                                    BLUE
                                </label>
                            </div>
                        </form>
                    </Col>
                    <Col>
                        <form>
                            <h2>Choose a body color...</h2>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="red" checked={this.state.body_option === 'red'} onChange={this.handle_body_change} />
                                    RED
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="green" checked={this.state.body_option === 'green'} onChange={this.handle_body_change}/>
                                    GREEN
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="blue" checked={this.state.body_option === 'blue'} onChange={this.handle_body_change}/>
                                    BLUE
                                </label>
                            </div>
                        </form>
                    </Col>
                 </Row>
                <div id={"seeCardCode"}>
                    {this.state.message}
                </div>
            </div>
        );
    }

    update_header_text(event) {
        this.setState({header_text: event.target.value})
    }

    update_card_text(event) {
        this.setState({body_text: event.target.value})
    }

    handle_body_change(event) {
        let body_color = "";
        let message = "";
        switch(event.target.value) {
            case "red":
                body_color = "red";
                message = `<Card>
                            <CardHeader style={{color: "white", background: ${this.state.header_color}}}>${this.state.header_text}</CardHeader>
                                <CardBody style={{color: "white", background: red}>
                                    <CardText>${this.state.body_text}</CardText>
                                 </CardBody>
                       </Card>`;
                break;
            case "green":
                body_color = "green";
                message = `<Card>
                            <CardHeader style={{color: "white", background: ${this.state.header_color}}}>${this.state.header_text}</CardHeader>
                                <CardBody style={{color: "white", background: green}>
                                    <CardText>${this.state.body_text}</CardText>
                                 </CardBody>
                       </Card>`;
                break;
            case "blue":
                body_color = "blue";
                message = `<Card>
                            <CardHeader style={{color: "white", background: ${this.state.header_color}}}>${this.state.header_text}</CardHeader>
                                <CardBody style={{color: "white", background: blue}>
                                    <CardText>${this.state.body_text}</CardText>
                                 </CardBody>
                       </Card>`;
                break;
            default:
                body_color = "silver";
                message = "";
        }
        console.log(message);
        this.setState({
            body_color: body_color,
            body_option: event.target.value,
            message: message
        });
    }

    handle_header_change(event) {
        let header_color = "";
        let message = "";
        switch(event.target.value) {
            case "red":
                header_color = "red";
                message = `<Card>
                            <CardHeader style={{color: "white", background: red}>${this.state.header_text}</CardHeader>
                                <CardBody style={{color: "white", background: ${this.state.body_color}}}>
                                    <CardText>${this.state.body_text}</CardText>
                                 </CardBody>
                       </Card>`;
                break;
            case "green":
                header_color = "green";
                message = `<Card>
                            <CardHeader style={{color: "white", background: green}>${this.state.header_text}</CardHeader>
                                <CardBody style={{color: "white", background: ${this.state.body_color}}}>
                                    <CardText>${this.state.body_text}</CardText>
                                 </CardBody>
                       </Card>`;
                break;
            case "blue":
                header_color = "blue";
                message = `<Card>
                            <CardHeader style={{color: "white", background: blue}>${this.state.header_text}</CardHeader>
                                <CardBody style={{color: "white", background: ${this.state.body_color}}}>
                                    <CardText>${this.state.body_text}</CardText>
                                 </CardBody>
                       </Card>`;
                break;
            default:
                header_color = "silver";
                message = "";
        }
        this.setState({
            header_color: header_color,
            header_option: event.target.value,
            message: message
        });
    }
}