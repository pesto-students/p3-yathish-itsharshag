import React, { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [todoText, setTodoText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      {
        text: todoText,
        isCompleted: false,
      },
    ]);
    setTodoText("");
  };

  return (
    <form onSubmit={onSubmit} action="">
      <input
        type="text"
        minLength={"2"}
        required
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
