import React, { useContext } from 'react';
import useToggleState from '../Hooks/useToggleState';
import TodoEditForm from './TodoEditForm';
import { TodosContext } from '../Contexts/todos.context';

//MaterialUI
import {
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Divider,
    Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({ id, task, isCompleted, isLast }) {
    const { removeTodo, toggleTodoCompleted } = useContext(TodosContext);
    const [isEditing, toggleIsEditing] = useToggleState(false);

    const handleRemove = () => {
        removeTodo(id);
    };
    return (
        <>
            <ListItem className='Todo'>
                <Checkbox
                    checked={isCompleted}
                    onClick={() => toggleTodoCompleted(id)}
                />
                {isEditing ? (
                    <TodoEditForm
                        task={task}
                        id={id}
                        toggleIsEditing={toggleIsEditing}
                    />
                ) : (
                    <ListItemText
                        style={{
                            textDecoration: isCompleted
                                ? 'line-through'
                                : 'none',
                        }}
                    >
                        {task}
                    </ListItemText>
                )}
                <ListItemSecondaryAction>
                    <IconButton aria-label='Edit' onClick={toggleIsEditing}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label='Delete' onClick={handleRemove}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            {isLast && <Divider />}
        </>
    );
}

export default Todo;
