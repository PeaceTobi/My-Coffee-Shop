import React from 'react'

const Button = (props) => {
    const {className, children} =(props)
  return (
    <div>
        <button className={className}>{children}</button>
    </div>
  )
}

export default Button