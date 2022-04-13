import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/Hangman.css';

library.add(faHeart);

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
    };

    constructor(props) {
        super(props);
        this.state = {
            nWrong: 0,
            guessed: new Set(),
            answer: 'apple',
        };
    }

    guessedWord = () => {
        return this.state.answer
            .split('')
            .map((letter) => (this.state.guessed.has(letter) ? letter : '_'));
    };

    handleGuess = (e) => {
        const letter = e.target.value;
        this.setState((state) => ({
            guessed: state.guessed.add(letter),
            nWrong: state.nWrong + (state.answer.includes(letter) ? 0 : 1),
        }));
    };

    generateButtons = () => {
        return 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => {
            return (
                <button
                    value={letter}
                    onClick={this.handleGuess}
                    disabled={this.state.guessed.has(letter)}
                >
                    {letter}
                </button>
            );
        });
    };

    render() {
        const lives = Array.from({
            length: this.props.maxWrong - this.state.nWrong,
        }).map((n) => (
            <FontAwesomeIcon icon='fa-solid fa-heart' className='life' />
        ));
        return (
            <div className='Hangman'>
                <h1>React-hangman</h1>
                <div className='Hangman__lives'>{lives}</div>
                <p className='Hangman__word'>{this.guessedWord()}</p>
                <p className='Hangman__btns'>{this.generateButtons()}</p>
            </div>
        );
    }
}

export default Hangman;
