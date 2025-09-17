import { useState } from "react"

export default function Count () {

  const [count, setCount] = useState(0)
  const increaseCountHandler = () => {
    setCount(count + 1)
  }  
  
  const decreaseCountHandler = () => {
    setCount(count - 1)
  }  
  
  const resetCounter = () => {
    setCount(0)
  }  

  return (

      <div>
        <div  className="counter">
          <h1>Count {count}</h1>
        </div>
        <button onClick={increaseCountHandler}>+1</button>
        <button onClick={decreaseCountHandler}>-1</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    )
}