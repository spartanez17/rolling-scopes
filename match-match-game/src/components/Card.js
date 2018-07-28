import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
            url: this.props.url,
            status: "waiting",
        };
        this.handlePickedCard = this.handlePickedCard.bind(this);
        this.updateStatus = this.updateStatus.bind(this);

    }

    handlePickedCard() {
        if (this.state.status === "waiting") {
            this.props.pickCard({
                index: this.state.index,
                url: this.state.url,
                status: this.state.status,
            })
        }
    }

    updateStatus() {
        if (this.props.pickedCards.length) {
            this.props.updateStatus({
                index: this.state.index,
                url: this.state.url,
                status: this.state.status,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        let currElement = nextProps.pickedCards.find((el) => el.index === this.props.index);
        if (currElement) {
            this.setState({ status: currElement.status });
        }
    }

    render() {
        const imageUrl = require(`../resource/${this.state.url}`);
        const backUrl = require(`../resource/back2.png`);
        let style = this.state.status === "picked" ? "flipped" : "";
        return (
            <div className={`flip-container ${style}`} onTransitionEnd={this.updateStatus} onClick={this.handlePickedCard}>
                <div className="card front" style={{ backgroundImage: `url(${imageUrl})` }} />
                <div className="card back" style={{ backgroundImage: `url(${backUrl})` }} >{this.state.url}</div>
            </div>
        );
    }
}

export default Card; 