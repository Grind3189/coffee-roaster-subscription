import React from 'react'
import Toggle from '../../components/Toggle/index'

function SubscriptionMenu({children}) {
  return (
    <Toggle.Display>
      {(isOpen) => children(isOpen)}
    </Toggle.Display>
  )
}

export default SubscriptionMenu