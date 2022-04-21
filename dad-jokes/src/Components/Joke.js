import React, { Component } from 'react';

class Joke extends Component {
    render() {
        return (
            <div className='Joke'>
                <div className='Joke__voteContainer'>
                    <i className='fa fa-arrow-up' onClick={this.props.upVote} />
                    <div className='Joke__votes'>{this.props.votes}</div>
                    <i
                        className='fa fa-arrow-down'
                        onClick={this.props.downVote}
                    />
                </div>
                <div className='Joke__text'>{this.props.joke}</div>
            </div>
        );
    }
}

export default Joke;
