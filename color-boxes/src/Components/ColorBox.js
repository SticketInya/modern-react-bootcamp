import React, { Component } from 'react';
import '../Styles/ColorBox.css';

class ColorBox extends Component {
    render() {
        return (
            <div
                onClick={this.props.onClick}
                className='ColorBox'
                style={{ backgroundColor: `var(--${this.props.color})` }}
            >
                {this.props.color}
            </div>
        );
    }
}

export default ColorBox;
