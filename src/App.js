import React, { Component } from 'react';
import {Button, Container, Row, Col, Pane, Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import './App.css';
import Alert_Tutorial from "./Alert_Tutorial";
import Button_Tutorial from "./Button_Tutorial";
import Slider_Tutorial from "./Slider_Tutorial";

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.update = this.update.bind(this);
        this.changeBackground = this.changeBackground.bind(this);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            username: 'And your name is...?',
            value: '',
            stylePath: './index2.css'
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  render() {
    return (
            <div>
            <link rel="stylesheet" type="text/css" href='index.css' />
            <Navbar style={{backgroundColor: "#edf1f7", boxShadow: '0px 0px 8px'}} light expand="md">
                <NavbarBrand href="/"><h1>Hack CU</h1></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
            <div id="content" style={{backgroundColor: this.state.background}}>


                <div id="enterName">

                    <Input style={{width:"80%", margin:"auto", padding:"20px"}} type={"text"} placeholder="(enter your username here)" value={this.state.value} onChange={this.update} />
                    <Button style={{width:"20%"}} onClick={this.updateState}>Submit</Button>

                </div>

                <h1>{this.state.username}</h1>
                <div id="forum">
                    <h2>See what parts of this site you can change:</h2>
                    <Button style={{width:"20%"}} onClick={this.updateBackground}>Change Background</Button>
                        <Form>
                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                        </Form>
                    <Container>
                        <Button_Tutorial/>
                        <Alert_Tutorial/>
                        <Slider_Tutorial/>
                    </Container>
                </div>
            </div>
            </div>
    );
  }

    update(e) {

        this.state.value = e.target.value;
        this.setState({value: e.target.value});

    }

    updateState() {
        if (this.state.value != "") {
            this.setState({username: 'Nice to meet you, ' + this.state.value + '!'});
            this.setState({value: ""});
        }
        else {
            this.setState({username: 'You didn\'t type anything.'});
            this.setState({value: ""});
        }
    }

    changeBackground() {
        this.setState({background: '#ffff'});
    }



}

//export default App;
