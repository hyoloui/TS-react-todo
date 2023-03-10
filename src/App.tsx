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
  console.log("๐๐  todos", todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }); // useEffect์ ์์กด์ฑ ๋ฐฐ์ด์ด ์์ ๋+
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
