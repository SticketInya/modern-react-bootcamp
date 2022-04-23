import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Coke.css';

class Coke extends Component {
    render() {
        return (
            <div className='Coke'>
                <h1 className='Coke__title'>Im a happy Coke</h1>
                <img
                    src={
                        'https://static.onlineprima.hu/img/prd//21/09/2021/35398-coca-cola-cherry-coke-colaizu-szensavas-uditoital-cseresznye-izesitessel-500-ml-2.png'
                    }
                    alt={'a happy coke'}
                    className={'Coke__img'}
                />
                <Link className='Coke__back' to='/'>
                    Back to the Vending Machine
                </Link>
            </div>
        );
    }
}

export default Coke;
