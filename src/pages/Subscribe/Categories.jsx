import React from 'react'
import './subscribe.css'

function Categories({subscriptionData}) {
    const {preferences, beanType, quantity, grind, deliveries} = subscriptionData
    const getStyle = (category) => {
        const style = {
          opacity: category ? '1' : ''   
        }
        return style
    }
  return (
            <div className="s-categories">
                <h3 style={getStyle(preferences)}><span>01</span> Preferences</h3>
                <h3 style={getStyle(beanType)}><span>02</span> Bean Type</h3>
                <h3 style={getStyle(quantity)}><span>03</span> Quantity</h3>
                <h3 style={getStyle(grind)}><span>04</span> Grind Option</h3>
                <h3 style={getStyle(deliveries)}><span>05</span> Deliveries</h3>
            </div>
  )
}

export default Categories