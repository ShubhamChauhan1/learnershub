import React from 'react'
import { memo } from 'react'
function Child(counterTwo,fun){
    console.log("child component")
  return (
    <div>
        <h1>Child Component</h1>

    </div>
  )
  }
  export default memo(Child)
