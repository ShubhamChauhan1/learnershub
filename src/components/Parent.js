// import React, { useCallback, useState } from 'react'
// import Child from './Child'

// export default function Parent() {
//     const [counterOne,setCounterOne] = useState(0)
//     const [counterTwo,setCounterTwo] = useState(0)
//     const IncrementOne = ()=>{
//         setCounterOne(counterOne+1)
//     }
//     const IncrementTwo = ()=>{
//         setCounterTwo(counterTwo+1)
//     }
//     const fun =useCallback(()=>{
//         console.log("Adfar")
//     },[counterTwo])
//   return (
//     <div>
//         <Child counterTwo = {counterTwo} fun = {fun}/>
//         <button onClick={IncrementOne}>counter : {counterOne}</button>
//         <button onClick={IncrementTwo}>counter2 : {counterTwo}</button>
//     </div>
//   )
// }
