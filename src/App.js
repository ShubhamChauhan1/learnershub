import React, { useState } from 'react'
import useList from './custom-hooks/useList'
export default function App() {

  const { list, push, pull } = useList()
  const [todo, setTodo] = useState("")
  document.body.style.backgroundColor = "#021f36"
  document.body.style.color = "white"

  const onsubmithandler = (event) => {
    event.preventDefault()
    if (todo === "") {
      alert("please type something to add")

    }
    else {
      push(todo)
      setTodo("")
    }
  }

  return (
    <>
      <h1 className='container my-3'>List of Students</h1>
      <div className='container my-3'>
        <header>
          <form onSubmit={(onsubmithandler)}>
            <label className='my-3 mx-3'><b>Add Todo </b></label>
            <input type="text" value={todo} placeholder="Enter here..." onChange={(e) => { setTodo(e.target.value) }} />
            <button className="btn btn-primary mx-3" type='submit'>Add todo</button>
          </form>

          <h3>
            {list.map((listItem, index) => {
              return (
                <div className="my-3" key={index} >
                  <li>{listItem}</li>
                  <button className="btn btn-primary" onClick={() => { pull(index) }}>Remove</button>
                </div>
              )
            })}
          </h3>
        </header>
      </div>
    </>
  )
}


