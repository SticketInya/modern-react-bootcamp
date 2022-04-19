import React, { Component } from 'react';
import '../Styles/Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            isDone: false,
            task: this.props.task,
        };
    }

    removeTodo = () => {
        this.props.removeTodo();
    };

    toggleEdit = () => {
        this.setState({ isEditing: !this.state.isEditing });
    };

    handleChange = (e) => {
        this.setState({ task: e.target.value });
    };

    handleEdit = (e) => {
        e.preventDefault();
        this.props.editTodo(this.state.task);
        this.toggleEdit();
    };

    handleClick = () => {
        this.setState({ isDone: !this.state.isDone });
    };

    render() {
        const doneTodo = this.state.isDone ? '--done' : '';
        const todo = !this.state.isEditing ? (
            <div className='Todo__display'>
                <div
                    className={`Todo__task${doneTodo}`}
                    onClick={this.handleClick}
                >
                    {this.props.task}
                </div>
                <button className='Todo__edit' onClick={this.toggleEdit}>
                    Edit
                </button>
                <button className='Todo__remove' onClick={this.removeTodo}>
                    X
                </button>
            </div>
        ) : (
            <form className='Todo__form' onSubmit={this.handleEdit}>
                <input
                    className='Todo__input'
                    type='text'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button className='Todo__save'>Save</button>
            </form>
        );
        return <div className='Todo'>{todo}</div>;
    }
}

export default Todo;
