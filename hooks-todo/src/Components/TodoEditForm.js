import { TextField } from '@mui/material';
import React from 'react';
import useFormInputState from '../Hooks/useFormInputState';

function TodoEditForm({ id, task, editTodo, toggleIsEditing }) {
    const [newTask, updateNewTask] = useFormInputState(task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(id, newTask);
        toggleIsEditing();
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField autoFocus value={newTask} onChange={updateNewTask} />
        </form>
    );
}

export default TodoEditForm;
