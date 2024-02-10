import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";

const TodoFullPage = () => {
  const [todoArr, setTodoArr] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/getAllTodo");
    const json = await res.json();
    const a = json.map((todo) => {
      return {
        id: todo._id.toString(),
        todo: todo.todo,
        desc: todo.desc,
      };
    });
    setTodoArr(a);
  };

  return (
    <div>
      {console.log(todoArr)}
      <TodoForm />
      {todoArr.map((todo) => {
       return <TodoListItem todo={todo.todo} desc={todo.desc} />;
      })}
    </div>
  );
};

export default TodoFullPage;
