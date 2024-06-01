"use client"
import React, { useState } from 'react'

function page() {
    const [count, setCount] = useState(0)
    const inc = () : void => {
        console.log("inc function been clicked");
        
        setCount(i => i + 1)

    }
  return (
    <div>
        <p>Count State: {count}</p>
        <button className='btn btn-primary' onClick={inc}>click to invok inc function</button>
        
    </div>
  )
}

export default page