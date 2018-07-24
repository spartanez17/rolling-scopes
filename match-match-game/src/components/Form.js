import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';


class Form extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            firstName: props.firstName,
            secondName: props.secondName,
            email: props.email,
            difficulty: props.difficulty,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.props.profileListener({
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            email: this.state.email,
        });
        this.props.difficultyListener(this.state.difficulty);
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <label>
                            First Name:
                            <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                        </label>
                    </li>
                    <li>
                        <label>
                            Second Name:
                        <input name="secondName" type="text" value={this.state.secondName} onChange={this.handleChange} />
                        </label></li>
                    <li>
                        <label>
                            Email:
                        <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                        </label></li>
                    <li>
                        <label>
                            Choose difficulty:
                        <select name="difficulty" value={this.state.difficulty} onChange={this.handleChange}>
                                <option value="4">Easy</option>
                                <option value="6">Normal</option>
                                <option value="8">Hard</option>
                            </select>
                        </label>
                    </li>
                </ul>
                <Link to="/game">
                    <button onClick={this.handleSubmit}>Go Play!</button>
                </Link>
            </React.Fragment>
        );
    }
}

export default Form;