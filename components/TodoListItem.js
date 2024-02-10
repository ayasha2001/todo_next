import React from "react";

const TodoListItem = ({ todo, desc, id }) => {
  const handleComplete = async () => {
    console.log("handleComplete");
    const res = await fetch(`/api/updateTodo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    });

    const json = await res.json();
    console.log(json, "updated todo");
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/deleteTodo/${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        console.log("Todo deleted successfully");
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  return (
    <div className="li-container">
      <div className="flexy">
        <h2>{todo}</h2>
        <div>
          <button onClick={handleComplete}>complete</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      </div>
      <p style={{ margin: "0px" }}>{desc}</p>
      <hr></hr>
    </div>
  );
};

export default TodoListItem;
