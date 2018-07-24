import React, { Component } from 'react'
import Card from '../containers/Card'
import ModalContainer from '../containers/ModalContainer';
import './GameBoard.css'
import array from './images.json'
import Timer from '../containers/TimerContainer';
import { restart } from '../actions';

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstName,
            difficulty: props.difficulty,
            cardArray: this.retakeCards(props.difficulty),
        };

        this.showScoreModal = this.showScoreModal.bind(this);
        this.restart = this.restart.bind(this);
        this.retakeCards = this.retakeCards.bind(this);

    }

    retakeCards(difficulty) {
        let cardArray = [];
        for (let i = difficulty; i !== 0; i--) {
            cardArray.push({ value: Math.random(), url: array[i].url }, { value: Math.random(), url: array[i].url });
        }
        cardArray.sort((a, b) => { return b.value - a.value });
        return cardArray;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.time === -1) {
            console.log("componentWillReceiveProps",nextProps);
            this.setState({ cardArray: this.retakeCards(nextProps.difficulty) });
        }
    }

    showScoreModal() {
        this.props.loadModal("SCORE_MODAL");
    }

    restart() {
        // console.log("restart");
        this.props.restart();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.gameIsOver(nextProps, nextState)) {
            this.props.loadModal("END_OF_GAME_MODAL");
        }
        return true;
    }

    gameIsOver(props, state) {
        return !(props.guessed - +state.difficulty * 2 < 0);
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.showScoreModal}> Score </button>
                <Timer />
                <button onClick={this.restart}> Restart </button>
                <ul className="card-container">
                    {this.state.cardArray.map((el, i) =>
                        <li className="card-container-elem" key={`${el.url}+${i}`}>
                            <Card url={el.url} index={i} />
                        </li>
                    )}
                </ul>
                <ModalContainer />
            </React.Fragment>
        );
    }
}

export default GameBoard; 