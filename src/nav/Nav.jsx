import React, { useState } from 'react'
import './nav.css'
import img1 from '../asset/icon.png'
import {NavLink} from 'react-router-dom'
import {BsYoutube} from 'react-icons/bs'
import {BiMenuAltLeft} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'


const Nav = ({color}) => {

    const [navBar, setNavBar] = useState(false);
    const [toggleNavBar, setToggleNavBar,] = useState(false);

    const changeNarColor = () =>{
      if(window.scrollY > '70'){
        setNavBar(true);
      }else{
        setNavBar(false);
      }
    }
    window.addEventListener('scroll', changeNarColor);
    const toggle = () => {
      setToggleNavBar(prev => !prev);
    }


  return (
    <>
      <nav className={color ? `navDesk nav--color` : `navDesk`} id={navBar && `active`}>
        <div className='img'>
            <img src={img1} alt='logo' />
        </div>
        <div className='link'>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/film'>film</NavLink>
            <a target="_blank" href="https://www.youtube.com/@thecritics001" rel="noopener noreferrer"><BsYoutube className='lll'/></a>
        </div>
    </nav>
    <div className="backIn" onClick={toggle}>{toggleNavBar === true? <IoMdClose className='logo'/> : <BiMenuAltLeft className='logo'/>}</div>
    {toggleNavBar && <nav className='navPhone' >
        <div className='link'>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/film'>film</NavLink>
            <a target="_blank" href="https://www.youtube.com/@thecritics001" rel="noopener noreferrer"><BsYoutube className='lll'/></a>
        </div>
    </nav>}
    </>
    
  )
}

export default Nav