import { useState } from "react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");

  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDesc(event.target.value);
  };

  const handleAddTodo = async () => {
    const data = {
      todo: todo,
      desc: desc,
      completed: false,
    };
    console.log(data, "added ");
    const res = await fetch("/api/addTodo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    console.log(json, "json");
    setTodo("");
    setDesc("");
  };

  return (
    <section className="main-div">
      <div className="label-input-container">
        <label>Todo : </label>
        <input type="text" onChange={handleTodoChange} />
      </div>
      <div className="label-input-container">
        <label>Description : </label>
        <input type="text" onChange={handleDescriptionChange} />
      </div>
      <div className="btn-container">
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </section>
  );
}

export default TodoForm;
