import React, { useState } from 'react';

//Components
import Todo from './Todo';

//MaterialUI
import { List, Paper } from '@mui/material';

function TodoList({ todos, toggleCompleted }) {
    return (
        <Paper className='TodoList'>
            <List>
                {todos.map((todo, i) => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        isLast={i < todos.length - 1}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
