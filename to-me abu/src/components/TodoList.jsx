import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo, toggleImportant } from '../features/todos/todosReducer';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const filter = useSelector(state => state.todos.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.done;
    if (filter === 'pending') return !todo.done;
    return true;
  });

  return (
    <div id="todos-container">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => dispatch(toggleTodo(todo.id))}
          onDelete={() => dispatch(deleteTodo(todo.id))}
          onEdit={(id, text) => dispatch(editTodo({ id, text }))}
          onToggleImportant={() => dispatch(toggleImportant(todo.id))}
        />
      ))}
    </div>
  );
};

export default TodoList;
