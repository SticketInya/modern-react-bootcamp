import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Components
import TodoList from '../Components/TodoList';
import TodoForm from '../Components/TodoForm';

//MaterialUI
import Paper from '@mui/material/Paper';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

//CSS
import './TodoPage.css';

function TodoPage(props) {
    const initialTodos = [
        {
            id: uuidv4(),
            task: 'Example Todo task one',
            isCompleted: false,
        },
        {
            id: uuidv4(),
            task: 'Example Todo task two',
            isCompleted: true,
        },
        {
            id: uuidv4(),
            task: 'Example Todo task three',
            isCompleted: false,
        },
    ];
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (task) => {
        const newTodo = {
            id: uuidv4(),
            task,
            isCompleted: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggleCompleted = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        );
        setTodos(newTodos);
    };

    return (
        <Paper className='TodoPage'>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5'>Hooks-Todo</Typography>
                </Toolbar>
            </AppBar>
            <Grid
                container
                style={{ justifyContent: 'center', marginTop: '5rem' }}
            >
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        toggleCompleted={toggleCompleted}
                        removeTodo={removeTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoPage;
