import React, { useState } from "react";
import Header from "./components/header";
import Inputbox from "./components/Inputbox";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState(initialTodos); // todos state
  return (
    <main>
      <Header> my todo-list </Header>
      <Inputbox setTodos={setTodos}></Inputbox>
      <Todolist todos={todos}></Todolist>
    </main>
  );
}

// 기본 Todos 데이터
const initialTodos = [
  {
    id: 1,
    title: "첫 게시글!",
    boddy: "투두를 남깁니다",
  },
  {
    id: 2,
    title: "두번째 게시글!",
    boddy: "투두를 남깁니다2",
  },
  {
    id: 3,
    title: "세번째 게시글!",
    boddy: "투두를 남깁니다3",
  },
];

export default App;
