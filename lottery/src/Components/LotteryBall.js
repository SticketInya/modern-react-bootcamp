import React, { Component } from 'react';
import '../styles/LotteryBall.css';

class LotteryBall extends Component {
    static defaultProps = {
        lotNum: 1,
    };

    render() {
        return <div className='LotteryBall'>{this.props.lotNum}</div>;
    }
}

export default LotteryBall;
