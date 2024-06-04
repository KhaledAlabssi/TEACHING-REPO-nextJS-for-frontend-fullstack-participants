import React from 'react'
import photo from '../books/unsplash.jpg'

function page() {
    console.log(photo);
    
  return (
    <div>
        <img src={photo.src} width={500} alt="" />
    </div>
  )
}

export default page