import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <p>Pets page...</p>
        <p>route: 'baseURL'/pets</p>
        <Link href="/" className='btn bg-red-500 m-2'>Home Page</Link>
    </div>

  )
}

export default page