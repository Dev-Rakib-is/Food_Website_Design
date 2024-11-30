import React from 'react'

const Image = ({ className, alt, src}) => {
  return (
    <img src={src} alt={alt}  className={`${className}`}/>
  )
}

export default Image