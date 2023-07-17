import React, {useContext} from 'react'
import { SubscriptionContext } from '../../components/Subscription/SubscriptionContext'
import Button from '../../components/Button/Button'
import iconClose from '../../assets/plan/mobile/icon-close.svg'
import './subscribe.css'

function OrderModal( {handleClick}) {
  const {subscriptionData} = useContext(SubscriptionContext)
  const {preferences, beanType, quantity, grind, deliveries} = subscriptionData

  return (
    <div className='modal-content'>
      <div className="modal-top">
        <h1>Order Summary</h1>
        <img src={iconClose} alt='close icon' onClick={handleClick}/>
      </div>

      <div className="order-modal-content">
        <p className='order'>
              "I drink my coffee using <span>{preferences}</span>, 
              with a <span>{beanType}</span> type of bean. <span>{quantity}</span> ground ala <span>{grind}</span>,
              sent to me <span>{deliveries}</span>."
        </p>
        <p className='placeholder'>
          Is this correct? You can proceed to checkout or go back to plan selection if something is off.
          Subscription discount codes can also be redeemed at the checkout. 
        </p>

        <div className="button-container">
          <p>$14.00 / mo </p>
          <Button color='white' fontSize='18px' fontWeight='900' name='checkout-btn'>
            Checkout
          </Button>
        </div>

      </div>

    </div>
  )
}

export default OrderModal