import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/js/src/collapse.js';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavCollapsed: true,
        };
    }

    handleToggle = () => {
        this.setState((st) => ({ isNavCollapsed: !st.isNavCollapsed }));
    };

    render() {
        const isCollapsed = this.state.isNavCollapsed ? 'collapse' : '';
        return (
            <div className='Navbar'>
                <nav className='navbar navbar-expand-md navbar-light bg-light'>
                    <Link className='navbar-brand' to={'/dogs'}>
                        Puppy List
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        onClick={this.handleToggle}
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className={`${isCollapsed} navbar-collapse`}
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav mr-auto'>
                            {this.props.dogs.map((dog) => (
                                <li key={dog.name} className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        to={`/dogs/${dog.name}`}
                                    >
                                        {dog.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
