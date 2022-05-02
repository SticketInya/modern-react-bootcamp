import React, { useContext } from 'react';
import { TodosDispatchContext } from '../Contexts/todos.context';
import useFormInputState from '../Hooks/useFormInputState';

//MaterialUI
import { TextField } from '@mui/material';

function TodoEditForm({ id, task, toggleIsEditing }) {
    const todosDispatch = useContext(TodosDispatchContext);
    const [newTask, updateNewTask] = useFormInputState(task);
    const handleSubmit = (e) => {
        e.preventDefault();
        todosDispatch({ type: 'EDIT', id, newTask });
        toggleIsEditing();
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField autoFocus value={newTask} onChange={updateNewTask} />
        </form>
    );
}

export default TodoEditForm;
