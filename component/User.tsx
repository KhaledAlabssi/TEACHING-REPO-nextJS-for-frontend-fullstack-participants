'use client'

import React from 'react'

function User({user}:any) {
  function clickHandler (e: any) {

    const ele = e.target

    
    
  }
  return (
    <div onClick={clickHandler} className='btn btn-lg'>{user.name}</div>
  )
}

export default User