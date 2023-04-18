import React from 'react'
import { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import {RiMenuLine, RiCloseLine,} from 'react-icons/ri'
const Menu=()=>(
    <>
    <div className='gpt3__navbar-links_container'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wgpt3'>what is Gpt3</a></p>
            <p><a href='possibility'>Open Ai</a></p>
            <p><a href='#features'>Case Studies</a></p>
            <p><a href='#blog'>library</a></p>
        </div>
        </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu]=useState(false)
  return (
    <div className='gpt3__navbar'> 
    <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wgpt3'>what is Gpt3</a></p>
            <p><a href='#possibility'>Open Ai</a></p>
            <p><a href='#features'>Case Studies</a></p>
            <p><a href='#blog'>library</a></p>
        </div>
    </div>
    <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'> Sign up</button>
    </div>
    <div className='gpt3__navbar-menu'>
    {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
    </div>
  
    </div>
  )
}

export default Navbar