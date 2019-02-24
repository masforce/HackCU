import React, { Component } from 'react';
import './App.css';
import Alert_Tutorial from "./Alert_Tutorial";
import Button_Tutorial from "./Button_Tutorial";
import Slider_Tutorial from "./Slider_Tutorial";
import Container from "reactstrap/es/Container";

export default class App extends Component {
  constructor(props) {
      super(props);
  };

  render() {
    return (
        <Container>
            <Button_Tutorial/>
            <Alert_Tutorial/>
            <Slider_Tutorial/>
        </Container>

    );
  }
}
