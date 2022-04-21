import React, { Component } from 'react';
import '../Styles/Joke.css';

class Joke extends Component {
    render() {
        return (
            <div className='Joke'>
                <div className='Joke__votesContainer'>
                    <i
                        className='Joke__btn fa fa-arrow-up'
                        onClick={this.props.upVote}
                    />
                    <div className='Joke__votes'>{this.props.votes}</div>
                    <i
                        className='Joke__btn fa fa-arrow-down'
                        onClick={this.props.downVote}
                    />
                </div>
                <div className='Joke__text'>{this.props.joke}</div>
                <div className='Joke__emote'>
                    <span class='ec ec-rofl'></span>
                </div>
            </div>
        );
    }
}

export default Joke;
