import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        };
    }

    handleChange = (e) => {
        this.setState({ task: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ task: '' });
    };

    render() {
        return (
            <div className='NewTodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='NewTodoForm__input'
                        placeholder='NewTodo'
                        onChange={this.handleChange}
                    />
                    <button className='NewTodoForm__add'>Add todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;
