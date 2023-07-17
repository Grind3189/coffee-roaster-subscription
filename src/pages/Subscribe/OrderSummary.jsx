import React, {useContext} from 'react'
import { SubscriptionContext } from '../../components/Subscription/SubscriptionContext'
import './subscribe.css'

function OrderSummary() {
    const {subscriptionData} = useContext(SubscriptionContext)
    const {preferences, beanType, quantity, grind, deliveries} = subscriptionData
    const blank = '_____'
  return (
    <div className='order-content'>
        <h4>Order Summary</h4>
        <p>
            "I drink my coffee using <span>{preferences ? preferences : blank}</span>, 
            with a <span>{beanType ? beanType : blank}</span> type of bean. <span>{quantity ? quantity : blank}</span> ground ala <span>{grind ? grind : blank}</span>,
            sent to me <span>{deliveries ? deliveries : blank}</span>."
        </p>
    </div>
  )
}

export default OrderSummary