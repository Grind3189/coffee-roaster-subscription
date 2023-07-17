import React, { useContext } from 'react'
import {ToggleContext} from './Toggle'

function ToggleOff({children}) {
    const {isOpen} = useContext(ToggleContext)
  return (
    isOpen ? null : children
  )
}

export default ToggleOff