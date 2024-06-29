import React from 'react'

export default function TodoCard(props) {
  const  {children, handleDeleteTodo, index, handleEditTodo} = props 
  return (
    // this way defining the map we only have
    // to define the list item once and it maps
    // to each item in the todos array. But this
    // list needs to have a unique item for each
    // element in the list, that's why we are passing        // todoIndex as a key.
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {handleEditTodo(index)}}> <i className="fa-solid fa-pen-to-square"></i></button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}><i className="fa-solid fa-trash-can"></i></button>
      </div>
    </li>                    
  )
}
 