import React from 'react';
import Modal from './Modal';

class ScoreModal extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="congratulations">
                    congratulations
                </div>
            </Modal>
        );
    }
}

export default ScoreModal;
