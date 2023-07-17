import React, { useState } from 'react'
import './header.css'
import classnames from 'classnames'
import logo from '../../assets/shared/desktop/logo.svg'
import burgerIcon from '../../assets/shared/mobile/icon-hamburger.svg'
import closeIcon from '../../assets/shared/mobile/icon-close.svg'
import { Link } from 'react-router-dom'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNav = () => {
        setIsOpen(prev => !prev)
    }
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    
  return (
    <header className='side-padding'>
        <div className="header-top">
            <Link to='.'>
                <img src={logo} alt='logo' className='logo' />
            </Link>
            <img 
                src={isOpen ? closeIcon : burgerIcon} 
                onClick={toggleNav} 
                alt='hamburger-icon' 
                className='nav-btn' 
            />
        </div>
            <nav className={isOpen ? 'open-nav' : ''}>
                <ul>
                    <li><Link to='.' onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to='about-us' onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link to='subscribe' onClick={() => setIsOpen(false)}>Create Your Plan</Link></li>
                </ul>
            </nav>        
    </header>
  )
}

export default Header