import { useEffect, useState } from "react";
import Header from "./components/header";
import Inputbox from "./components/Inputbox";
import Todolist from "./components/Todolist";
import { todo } from "./type/type";

import "./App.css";

function App() {
  const saveTodos = localStorage["todos"]
    ? JSON.parse(localStorage.getItem("todos") || "")
    : [];
  const [todos, setTodos] = useState<todo[]>(saveTodos); // todos state
  console.log("👉👉  todos", todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }); // useEffect에 의존성 배열이 없을 때+
  return (
    <div className="container">
      <main className="app-wrapper">
        <Header> my todo-list </Header>
        <Inputbox todos={todos} setTodos={setTodos} />
        <Todolist todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;
