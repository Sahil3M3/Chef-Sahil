import React from 'react'
import logo from "../assets/chef-claude-icon.png"
const Header = () => {
  return (
    <>
    <header className='navBar'>
      <img className='nav-logo' src={logo} />
        <h1>Chef Sahil</h1>
    </header>
        {/* <hr/> */}
        </>
  )
}

export default Header
