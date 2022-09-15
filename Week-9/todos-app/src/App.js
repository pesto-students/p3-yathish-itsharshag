import React, { useState } from "react";

import Header from "./components/Header";
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
      <Header />
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
  );
}

export default App;
