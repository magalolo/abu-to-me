import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

const App = () => {
  return (
    <div className="div">
      <h3 className="text-1">To Do App</h3>
      <TodoInput /> <TodoFilters />
      <hr/>
      <TodoList />
    </div>
  );
};

export default App;
