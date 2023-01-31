import React, { useContext } from 'react'
import { FirstName } from '../App'
import CompC from './CompC'
export default function CompB(props) {
    const fname = useContext(FirstName)
  return (
    <div>
        <CompC/>
        <h1>My name is {fname} Dev</h1>

    </div>
  )
}
