import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import '../styles/Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lottery',
        numBalls: 6,
        maxNum: 40,
    };

    state = {
        numbers: [],
    };

    getRandomNumbers = () => {
        if (this.state.numBalls <= 0) {
            return null;
        }
        let randomNums = [];
        for (let i = 0; i < this.props.numBalls; i++) {
            randomNums.push(Math.floor(Math.random() * this.props.maxNum) + 1);
        }
        this.setState({ numbers: [...randomNums] });
    };

    render() {
        return (
            <div>
                <h2 className='Lottery__title'>{this.props.title}</h2>
                <div className='Lottery__numbers'>
                    {this.state.numbers.map((num) => (
                        <LotteryBall lotNum={num} />
                    ))}
                </div>
                <button
                    className='Lottery__button'
                    onClick={this.getRandomNumbers}
                >
                    Get lottery numbers!
                </button>
            </div>
        );
    }
}

export default Lottery;
