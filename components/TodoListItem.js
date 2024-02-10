import React from "react";

const TodoListItem = ({ todo, desc }) => {
  const handleComplete = () => {};
  const handleDelete = () => {};
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
