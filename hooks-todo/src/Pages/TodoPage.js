import React from 'react';
import TodoList from '../Components/TodoList';
import TodoForm from '../Components/TodoForm';
import { TodosProvider } from '../Contexts/todos.context';

//MaterialUI
import Paper from '@mui/material/Paper';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

//Styles
import './TodoPage.css';

function TodoPage() {
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
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoPage;
