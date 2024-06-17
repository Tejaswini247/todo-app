import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} // Style completed tasks
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
}

export default TodoItem;