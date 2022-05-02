import React, { useContext } from 'react';

//Components
import Todo from './Todo';

//MaterialUI
import { List, Paper } from '@mui/material';
import { TodosContext } from '../Contexts/todos.context';

function TodoList() {
    const { todos } = useContext(TodosContext);
    if (todos.length === 0) {
        return null;
    }
    return (
        <Paper className='TodoList'>
            <List>
                {todos.map((todo, i) => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        isLast={i < todos.length - 1}
                    />
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
