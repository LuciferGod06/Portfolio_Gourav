import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import logo from '../Home/logo.png'


export const Navbar = () => {
  return (
    <div className='nav_Top' >
      <div style={{ fontSize: "26px", fontWeight: "600"}} >
  <HashLink    className='active'  to='#home' ><img src={logo} alt="logo" width={"140px"}/></HashLink>        
      </div>
      <div className='nav_Item' >
        <ul  className='hash' >
          <li> <HashLink  style={{ textDecoration: "none" }}  className='active'  to='#home'>Home</HashLink>  </li>
          <li><HashLink style={{ textDecoration: "none" }}  to='#about'>About Me</HashLink> </li>
          <li> <HashLink style={{ textDecoration: "none" }}  to='#skills'>Skills  </HashLink></li>
          <li> <HashLink style={{ textDecoration: "none" }}  to='#project'>Project  </HashLink></li>
          <li>  <HashLink style={{ textDecoration: "none" }}  to='#contact'>Contact </HashLink></li>
        </ul>
      </div>
    </div>

  )
}
