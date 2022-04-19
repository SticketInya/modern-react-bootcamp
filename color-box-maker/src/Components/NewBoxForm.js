import React, { Component } from 'react';
import '../Styles/NewBoxForm.css';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            width: 0,
            height: 0,
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newBox = { ...this.state };
        this.props.addNewBox(newBox);
        this.setState({ color: '', width: 0, height: 0 });
    };

    render() {
        return (
            <form className='NewBoxForm' onSubmit={this.handleSubmit}>
                <label htmlFor='color'>Box Color: </label>
                <input
                    id='color'
                    name='color'
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <label htmlFor='height'>Box Height: </label>
                <input
                    id='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor='width'>Box Width: </label>
                <input
                    id='width'
                    name='width'
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <button>Add box!</button>
            </form>
        );
    }
}

export default NewBoxForm;
