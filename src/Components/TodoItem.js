import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";

export default function TodoItem(props) {

    const { todo, removeTodo, completeTodo} = props
  return (
    <div className={todo.completed ? "todo-row complete": "todo-row"}>
      {props.todo.text}
      <div className="icons">
        <RiCloseCircleLine  onClick={() => removeTodo(todo.id)} />
        <BsCheckCircle onClick={() => completeTodo(todo.id)} />
      </div>
    </div>
  );
}
