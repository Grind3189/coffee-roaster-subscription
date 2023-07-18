import React from 'react'
import arrowIcon from '../../assets/plan/desktop/icon-arrow.svg'
import './button.css'

function SubscribeButton({isOpen}) {
  const style = {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  }
  return (
    <button style={style}>
        <img src={arrowIcon} alt='arrow icon' className={`arrow-icon ${isOpen ? 'arrow-upside' : ''}`} />
    </button>
  )
}

export default SubscribeButton