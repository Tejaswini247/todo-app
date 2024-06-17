import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index} // Unique key for React reconciliation
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;