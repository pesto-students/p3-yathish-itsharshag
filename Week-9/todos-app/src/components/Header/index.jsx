import React from "react";
import "./index.css";

export default function Header() {
  return (
    <header className="app-header">
      <div className="heading">
        <img src="/react-logo.png" className="logo" alt="logo" />
        <h1>Todos</h1>
      </div>
    </header>
  );
}
