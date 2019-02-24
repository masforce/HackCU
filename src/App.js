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
import Card_Tutorial from "./Card_Tutorial";
import Switch_Tutorial from "./Switch_Tutorial";
import hackcu_image from './images/hackcu_logo.png';
import { GithubPicker} from 'react-color';


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.update = this.update.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
        this.handle_color = this.handle_color.bind(this);
        this.toggle = this.toggle.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            isOpen: false,
            username: 'And your name is...?',
            value: '',
            stylePath: './index2.css',
            background_color: '#82b1ff',
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
                <link rel="stylesheet" type="text/css" href='index.css'/>
                <Navbar style={{backgroundColor: "#edf1f7", boxShadow: '0px 0px 8px'}} light expand="md">
                    <NavbarBrand href="/"><h1><img id="resize" src={hackcu_image}/></h1></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
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
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        <Button onClick={this.reset}>Reset</Button>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div style={{background: this.state.background_color}}>
                    <div id="content" style={{backgroundColor: this.state.background}}>
                        <div id="enterName">
                            <Input style={{width:"80%", margin:"auto", padding:"20px"}} type={"text"} placeholder="(enter your username here)" value={this.state.value} onChange={this.update} />
                            <Button style={{width:"20%"}} onClick={this.updateState}>Submit</Button>
                        </div>
                        <h1>{this.state.username}</h1>
                        <div id="forum">
                            <h2>See what Reactstrap components of this site you can change:</h2>
                            <br></br>
                            <hr></hr>
                            <p>Change Background</p>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <GithubPicker onChangeComplete={this.handle_color}/>
                            </div>
                            <div id="column">
                                <div id="buttonComponent">
                                    <Button_Tutorial/>
                                </div>
                                <br/>
                                <div id="alertComponent">
                                    <Alert_Tutorial/>
                                </div>
                                <br/>
                                <div id="cardComponent">
                                    <Card_Tutorial/>
                                </div>
                                <br/>
                                <div id="sliderComponent">
                                    <Slider_Tutorial/>
                                </div>
                                <br/>
                                <div id="switchComponent">
                                    <Switch_Tutorial/>
                                </div>
                            </div>
                        </div>
                        <h1>Thanks for visiting.</h1>
                        <br></br>
                    </div>

                </div>
                <div id="footer">
                    <p>Created in Reactstrap by Evan, Nick and Mason for HackCU 2019</p>
                </div>
            </div>

        );
    }

    reset() {
        this.refs.button_tutorial.reset();
        this.refs.alert_tutorial.reset();
        this.refs.card_tutorial.reset();
        this.setState(
            {
                isOpen: false,
                username: 'And your name is...?',
                value: '',
                stylePath: './index2.css',
                background_color: '#82b1ff',
            }
        );
    }

    handle_color(color) {
        console.log(color);
        this.setState({
            background_color: color.hex
        });
    }

    update(e) {

        this.state.value = e.target.value;
        this.setState({value: e.target.value});

    }

    updateState() {
        if (this.state.value != "") {
            this.setState({
                username: 'Nice to meet you, ' + this.state.value + '!',
                value: ""
            });
        }
        else {
            this.setState({
                username: 'You didn\'t type anything.',
                value: ""
            });
        }
    }

    changeBackground() {
        this.setState({background: '#ffff'});
    }

}