import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
    };
  }

  render() {
    return (
      <div className="card">
        `${this.state.url}`
        </div>
    );
  }
}

export default Card; 