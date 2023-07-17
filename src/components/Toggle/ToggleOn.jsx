import React, { useContext } from 'react'
import {ToggleContext} from './Toggle'

function ToggleOn({children}) {
    const {isOpen} = useContext(ToggleContext)
  return (
    isOpen ? children : null
  )
}

export default ToggleOn