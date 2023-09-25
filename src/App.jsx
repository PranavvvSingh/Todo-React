import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm.jsx"
import { ListTodos } from "./ListTodos.jsx"
import "./styles.css" 

export default function App(){
  const [todos,setTodos]=useState(()=>{
    const todos=JSON.parse(localStorage.getItem("Items"))
    if(todos==null) return []
    else return todos
  })

  useEffect(()=>{
    localStorage.setItem("Items",JSON.stringify(todos))
  },[todos])

  function addTodo(title){
    setTodos(currentTodos=>{
        return[
          ...currentTodos,
          {id: crypto.randomUUID(),title,completed:false}
        ]
      })
  }

  function toggleTodo(e,id,completed){
    console.log(e)
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id==id) return {...todo,completed}
        else return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
      })
  }

  return(
    <>
    <TodoForm onSubmit={addTodo}/>
    <h1 className="header">ToDo List</h1>
    <ListTodos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}