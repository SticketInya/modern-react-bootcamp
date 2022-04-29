import React, { useEffect, useState } from 'react';

//Components
import TodoList from '../Components/TodoList';
import TodoForm from '../Components/TodoForm';

//MaterialUI
import Paper from '@mui/material/Paper';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

//CSS
import './TodoPage.css';
import useTodoState from '../Hooks/useTodoState';

function TodoPage() {
    const initialTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    const { todos, addTodo, editTodo, removeTodo, toggleTodoCompleted } =
        useTodoState(initialTodos);

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
                        toggleCompleted={toggleTodoCompleted}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoPage;
