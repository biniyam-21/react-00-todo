import React, { useState } from "react";

export default function Todoform(props) {
  const [input, setInput] = useState("");

const handleSubmit = (e) =>{
    e.preventDefault();
    props.addTodo(input)
    setInput("")
}

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
      value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add to do..."
      />
      <button type="submit" className="add-todo">Add Todo</button>
    </form>
  );
}
