import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"
export default function Todoitems(props) {
  const { todo , removeTodo , completeTodo} = props
  return (
    <div className={todo.completed ? " todo-row complete ": "todo-row"}>
      {props.todo.text}
      <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
      <BiCheckCircle onClick={() => completeTodo(todo.id)} />
    </div>
  )
}
