import React, { useState } from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = () => {
  const [todos, setTodos] = useState(
    [
      {
        title: "Go to the school",
        desc: "You need to go to the school for studies"
      },
      {
        title: "Go to the mall",
        desc: "You need to go to the mall for shopping"
      },
      {
        title: "Go to the bank",
        desc: "You need to go to the bank for deposit"
      },
      {
        title: "Go inside the bus",
        desc: "You need to go to the school by bus"
      }
    ]
  )

  const deleteTodo = (todoDelete) => {
    setTodos(
      todos.filter( (todo) => {
        if (todo.title === todoDelete.title && todo.desc === todoDelete.desc) return false
        return true
      } )
    )
  } 

  return (
    <div className="container">
    <h3>Todos List</h3>
    <form
    className='mb-4 d-flex w-100'
      onSubmit={(e) => {
        e.preventDefault()
        const newTodo = {
          title: e.target.title.value,
          desc: e.target.desc.value
        }
        setTodos([
          ...todos,
          newTodo
        ])
        e.target.title.value = ''
        e.target.desc.value = ''
      }}
    >
      <input name='title' placeholder='title' required className='me-2 flex-grow-1' />
      <input name='desc' placeholder='desc' required className='me-2 flex-grow-1' />
      <button type='submit' className='btn btn-primary'>Add</button>
    </form>
    {
      todos.map((todo) => {
        return <TodoItem todo={todo} deleteTodo={deleteTodo} />
      })
    }
    </div>
  )
}
