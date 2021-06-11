import React from 'react'

import classes from './Button.module.css'

const Button = ({ onClick, type, children }) => {
  return (
    <button 
      onClick={onClick} 
      className={classes.button} 
      type={type || 'button'}
    >
      {children}
    </button>     
  )
}

export default Button
