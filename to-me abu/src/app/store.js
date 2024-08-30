import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosReducer';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
