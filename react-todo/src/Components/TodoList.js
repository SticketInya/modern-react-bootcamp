import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    addTodo = (todo) => {
        const newTodo = { ...todo, id: uuid() };
        const newTodos = [...this.state.todos, newTodo];
        this.setState({ todos: newTodos });
    };

    remove = (id) => {
        const newTodos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({ todos: newTodos });
    };

    render() {
        return (
            <div className='TodoList'>
                <div className='TodoList__tasks'>
                    {this.state.todos.map((todo) => (
                        <Todo
                            task={todo.task}
                            key={todo.id}
                            removeTodo={() => this.remove(todo.id)}
                        />
                    ))}
                </div>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}

export default TodoList;
