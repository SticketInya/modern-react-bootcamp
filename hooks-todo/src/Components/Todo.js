import React from 'react';

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

function Todo({ id, task, isCompleted, isLast, toggleCompleted, removeTodo }) {
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
                <ListItemText
                    style={{
                        textDecoration: isCompleted ? 'line-through' : 'none',
                    }}
                >
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Edit'>
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
