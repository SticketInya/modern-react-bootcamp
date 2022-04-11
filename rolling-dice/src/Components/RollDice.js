import React, { Component } from 'react';
import Die from './Die';
import '../styles/RollDice.css';

class RollDice extends Component {
  state = {
    die1: 1,
    die2: 1,
    isAnimated: false,
  };

  animateDice() {
    this.setState({ isAnimated: true });
    setTimeout(() => {
      this.setState({ isAnimated: false });
    }, 1100);
  }

  roll = () => {
    const rand1 = Math.floor(Math.random() * 6) + 1;
    const rand2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ die1: rand1, die2: rand2 });
    this.animateDice();
  };

  render() {
    return (
      <div>
        <div className='Dice__container'>
          <Die number={this.state.die1} isAnimated={this.state.isAnimated} />
          <Die number={this.state.die2} isAnimated={this.state.isAnimated} />
        </div>
        <button
          className='RollDice__button'
          onClick={this.roll}
          disabled={this.state.isAnimated}
        >
          {this.state.isAnimated ? 'Rolling...' : 'Click Me'}
        </button>
      </div>
    );
  }
}

export default RollDice;
