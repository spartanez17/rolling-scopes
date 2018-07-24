import React from 'react';
import Modal from './Modal';

class EndOfGameModal extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    render() {
        const dialogStyle = {
            padding: '30px',
            backgroundColor: 'azure',
          };
        return (
            <Modal onClose={this.onClose} dialogStyle={dialogStyle}>
                <div className="congratulations">
                <h1>Congratulations comrad!</h1>
                <h2>Your time: {this.props.time}</h2>
                </div>
            </Modal>
        );
    }
}

export default EndOfGameModal;
