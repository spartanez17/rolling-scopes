import React, { Component } from 'react';
import Card from './Card';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      firstName: props.firstName,
      difficultyValue: props.difficulty || 1,
    };
  }

  render() {
    let cardArray = [];
    for (let i = this.state.difficulty * 4; i !== 0; i--) {
      cardArray.push({ value: Math.random(), card: <Card url={`${i}`} /> }, { value: Math.random(), card: <Card url={`${i}`} /> });
    }

    cardArray.sort((a, b) => { return b.value - a.value });

    return (
      <React.Fragment>
        {cardArray.map((el, i) =>
          <li key={i}>
            {el.card}
          </li>
        )}
      </React.Fragment>
    );
  }
}

export default GameBoard; 