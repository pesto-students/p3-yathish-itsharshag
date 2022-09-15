import React from "react";
import "./index.css";

export default function Todo({ index, text, isCompleted, setTodos }) {
  const updateTodo = (index, key, value) => {
    setTodos((todos) => {
      const newTodos = [...todos];
      const currVal = newTodos[index];
      newTodos[index] = {
        ...currVal,
        [key]: value,
      };
      return newTodos;
    });
  };
  const deleteTodo = (index) =>
    setTodos((todos) => todos.filter((t, i) => i !== index));

  const checkboxClickHandler = () =>
    updateTodo(index, "isCompleted", !isCompleted);
  const deleteBtnHandler = () => deleteTodo(index);

  return (
    <div className="todo animate">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={checkboxClickHandler}
      />
      <p data-is-completed={isCompleted}>{text}</p>
      <button onClick={deleteBtnHandler}>{"x"}</button>
    </div>
  );
}
