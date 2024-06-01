import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <p>Books pages</p>
        <p>Route: 'baseURL'/books</p>
        <Link href="/" className='btn m-2'>Home Page</Link>
    </div>
  )
}

export default page