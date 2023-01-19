import { todo } from "../type/type";

interface Props {
  // 전달받은 props도 type 명시를 해줘야 함
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

export default function Todolist({ todos, setTodos }: Props) {
  const deleteTodo = (data: todo) => {
    setTodos(todos.filter((clickTodo) => clickTodo.todoId !== data.todoId));
  };
  const clearTodo = (data: todo) => {
    // data.clear = !data.clear; // 이게 왜 되는거지...
    setTodos(
      todos.map((todo: todo) => {
        if (todo.todoId === data.todoId) {
          return { ...todo, clear: !todo.clear };
        }
        return todo;
      })
    );
  };

  return (
    <ul>
      {todos.map((data: todo) => {
        return (
          <li className="list-todo" key={data.todoId}>
            <p className={data.clear ? "complete" : ""}>{data.todoContent}</p>
            <div>
              <button
                className="button-delete"
                onClick={() => deleteTodo(data)}
              >{`삭제`}</button>
              <button
                className="button-clear"
                onClick={() => clearTodo(data)}
              >{`완료`}</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
