import React from 'react'

export default function Head(props) {
  return (
    <div>
       <h1>{props.data.welcome}</h1> 
        <h2>{props.data.title}</h2>
       <h2>{props.data.dob}</h2> 
    </div>
  )
}
