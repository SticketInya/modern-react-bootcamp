import React, { Component } from 'react';
import '../Styles/Joke.css';

class Joke extends Component {
    getVotesStyle = () => {
        const { votes } = this.props;
        return votes < 0
            ? '#F94144'
            : votes === 0
            ? '#4f4f4f'
            : votes < 5
            ? '#F8961E'
            : votes < 10
            ? '#F9C74F'
            : '#90BE6D';
    };

    getEmoteIcon = () => {
        const { votes } = this.props;
        return votes < 0
            ? 'ec ec-cold-sweat'
            : votes < 5
            ? 'ec ec-neutral-face'
            : votes < 10
            ? 'ec ec-grinning'
            : 'ec ec-rofl';
    };

    render() {
        const votesStyle = this.getVotesStyle();
        const emoteIcon = this.getEmoteIcon();
        return (
            <div className='Joke'>
                <div className='Joke__votesContainer'>
                    <i
                        className='Joke__btn fa fa-arrow-up'
                        onClick={this.props.upVote}
                    />
                    <div
                        className='Joke__votes'
                        style={{ borderColor: votesStyle }}
                    >
                        {this.props.votes}
                    </div>
                    <i
                        className='Joke__btn fa fa-arrow-down'
                        onClick={this.props.downVote}
                    />
                </div>
                <div className='Joke__text'>{this.props.joke}</div>
                <div className='Joke__emote'>
                    <span className={emoteIcon}></span>
                </div>
            </div>
        );
    }
}

export default Joke;
