import React, { Component } from 'react';

class Box extends Component {
    handleClick = (e) => {
        this.props.removeBox();
    };
    render() {
        return (
            <div className='Box'>
                <div
                    style={{
                        height: `${this.props.height}px`,
                        width: `${this.props.width}px`,
                        backgroundColor: this.props.color,
                    }}
                ></div>
                <button onClick={this.handleClick}>X</button>
            </div>
        );
    }
}

export default Box;
