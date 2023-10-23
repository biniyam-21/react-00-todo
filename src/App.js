import { useState } from "react";
import "./App.css";
import Todoform from "./Components/Todoform";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = {
      id: id,
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const removeTodo = (id) => {
    let updatedTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  };

  const completeTodo = (id) =>{
let updatedTodo = todos.map((todo) =>{
  if(todo.id === id){
    todo.completed = !todo.completed
  }
  return todo
})
setTodos(updatedTodo)
  }

  return (
    <div className="todoApp">
      <h1>Todo List</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo}/>;
      })}
    </div>
  );
}

export default App;
