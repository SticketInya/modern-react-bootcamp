import React, { useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';
import useFormInputState from '../Hooks/useFormInputState';

function TodoForm({ addTodo }) {
    const [task, updateTask, resetTask] = useFormInputState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        resetTask();
    };

    return (
        <Paper>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={task}
                    onChange={updateTask}
                    label='New Todo'
                    fullWidth
                />
            </form>
        </Paper>
    );
}

export default TodoForm;
