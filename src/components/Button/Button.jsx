import React from 'react'
import './button.css'

function Button( {children, color, fontSize, fontWeight, handleClick, name, isDisabled} ) {

  const style = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight
  }
  return (
    <button 
      className={`button-style ${name}`} 
      style={style} 
      onClick={handleClick ? handleClick : null}
      disabled={isDisabled}
      
    >
        {children}
    </button>
  )

}

export default Button
