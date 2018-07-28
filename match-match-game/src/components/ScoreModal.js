import React from 'react';
import Modal from './Modal';
import './ScoreModal.css';

class ScoreModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topResult: []
        }
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        let request = new Request('http://mmg-score.herokuapp.com');
        fetch(request)
            .then(response => {
                return response.json();
            })
            .then(response => {
                let playerNotes = response.result;
                let topResult = [];
                for (let i = 0; i < 10; i++) {
                    let min = { score: Number.MAX_SAFE_INTEGER };
                    for (let j = 0; j < playerNotes.length; j++) {
                        if (playerNotes[j].score <= min.score &&
                            playerNotes[j].score > 2 &&
                            !topResult.some(el => playerNotes[j]._id === el._id)) {

                            min = playerNotes[j];
                        }
                    }
                    topResult.push(min);
                }
                this.setState({ topResult: topResult });
            });
    }

    onClose() {
        this.props.hideModal();
    }

    render() {
        const dialogStyle = {
            padding: '30px',
            backgroundColor: 'white',
        };
        return (
            <Modal onClose={this.onClose} dialogStyle={dialogStyle}>
                <table className="">
                    <tbody>
                        <tr>
                            <th>№</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Time</th>
                        </tr>
                        {this.state.topResult.map((el, index) =>
                            <tr key={el._id}>
                                <td>{index + 1}</td>
                                <td>{el.username}</td>
                                <td>{el.email}</td>
                                <td>{el.score} s</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Modal>
        );
    }
}

export default ScoreModal;
