import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/Hangman.css';
import { words } from './words';

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
            answer: this.getWord(),
        };
    }

    guessedWord = () => {
        return this.state.answer
            .split('')
            .map((letter) =>
                this.state.guessed.has(letter) || letter === '-' ? letter : '_',
            );
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
                    key={letter}
                    value={letter}
                    onClick={this.handleGuess}
                    disabled={this.state.guessed.has(letter)}
                >
                    {letter}
                </button>
            );
        });
    };

    getWord = () => {
        const randIndex = Math.floor(Math.random() * words.length);
        return words[randIndex];
    };

    render() {
        const isGameOver = this.state.nWrong >= this.props.maxWrong;
        const lives = Array.from({
            length: this.props.maxWrong - this.state.nWrong,
        }).map((n, i) => (
            <FontAwesomeIcon
                key={i}
                icon='fa-solid fa-heart'
                className='life'
            />
        ));
        return (
            <div className='Hangman'>
                <h1>React-hangman</h1>
                <div className='Hangman__lives'>{lives}</div>
                <p className='Hangman__word'>
                    {isGameOver ? this.state.answer : this.guessedWord()}
                </p>
                <p className='Hangman__btns'>
                    {isGameOver ? 'You lost!' : this.generateButtons()}
                </p>
            </div>
        );
    }
}

export default Hangman;
