import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]); 

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]); 
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos); 
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); 
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input type="text" placeholder="Add a task" onChange={(e) => addTodo(e.target.value)} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;