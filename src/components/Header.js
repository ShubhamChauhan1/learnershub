import React from 'react'

export default function Header(props) {
  return (
    <div>
      <h1>Hi my name is {props.name}, I am {props.age} years old and my profession is {props.profession}</h1>
    </div>
  )
}

