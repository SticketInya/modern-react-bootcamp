import React from 'react';

//MaterialUI
import {
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({ id, task, isCompleted, isLast }) {
    return (
        <>
            <ListItem className='Todo'>
                <ListItemText>{task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Edit'>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label='Delete'>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            {isLast && <Divider />}
        </>
    );
}

export default Todo;
