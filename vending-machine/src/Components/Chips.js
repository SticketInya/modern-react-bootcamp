import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Chips.css';

class Chips extends Component {
    render() {
        return (
            <div className='Chips'>
                <h1 className='Chips__title'>Im a happy Chips</h1>
                <img
                    src={
                        'https://cooponline.hu/wp-content/uploads/2020/11/5999860692201_0.png'
                    }
                    alt={'a happy chips'}
                    className='Chips__img'
                />
                <Link className='Chips__back' to='/'>
                    Back to the Vending Machine
                </Link>
            </div>
        );
    }
}

export default Chips;
