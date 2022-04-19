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

    update = (id, task) => {
        const newTodos = this.state.todos.map((todo) =>
            todo.id === id ? { ...todo, task: task } : todo,
        );
        this.setState({ todos: [...newTodos] });
    };

    render() {
        return (
            <div className='TodoList'>
                <h1 className='TodoList__title'>Todo List</h1>
                <NewTodoForm addTodo={this.addTodo} />
                <div className='TodoList__tasks'>
                    {this.state.todos.map((todo) => (
                        <Todo
                            task={todo.task}
                            key={todo.id}
                            removeTodo={() => this.remove(todo.id)}
                            editTodo={(task) => this.update(todo.id, task)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoList;
