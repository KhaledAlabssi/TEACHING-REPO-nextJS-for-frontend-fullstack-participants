'use client'

import React, { useState } from 'react'

function User({user}:any) {
  const [first, setFirst] = useState(false)
  function clickHandler (e: any) {
    setFirst(!first)
    console.log(e.target.classList.toggle("hi"))
    
  }
  return (
    <div onClick={clickHandler} className='btn btn-lg'>{user.name}</div>
  )
}

export default User