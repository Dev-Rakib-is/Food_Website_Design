
import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`m-auto max-w-[1290px] ${className}`}>{children}</div>
  )
}

export default Container;