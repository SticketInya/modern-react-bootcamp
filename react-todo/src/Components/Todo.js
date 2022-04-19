import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
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

    render() {
        const todo = !this.state.isEditing ? (
            <div>
                <div className='Todo__task'>{this.props.task}</div>
                <button className='Todo__edit' onClick={this.toggleEdit}>
                    Edit
                </button>
                <button className='Todo__remove' onClick={this.removeTodo}>
                    X
                </button>
            </div>
        ) : (
            <form onSubmit={this.handleEdit}>
                <input
                    type='text'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Save</button>
            </form>
        );
        return <div className='Todo'>{todo}</div>;
    }
}

export default Todo;
