import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Card from '../containers/Card'
import ModalContainer from '../containers/ModalContainer';
import Timer from '../containers/TimerContainer';
import './GameBoard.css'
import array from './images.json'


class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstName,
            difficulty: props.difficulty,
            cardArray: []
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

    showScoreModal() {
        this.props.loadModal("SCORE_MODAL");
    }

    restart() {
        this.setState({ cardArray: this.retakeCards(this.props.difficulty) });
        this.props.restart();
    }

    gameIsOver(props, state) {
        return !(props.guessed - +state.difficulty * 2 < 0);
    }

    checkResultAndSend(){

        // let request = new Request('http://mmg-score.herokuapp.com');
        // fetch(request)
        //     .then(response => {
        //         return response.json();
        //     })
    }

    componentWillMount(){
        this.restart();
    }

    shouldComponentUpdate(nextProps, state) {
        if (this.gameIsOver(nextProps, state)) {
            this.props.loadModal("END_OF_GAME_MODAL");
            
        }
        return true;
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={this.showScoreModal}> Score </button>
                <Timer />
                <button onClick={this.restart}> Restart </button>
                <Link to="/">
                    <button onClick={this.handleSubmit}>Change Player Profile</button>
                </Link>
                <ul className="card-container">
                    {this.state.cardArray.map((el, i) =>
                        <li className="card-container-elem" key={`${el.url}+${el.value}`}>
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