import axios from 'axios';
import React, { Component } from 'react';
import '../Styles/JokeList.css';
import Joke from './Joke';

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
            newJokes.push({ id, joke, votes: 0 });
        }

        this.setState({ jokes: newJokes });
    }

    handleVote = (id, delta) => {
        this.setState((st) => ({
            jokes: st.jokes.map((j) =>
                j.id === id ? { ...j, votes: j.votes + delta } : j,
            ),
        }));
    };

    render() {
        return (
            <div className='JokeList'>
                <div className='JokeList__sidebar'>
                    <h1 className='JokeList__title'>Dad Jokes</h1>
                    <img
                        src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
                        alt={'dad jokes'}
                    />
                    <button className='JokeList__btn'>Get more</button>
                </div>
                <div className='JokeList__jokes'>
                    {this.state.jokes.map((joke) => (
                        <Joke
                            key={joke.id}
                            joke={joke.joke}
                            votes={joke.votes}
                            upVote={() => this.handleVote(joke.id, +1)}
                            downVote={() => this.handleVote(joke.id, -1)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default JokeList;
