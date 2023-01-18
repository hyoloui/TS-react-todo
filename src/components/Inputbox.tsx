import React, { useState } from "react";
import { v4 } from "uuid";

export default function Inputbox({ setTodos }: any) {
  const [title, setTitle] = useState(""); // title state
  const [boddy, setBody] = useState(""); // boddy state

  const buttonClickSubmit = (event: any) => {
    // 작성버튼 >> onSubmit
    event.preventDefault(); // 새로고침 막기
    setTodos((prev: any) => [
      ...prev,
      {
        //이전 값 + 새로운 todo
        id: v4(),
        title,
        boddy,
      },
    ]);
  };

  const onChangeTitle = (event: any) => {
    // 제목 : input박스 타이핑 시 title state 변환
    setTitle(event.target.value);
  };
  const onChangeBoddy = (event: any) => {
    // 내용 : input박스 타이핑 시 boddy state 변환
    setBody(event.target.value);
  };
  return (
    <form onSubmit={buttonClickSubmit}>
      <label>제목 :</label>
      <input onChange={onChangeTitle} value={title} type="text"></input>
      <label>내용 :</label>
      <input onChange={onChangeBoddy} value={boddy} type="text"></input>
      <button>작성</button>
    </form>
  );
}
