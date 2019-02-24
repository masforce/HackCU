import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from "reactstrap";


export default class Welcome_Modal extends Component {
    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    render() {
        return(
            <div>
                <Modal isOpen={this.props.modal} toggle_modal={this.props.toggle_modal}>
                    <ModalHeader toggle={this.props.toggle_modal}>Welcome to the Reactstrap Playground!</ModalHeader>
                    <ModalBody>
                        <div id="enterName">
                            <Input type={"text"} placeholder="Enter name..." value={this.props.value} onKeyPress={this.handleKeyPress} onChange={this.props.update} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => {this.props.toggle_modal(); this.props.updateState();}}>Submit</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            {this.props.update(event)}
            {this.props.toggle_modal()}
            {this.props.updateState()}
        }
    }

}