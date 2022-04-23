import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nutbar.css';

class Nutbar extends Component {
    render() {
        return (
            <div className='Nutbar'>
                <h1 className='Nutbar__title'>Im a happy nutbar</h1>
                <img
                    src={
                        'https://static.storck.com/lmiv/products/hun_HU_KNO_RIE_1_P.png'
                    }
                    alt={'a happy nutbar'}
                    className={'Nutbar__img'}
                />
                <Link className='Nutbar__back' to='/'>
                    Back to the Vending Machine
                </Link>
            </div>
        );
    }
}

export default Nutbar;
