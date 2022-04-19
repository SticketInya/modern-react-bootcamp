import React, { Component } from 'react';

class Todo extends Component {
    removeTodo = () => {
        this.props.removeTodo();
    };

    editTodo = () => {
        console.log('edit');
    };

    render() {
        return (
            <div className='Todo'>
                <div className='Todo__task'>{this.props.task}</div>
                <button className='Todo__edit' onClick={this.editTodo}>
                    Edit
                </button>
                <button className='Todo__remove' onClick={this.removeTodo}>
                    X
                </button>
            </div>
        );
    }
}

export default Todo;
