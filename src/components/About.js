import React from 'react'
import GC from './GC'
import News from './News'
export default function About(props) {
  return (
    <div>
        <h1>{props.age} {props.dob} {props.mass}</h1>
        <GC ageA = {props.age}/>
        <News name ="Stv"/>
    </div>
  )
}
