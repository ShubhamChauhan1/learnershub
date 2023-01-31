import React from 'react'

export default function Skills(props) {
    const skillSet = props.skills.map((x)=><li>{x}</li>)
  return (
    <ul>
        {skillSet}
    </ul>
  )
}
