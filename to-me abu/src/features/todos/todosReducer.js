import { createAction, createReducer } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/addTodo');
export const toggleTodo = createAction('todos/toggleTodo');
export const deleteTodo = createAction('todos/deleteTodo');
export const setFilter = createAction('todos/setFilter');
export const deleteDoneTodos = createAction('todos/deleteDoneTodos');
export const deleteAllTodos = createAction('todos/deleteAllTodos');
export const editTodo = createAction('todos/editTodo');
export const toggleImportant = createAction('todos/toggleImportant');

const initialState = {
  todos: [],
  filter: 'all',
};

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.push({ id: new Date(), text: action.payload, done: false, important: false });
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(deleteDoneTodos, (state) => {
      state.todos = state.todos.filter((todo) => !todo.done);
    })
    .addCase(deleteAllTodos, (state) => {
      state.todos = [];
    })
    .addCase(editTodo, (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    })
    .addCase(toggleImportant, (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.important = !todo.important;
      }
    });
});

export default todosReducer;
