import { useState } from "react";
import { v4 as uuid } from "uuid";
import { todo } from "../type/type";
interface Props {
  // 전달받은 props도 type 명시를 해줘야 함
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

export default function Inputbox({ todos, setTodos }: Props) {
  const [todoContent, setTodoContent] = useState("");

  const changeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value);
  };

  const buttonClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 작성버튼 >> onSubmit
    event.preventDefault();
    setTodos([...todos, { todoId: uuid(), todoContent, clear: false }]);
    setTodoContent("");
  };

  return (
    <form onSubmit={buttonClickSubmit}>
      <input
        className="task-input"
        value={todoContent}
        onChange={changeContent}
        type="text"
      />
      <button className="button-create" type="submit">{`작성`}</button>
    </form>
  );
}
