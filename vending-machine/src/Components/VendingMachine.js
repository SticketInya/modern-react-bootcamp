import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/VendingMachine.css';

class VendingMachine extends Component {
    render() {
        return (
            <div className='VendingMachine'>
                <h1 className='VendingMachine__title'>
                    Im a happy vending machine
                </h1>
                <div className='VendingMachine__snacks'>
                    <Link exact to='/coke'>
                        Coke
                    </Link>
                    <Link exact to='/chips'>
                        Chips
                    </Link>
                    <Link exact to='/nutbar'>
                        Nutbar
                    </Link>
                </div>
            </div>
        );
    }
}

export default VendingMachine;
