import React, { useState } from 'react';

//Components
import Todo from './Todo';

//MaterialUI
import { Divider, List, Paper } from '@mui/material';

function TodoList({ todos }) {
    return (
        <Paper className='TodoList'>
            <List>
                {todos.map((todo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
