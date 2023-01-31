import React from 'react'
import {FirstName} from "../App"

export default function CompC(props) {
  return (
    <div>
        <FirstName.Consumer>
            {(fname)=>{
                return <h1>My name is Mr {fname}</h1>
            }}
        </FirstName.Consumer>
    </div>
  )
}
