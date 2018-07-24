import React, { Component } from 'react';
import Form from '../containers/Form';

class Menu extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Hello, tovarish!</h1>
                    <p>DKM Pairs is a memory game where you need to match pairs of tiles.
                        Playing is very simple - you turn over one tile and then try to find a matching tile.
                        There are 32 levels, each getting progressively harder.</p>
                </header>
                <Form />
            </div>
        );
    }
}

export default Menu;