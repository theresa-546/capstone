import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { RiPlantFill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>

            <div className='navbar-lineup'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <RiPlantFill className='navbar-icon' />
              Food Bio
                </Link>
              
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div> 
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  View Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/trace' className='btn-link' onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline'>How does Tracing work</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
