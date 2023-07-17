import React from 'react'
import arrowIcon from '../../assets/plan/desktop/icon-arrow.svg'
import arrowUpside from '../../assets/plan/desktop/icon-arrow-upside.svg'
import './button.css'

function SubscribeButton({isOpen}) {
  const style = {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  }
  return (
    <button style={style} className='subscribe-btn'>
        <img src={isOpen ? arrowUpside : arrowIcon} alt='arrow icon' />
    </button>
  )
}

export default SubscribeButton