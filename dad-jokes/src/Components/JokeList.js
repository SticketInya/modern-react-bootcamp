import axios from 'axios';
import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import '../Styles/JokeList.css';
import Joke from './Joke';

const API_URL = 'https://icanhazdadjoke.com/';

class JokeList extends Component {
    static defaultProps = {
        startJokesNum: 5,
    };

    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
            isLoading: false,
        };
        this.seenJokes = new Set(this.state.jokes.map((j) => j.joke));
    }

    async componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getJokes();
        }
    }

    handleVote = (id, delta) => {
        this.setState(
            (st) => ({
                jokes: st.jokes.map((j) =>
                    j.id === id ? { ...j, votes: j.votes + delta } : j,
                ),
            }),
            () => {
                window.localStorage.setItem(
                    'jokes',
                    JSON.stringify(this.state.jokes),
                );
            },
        );
    };

    getJokes = async () => {
        try {
            let newJokes = [];
            while (newJokes.length < this.props.startJokesNum) {
                const {
                    data: { joke },
                } = await axios
                    .get(API_URL, {
                        headers: { Accept: 'application/json' },
                    })
                    .catch((err) => console.log(err));
                if (!this.seenJokes.has(joke)) {
                    newJokes.push({ id: uuid(), joke, votes: 0 });
                    this.seenJokes.add(joke);
                }
            }

            this.setState(
                (st) => ({
                    isLoading: false,
                    jokes: [...st.jokes, ...newJokes],
                }),
                () => {
                    window.localStorage.setItem(
                        'jokes',
                        JSON.stringify(this.state.jokes),
                    );
                },
            );
        } catch (err) {
            console.log(err);
        }
    };

    handleClick = () => {
        this.setState({ isLoading: true }, this.getJokes);
    };

    render() {
        if (this.state.isLoading) {
            return (
                <div className='JokeList__loader'>
                    <i className='far fa-5x fa-smile fa-spin' />
                    <p className='JokeList__title'>Loading...</p>
                </div>
            );
        }
        const jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
        return (
            <div className='JokeList'>
                <div className='JokeList__sidebar'>
                    <h1 className='JokeList__title'>Dad Jokes</h1>
                    <img
                        src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
                        alt={'dad jokes'}
                    />
                    <button
                        className='JokeList__btn'
                        onClick={this.handleClick}
                    >
                        Get more
                    </button>
                </div>
                <div className='JokeList__jokes'>
                    {jokes.map((joke) => (
                        <Joke
                            key={joke.id}
                            joke={joke.joke}
                            votes={joke.votes}
                            upVote={() => this.handleVote(joke.id, 1)}
                            downVote={() => this.handleVote(joke.id, -1)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default JokeList;
