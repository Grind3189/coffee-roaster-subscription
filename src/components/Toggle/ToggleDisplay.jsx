import React, { useContext } from 'react'
import {ToggleContext} from './Toggle'

function ToggleDisplay({children}) {
    const {isOpen} = useContext(ToggleContext)
  return (
     children(isOpen) 
  )
}

export default ToggleDisplay