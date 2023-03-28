import React from 'react'
import myLogo from '../LOGO.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export default function NavBar({ currentPage, handlePageChange }) {
    return(
        <nav className="navbar navbar-expand-lg bg-light">

  <div className="container-fluid m-3 nes-container is-rounded">

    <a className="navbar-brand" href="#Home"><img className="myLogo" src={myLogo} alt=""></img></a>

      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
          <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#Home" onClick={() => handlePageChange('Home')}>Home</a>
        </li>

        <li className="nav-item">
          <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#about-me" onClick={() => handlePageChange('About')}>About Me</a>
        </li>

        <li className="nav-item">
          <a className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} href="#projects" onClick={() => handlePageChange('Projects')}>Projects</a>
        </li>

        <li className="nav-item">
          <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
        </li>

        <li className="nav-item">
          <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
        </li>

      </ul>

    </div>

</nav>
    )
}

// type="button" className="nav-item nes-btn is-primary m-3"