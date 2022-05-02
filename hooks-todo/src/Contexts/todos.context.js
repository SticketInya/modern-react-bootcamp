import React, { createContext } from 'react';
import useTodoState from '../Hooks/useTodoState';

export const TodosContext = createContext();

export function TodosProvider({ children }) {
    const todosState = useTodoState([]);

    return (
        <TodosContext.Provider value={todosState}>
            {children}
        </TodosContext.Provider>
    );
}
