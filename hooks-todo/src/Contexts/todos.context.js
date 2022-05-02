import React, { createContext, useReducer } from 'react';
import TodoReducer from '../Reducers/todo.reducer';
import { v4 as uuidv4 } from 'uuid';

const defaultTodos = [
    {
        id: uuidv4(),
        task: 'Walk the dog with the cat',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        task: 'Do the washing up',
        isCompleted: true,
    },
    {
        id: uuidv4(),
        task: 'Cook a three course italian meal for the stoopid cat',
        isCompleted: false,
    },
];

export const TodosContext = createContext();
export const TodosDispatchContext = createContext();

export function TodosProvider({ children }) {
    const [todos, todosDispatch] = useReducer(TodoReducer, defaultTodos);

    return (
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={todosDispatch}>
                {children}
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    );
}
