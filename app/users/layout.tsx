import React from 'react'
import proptypes from 'prop-types'

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        {children}
    </div>
  )
}



export default layout