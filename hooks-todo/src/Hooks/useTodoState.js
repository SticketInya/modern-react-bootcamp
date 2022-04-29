import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default function useTodoState(initialValue = []) {
    const [todos, setTodos] = useLocalStorageState('todos', initialValue);

    const addTodo = (task) => {
        const newTodo = {
            id: uuidv4(),
            task,
            isCompleted: false,
        };
        setTodos([...todos, newTodo]);
    };

    const editTodo = (id, newTask) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return todo.id === id ? { ...todo, task: newTask } : todo;
            }),
        );
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggleTodoCompleted = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
        );
        setTodos(newTodos);
    };

    return {
        todos,
        setTodos,
        addTodo,
        editTodo,
        removeTodo,
        toggleTodoCompleted,
    };
}
