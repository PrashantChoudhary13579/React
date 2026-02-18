import Header from "./header"
import User from "./user"
import {useState} from 'react'

function Apple(){
  const [counter,setCounter]=useState(0)

  return (
    <div>
      <Header />
      <h1>Counter Value :{counter}</h1>
      <User />
      <button onClick={()=> setCounter(counter+1)} > Increase Counter </button>
      
    </div> // we can only use one rapper , so we use div.. and rap all the data into it.. 
  )
}

export default Apple
// this is the core javascript

// the function name should always be started with capital letter bcz the html code has small letter..