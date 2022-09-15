import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy groceries",
      isCompleted: true,
    },
    {
      text: "Buy movie tickets",
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-heading">
          <img src={"/react-logo.png"} className="app-logo" alt="logo" />
          <h1>Todos</h1>
        </div>
      </header>
      <div>
        <TodoForm setTodos={setTodos} />
        {todos.map(({ text, isCompleted }, index) => (
          <Todo
            index={index}
            text={text}
            isCompleted={isCompleted}
            setTodos={setTodos}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
