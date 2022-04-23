import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink exact to='/' className={'Navbar__link'}>
                    Vending Machine
                </NavLink>
                <NavLink exact to='/coke' className={'Navbar__link'}>
                    Coke
                </NavLink>
                <NavLink exact to='/chips' className={'Navbar__link'}>
                    Chips
                </NavLink>
                <NavLink exact to='/nutbar' className={'Navbar__link'}>
                    Nutbar
                </NavLink>
            </div>
        );
    }
}

export default NavBar;
