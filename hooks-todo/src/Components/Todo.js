import React from 'react';

//Components
import useToggleState from '../Hooks/useToggleState';
import TodoEditForm from './TodoEditForm';

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

function Todo({
    id,
    task,
    isCompleted,
    isLast,
    toggleCompleted,
    removeTodo,
    editTodo,
}) {
    const [isEditing, toggleIsEditing] = useToggleState(false);

    const handleRemove = () => {
        removeTodo(id);
    };
    return (
        <>
            <ListItem className='Todo'>
                <Checkbox
                    checked={isCompleted}
                    onClick={() => toggleCompleted(id)}
                />
                {isEditing ? (
                    <TodoEditForm
                        editTodo={editTodo}
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
