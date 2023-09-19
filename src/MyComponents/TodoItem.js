import React from 'react'
import { Button } from 'reactstrap'

export const TodoItem = ({todo, deleteTodo}) => {
  return (
    <div className='w-100 d-flex justify-content-between align-items-center mb-2'>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
      </div>
      <div>
        <Button
          color='primary'
          className='me-2'
          onClick={(e) => {
            // edit todo 
          }}
        >Edit</Button>
        <button
          className='btn btn-danger'
          onClick={(e) => {
            deleteTodo(todo)
          }}
        >Delete</button>
      </div>
    </div>
  )
}
