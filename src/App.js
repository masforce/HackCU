import React, { Component } from 'react';
import {Button, Container, Row, Col, Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import './App.css';
import Alert_Tutorial from "./Alert_Tutorial";
import Button_Tutorial from "./Button_Tutorial";
import Card_Tutorial from "./Card_Tutorial";
import Switch_Tutorial from "./Switch_Tutorial";
import hackcu_image from './images/hackcu_logo.png';
import { GithubPicker} from 'react-color';
import Welcome_Modal from "./Welcome_Modal";
import Slider from '@material-ui/lab/Slider';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
};

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.update = this.update.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
        this.handle_color = this.handle_color.bind(this);
        this.toggle = this.toggle.bind(this);
        this.reset = this.reset.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.toggle_modal = this.toggle_modal.bind(this);

        this.state = {
            isOpen: false,
            username: 'And your name is...?',
            myValue: '',
            stylePath: './index2.css',
            background_color: '#82b1ff',
            modal: true,
            value: 4,
            message: "",
            endline: '',
            background_message: ''
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {

        const { classes } = this.props;
        const { value } = this.state;

        return (

            <div>
                <link rel="stylesheet" type="text/css" href='index.css'/>
                <Navbar style={{backgroundColor: "#edf1f7", boxShadow: '0px 0px 8px'}} light expand="md">
                    <NavbarBrand href="/"><h1><img id="resize" src={hackcu_image}/></h1></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/masforce/HackCU/blob/master/src/App.js">GitHub</NavLink>
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
                                    value={this.state.myValue}/>
                </div>
                <div style={{background: this.state.background_color}}>
                    <br></br>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                        <Button color={"secondary"} onClick={this.toggle_modal}>Change Name</Button>
                    </div>
                    <div id="content" style={{backgroundColor: this.state.background}}>
                        <h1>{this.state.username}</h1>
                        <div id="forum">

                            <h2>See what parts of this site you can change:</h2>
                            <br></br>

                            <div id="customizer">

                                <div class="customizerElement">
                                    <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <h5>Start by selecting a background color...</h5>
                                    </Row>
                                    <br></br>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Row>
                                            <GithubPicker onChangeComplete={this.handle_color}/>
                                        </Row>
                                    </div>
                                    <p>This is what the code looks like:</p>
                                    <div id={"seeBackgroundCode"}>
                                        {this.state.background_message}
                                    </div>
                                </div>
                                <div className="customizerElement">
                                    <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <h5>Now set the size of the headings...</h5>
                                    </Row>
                                    <Row>
                                        <div id="sliderComponent">
                                            <h4 style={{fontSize: this.state.value * 10}}>HEADINGS</h4>
                                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                <div className={classes.root}>
                                                    <Slider
                                                        classes={{ container: classes.slider }}
                                                        value={value}
                                                        min={1}
                                                        max={10}
                                                        step={1}
                                                        onChange={this.handleSliderChange}
                                                    />
                                                    <p>This is what the code looks like:</p>
                                                    <div id={"seeSliderCode"}>
                                                        {this.state.message}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>

                            </div>

                            <div id="column">
                                <h4 style={{fontSize: this.state.value * 10}}>BUTTONS</h4>
                                <hr></hr>
                                <div id="buttonComponent">
                                    <Button_Tutorial ref="button_tutorial"/>
                                </div>
                                <br/>
                                <h4 style={{fontSize: this.state.value * 10}}>ALERTS</h4>
                                <hr></hr>
                                <div id="alertComponent" style={{marginTop: '40px'}}>
                                    <Alert_Tutorial ref="alert_tutorial"/>
                                </div>
                                <br/>
                                <h4 style={{fontSize: this.state.value * 10}}>CARDS</h4>
                                <hr></hr>
                                <div id="cardComponent" style={{marginTop: '40px'}}>
                                    <Card_Tutorial ref="card_tutorial"/>
                                </div>

                                <br/>
                                <h4 style={{fontSize: this.state.value * 10}}>SWITCH</h4>
                                <hr></hr>
                                <div id="switchComponent" style={{marginTop: '40px'}}>
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

    reset() {
        console.log('Reset was called');
        this.refs.button_tutorial.reset();
        this.refs.alert_tutorial.reset();
        this.refs.card_tutorial.reset();
        this.setState(
            {
                isOpen: false,
                username: 'And your name is...?',
                value: '4',
                stylePath: './index2.css',
                background_color: '#82b1ff',
                endline: 'Thanks for visiting!',
                background_message: ''
            }
        );
    }

    toggle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handle_color(color) {
        console.log(color);
        this.setState({
            background_color: color.hex,
            background_message: `<div style={{background: ${this.state.background_color}}}>
                                  </div>`
        });
    }

    update(e) {

        this.state.myValue = e.target.value;
        this.setState({myValue: e.target.value});

    }

    updateState() {
        if (this.state.myValue != "") {
            this.setState({
                username: 'Nice to meet you, ' + this.state.myValue + '!',
                endline: 'Thanks for visiting, ' + this.state.myValue + '!',
                myValue: ""
            });
        }
        else {
            this.setState({
                username: 'You didn\'t type anything.',
                myValue: ""
            });
        }
    }

    changeBackground() {
        this.setState({background: '#ffff'});
    }

    handleSliderChange = (event, value) => {
        this.setState({value: value,
            message: "<Slider\n" +
                "                classes={{ container: classes.slider }}\n" +
                "                value={" + this.state.value + "}\n" +
                "                min={0}\n" +
                "                max={10}\n" +
                "                step={1}\n" +
                "                onChange={this.handleSliderChange}\n" +
                "/>"});
    };



}
Example.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Example);
