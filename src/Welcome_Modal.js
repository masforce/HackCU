import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from "reactstrap";


export default class Welcome_Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.toggle = this.toggle.bind(this);
    }

    render() {
       return(
           <div>
                <Modal isOpen={this.state.modal} toggle={this.state.toggle}>
                    <ModalHeader toggle={this.toggle}>Welcome to the Reactstrap Playground!</ModalHeader>
                    <ModalBody>
                        <div id="enterName">
                            <Input type={"text"} placeholder="Enter name..." value={this.props.value} onChange={this.props.update} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => {this.toggle(); this.props.updateState();}}>Submit</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
       );
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
}