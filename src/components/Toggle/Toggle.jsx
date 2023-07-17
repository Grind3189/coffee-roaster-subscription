import React, {useState} from 'react'
const ToggleContext = React.createContext()

function Toggle({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => { 
    setIsOpen(prev => !prev)
  }
  return (
    <ToggleContext.Provider value={{isOpen, toggle}}>
        {children}
    </ToggleContext.Provider>
  )
}

export {ToggleContext, Toggle};