import React, { useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';
import useHandleChangeState from '../Hooks/useHandleChangeState';

function TodoForm({ addTodo }) {
    const [task, updateTask, resetTask] = useHandleChangeState('');

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
