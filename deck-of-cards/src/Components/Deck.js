import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import '../Styles/Deck.css';

const API_URL = 'https://deckofcardsapi.com/api/deck/';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: '',
            remaining: null,
            drawnCards: [],
        };
    }

    async componentDidMount() {
        const response = await axios
            .get(`${API_URL}new/shuffle/`)
            .catch((err) => console.log(err));
        const { deck_id, remaining } = response.data;
        this.setState({ deckId: deck_id, remaining: remaining });
    }

    getCard = async () => {
        const drawUrl = `${API_URL}${this.state.deckId}/draw/?count=1`;
        const {
            data: { cards, remaining },
        } = await axios.get(drawUrl).catch((err) => console.log(err));
        const minRot = -15;
        const maxRot = +15;
        const rotation = Math.floor(Math.random() * (maxRot - minRot)) + minRot;
        const newCards = [
            ...this.state.drawnCards,
            { ...cards[0], rotated: rotation },
        ];
        this.setState({ drawnCards: newCards, remaining: remaining });
    };
    handleClick = () => {
        this.getCard();
    };

    shuffleDeck = async () => {
        const shuffleUrl = `${API_URL}${this.state.deckId}/shuffle/`;
        const {
            data: { remaining },
        } = await axios.get(shuffleUrl).catch((err) => console.log(err));
        this.setState({ remaining: remaining, drawnCards: [] });
        this.getCard();
    };

    render() {
        const isDisabled = this.state.remaining < 1;
        const cards = this.state.drawnCards.map((card) => (
            <Card
                imgSrc={card.image}
                altDesc={`${card.value} of ${card.suit}`}
                rotated={card.rotated}
                key={card.code}
            />
        ));
        const button = isDisabled ? (
            <button className='Deck__button' onClick={this.shuffleDeck}>
                shuffle
            </button>
        ) : (
            <button
                className='Deck__button'
                onClick={this.handleClick}
                disabled={isDisabled}
            >
                Draw a Card
            </button>
        );
        return (
            <div className='Deck'>
                <h1 className='Deck__title'>React Deck of Cards</h1>
                {button}
                <div className='Deck__Cards'>{cards}</div>
            </div>
        );
    }
}

export default Deck;
