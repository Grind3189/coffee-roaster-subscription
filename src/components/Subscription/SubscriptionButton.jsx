import React, {useContext} from 'react'
import Toggle from '../../components/Toggle/index'
import SubscribeButton from '../Button/SubscribeButton'
import {ToggleContext} from '../../components/Toggle/Toggle'

function SubscriptionButton({children}) {
  const {isOpen} = useContext(ToggleContext)
  
  return (
    <Toggle.Button>
        <SubscribeButton isOpen={isOpen} title={children} />
    </Toggle.Button>
  )
}

export default SubscriptionButton