import React, { useState } from 'react';

//Components
import Todo from './Todo';

//MaterialUI
import { List, Paper } from '@mui/material';

function TodoList({ todos, toggleCompleted, removeTodo }) {
    if (todos.length === 0) {
        return null;
    }
    return (
        <Paper className='TodoList'>
            <List>
                {todos.map((todo, i) => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        isLast={i < todos.length - 1}
                        toggleCompleted={toggleCompleted}
                        removeTodo={removeTodo}
                    />
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
