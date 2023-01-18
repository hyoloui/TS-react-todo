import { todo } from "../type/type";

export default function Todolist({ todos }: any) {
  return (
    <section>
      {/* props 로 전달받은 todos 를 하나씩 받아 html 형태로 생성*/}
      {todos.map((todo: todo) => {
        return (
          <div key={todo.id}>
            <hr />
            <h1>{todo.title}</h1>
            <span>{todo.boddy}</span>
            <hr />
          </div>
        );
      })}
    </section>
  );
}

interface initial {
  id: number;
  title: string;
  boddy: string;
}
