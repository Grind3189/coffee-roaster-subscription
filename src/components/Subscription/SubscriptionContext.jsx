import React, { useState } from 'react'
const SubscriptionContext = React.createContext()

function Scontext( {children} ) {
    const [subscriptionData, setSubscriptionData] = useState({
        preferences: '',
        beanType: '',
        quantity: '',
        grind: '',
        deliveries: ''
    })

    const updateData = (name, value) => {
        setSubscriptionData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    console.log(subscriptionData)

  return (
    <SubscriptionContext.Provider value={{subscriptionData, updateData}}>
        {children}
    </SubscriptionContext.Provider>
  )
}

export {Scontext, SubscriptionContext}