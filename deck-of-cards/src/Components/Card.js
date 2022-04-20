import React, { Component } from 'react';
import '../Styles/Card.css';

class Card extends Component {
    render() {
        return (
            <img
                className='Card'
                src={this.props.imgSrc}
                alt={this.props.altDesc}
                style={{ transform: `rotate(${this.props.rotated}deg)` }}
            />
        );
    }
}

export default Card;
