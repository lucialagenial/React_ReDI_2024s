import React from 'react'
import { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);
    function clickerCount(){
        setCount(count + 1)
    }
  return (
    <div>
        <button onClick={clickerCount}>Counter</button>
        <h1>{count}</h1>
      
    </div>
  )
}

export default Counter
