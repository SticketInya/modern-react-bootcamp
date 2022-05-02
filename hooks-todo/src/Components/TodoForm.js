import React, { useContext } from 'react';
import useFormInputState from '../Hooks/useFormInputState';
import { TodosDispatchContext } from '../Contexts/todos.context';

//MaterialUI
import { Paper, TextField } from '@mui/material';

function TodoForm() {
    const todosDispatch = useContext(TodosDispatchContext);
    const [task, updateTask, resetTask] = useFormInputState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        todosDispatch({ type: 'ADD', task });
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
