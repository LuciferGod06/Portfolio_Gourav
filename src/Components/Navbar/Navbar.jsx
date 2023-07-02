import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav_Top' >
      <div style={{ fontSize: "26px", fontWeight: "600"}} >
        Gourav.
      </div>
      <div className='nav_Item' >
        <ul  className='hash' >
          <li> <HashLink    style={{ textDecoration: "none" }} smooth to='#home'>Home</HashLink>  </li>
          <li><HashLink style={{ textDecoration: "none" }} smooth to='#about'>About Me</HashLink> </li>
          <li> <HashLink style={{ textDecoration: "none" }} smooth to='#skills'>Skills  </HashLink></li>
          <li> <HashLink style={{ textDecoration: "none" }} smooth to='#project'>Project  </HashLink></li>
          <li>  <HashLink style={{ textDecoration: "none" }} smooth to='#contact'>Contact </HashLink></li>
        </ul>
      </div>
    </div>

  )
}
