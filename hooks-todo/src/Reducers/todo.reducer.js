import { v4 as uuidv4 } from 'uuid';

const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                { id: uuidv4(), task: action.task, isCompleted: false },
            ];
        case 'REMOVE':
            return state.filter((todo) => todo.id !== action.id);
        case 'EDIT':
            return state.map((todo) => {
                return todo.id === action.id
                    ? { ...todo, task: action.newTask }
                    : todo;
            });
        case 'TOGGLE':
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo,
            );
        default:
            return state;
    }
};

export default TodoReducer;
