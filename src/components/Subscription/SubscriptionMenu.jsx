import React from 'react'
import Toggle from '../../components/Toggle/index'

function SubscriptionMenu({children}) {
  return (
    <Toggle.On>
      {children}
    </Toggle.On>
  )
}

export default SubscriptionMenu