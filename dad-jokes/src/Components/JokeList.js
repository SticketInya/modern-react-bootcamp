import axios from 'axios';
import React, { Component } from 'react';

const API_URL = 'https://icanhazdadjoke.com/';

class JokeList extends Component {
    static defaultProps = {
        startJokesNum: 10,
    };

    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
        };
    }

    async componentDidMount() {
        let newJokes = [];
        while (newJokes.length < this.props.startJokesNum) {
            const {
                data: { id, joke },
            } = await axios.get(API_URL, {
                headers: { Accept: 'application/json' },
            });
            newJokes.push({ id, joke });
        }

        this.setState({ jokes: newJokes });
    }

    render() {
        return (
            <div className='JokeList'>
                <h1 className='JokeList__title'>Joke List</h1>
                <div className='JokeList__jokes'>
                    {this.state.jokes.map((joke) => (
                        <p key={joke.id}>{joke.joke}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default JokeList;
