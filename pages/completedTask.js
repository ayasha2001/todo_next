import React, { useEffect, useState } from "react";
import TodoListItem from "../components/TodoListItem";

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
        completed: todo.completed,
      };
    });
    setTodoArr(a);
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Completed Task</h1>
      {todoArr.map((todo) => {
        if (todo.completed) {
          return (
            <TodoListItem
              todo={todo.todo}
              desc={todo.desc}
              id={todo.id}
              key={todo.id}
            />
          );
        }
      })}
    </div>
  );
};

export default TodoFullPage;
