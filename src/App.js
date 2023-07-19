import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todoitems from "./components/Todoitems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0){
      id = todos[0].id + 1
    }
    const todo = {id , text}
    const newTodos = [todo, ...todos] // spread operator
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos  =  [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)

  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) =>{
      if (todo.id === id) {
        todo.completed = !todo.completed

      }
      return todo
    } )
    setTodos(updatedTodos)
   

  }
  
  return (
    <div className="todo-app">
      <h1>ToDo List</h1>
      <TodoForm addTodo={addTodo} /> 
      {todos.map((todo) => {
        return (
          <Todoitems removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}

export default App;
