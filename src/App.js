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
import Welcome_Modal from "./Welcome_Modal";


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.update = this.update.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
        this.handle_color = this.handle_color.bind(this);
        this.toggle = this.toggle.bind(this);
        this.reset = this.reset.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggle_modal = this.toggle_modal.bind(this);

        this.state = {
            isOpen: false,
            username: 'And your name is...?',
            endline: '',
            value: '',
            stylePath: './index2.css',
            background_color: '#82b1ff',
            modal: true
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
                                        <Button onClick={this.reset}>Reset</Button>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div>
                    <Welcome_Modal  toggle_modal={this.toggle_modal}
                                    modal={this.state.modal}
                                    updateState={this.updateState}
                                   update={this.update}
                                   value={this.state.value}/>
                </div>
                <div style={{background: this.state.background_color}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        <Button color={"secondary"} onClick={this.toggle_modal}>Change Name</Button>
                    </div>
                    <div id="content" style={{backgroundColor: this.state.background}}>
                        <h1>{this.state.username}</h1>
                        <div id="forum">
                            <h2>See what parts of this site you can change:</h2>
                            <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <h5>Start by selecting a background color...</h5>
                            </Row>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Row>
                                    <GithubPicker onChangeComplete={this.handle_color}/>
                                </Row>
                            </div>
                            <div id="column">
                                <div id="buttonComponent">
                                    <Button_Tutorial ref="button_tutorial"/>
                                </div>
                                <br/>
                                <div id="alertComponent">
                                    <Alert_Tutorial ref="alert_tutorial"/>
                                </div>
                                <br/>
                                <div id="cardComponent">
                                    <Card_Tutorial ref="card_tutorial"/>
                                </div>
                                <br/>
                                <div id="sliderComponent">
                                    <Slider_Tutorial ref="slider_tutorial"/>
                                </div>
                                <br/>
                                <div id="switchComponent">
                                    <Switch_Tutorial ref="switch_tutorial"/>
                                </div>
                            </div>
                        </div>
                        <h1>{this.state.endline}</h1>
                        <br></br>
                    </div>

                </div>
                <div id="footer">
                    <p>Created in Reactstrap by Evan, Nick and Mason for HackCU 2019</p>
                </div>
            </div>

        );
    }

    toggle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    reset() {
        this.refs.button_tutorial.reset();
        this.refs.alert_tutorial.reset();
        this.refs.card_tutorial.reset();
        this.setState(
            {
                isOpen: false,
                username: 'And your name is...?',
                endline: 'Thanks for visiting!',
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
        this.setState({value: e.target.value});
    }

    updateState() {
        if (this.state.value != "") {
            this.setState({
                username: 'Nice to meet you, ' + this.state.value + '!',
                endline: 'Thanks for visiting, ' + this.state.value + '!',
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