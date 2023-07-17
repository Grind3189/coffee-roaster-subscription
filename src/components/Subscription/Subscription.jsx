import React from 'react'
import Toggle from '../../components/Toggle/index'

function Subscription({children}) {
  return (
    <Toggle>
        <div>
            {children}
        </div>
    </Toggle>
  )
}

export default Subscription