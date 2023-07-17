import React, { useContext, useState } from 'react'
import '../../pages/Subscribe/subscribe.css'
import {SubscriptionContext} from './SubscriptionContext'

function SubscriptionItem({children, name, title}) {
  const {subscriptionData, updateData} = useContext(SubscriptionContext)
  const radioStyle = {
    display: 'none'
  }
  const getBackgroundColor = () => {
    const {preferences, beanType, quantity, grind, deliveries} = subscriptionData
    if (
        title === preferences ||
        title === beanType || 
        title === quantity || 
        title === grind || 
        title === deliveries 
       ) {
      return {
        backgroundColor: '#0E8784',
        color: '#FFFFFF'
      }
    } 
  }

  const itemStyle = getBackgroundColor()

  const handleChange = (e) => {
    updateData(e.target.name, e.target.value)
  }

  return (
    <label 
    className='item-container' 
    style={itemStyle} 
    for={children}
    >
      <input 
        onChange={handleChange}
        style={radioStyle}
        id={children} 
        type='radio' 
        name={name}
        value={title}
      />
      <label for={children}>
        <span>
          {title} <br />
        </span>
        
        {children} <br />
      </label>
    </label>
  )
}

export default SubscriptionItem