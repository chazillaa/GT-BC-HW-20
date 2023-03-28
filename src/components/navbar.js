import React from 'react'
import myLogo from '../LOGO.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export default function NavBar({ currentPage, handlePageChange }) {
    return(
        <nav className="navbar navbar-expand-lg">

  <div idName="navid" className="container-fluid m-3 nes-container is-rounded">

    <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#home" onClick={() => handlePageChange('Home')}><img className="myLogo" src={myLogo} alt=""></img></a>

      <ul className="navbar-nav ml-auto">

        {/* <li className="nav-item">
          <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#Home" onClick={() => handlePageChange('Home')}>
            <button type="button" class="nes-btn is-primary">Home</button>
            </a>
        </li> */}

        <li className="nav-item">
          <a className={currentPage === 'About' ? 'nav-link is-disabled' : 'nav-link'} href="#about-me" onClick={() => handlePageChange('About')}>
          <button type="button" class="nes-btn is-primary">About</button>
          </a>
        </li>

        <li className="nav-item">
          <a className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} href="#projects" onClick={() => handlePageChange('Projects')}>
            <button type="button" class="nes-btn is-success">Projects</button>
          </a>
        </li>

        <li className="nav-item">
          <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={() => handlePageChange('Resume')}>
            <button type="button" class="nes-btn is-warning">Resume</button>
          </a>
        </li>

        <li className="nav-item">
          <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => handlePageChange('Contact')}>
            <button type="button" class="nes-btn is-error">Contact</button>
          </a>
        </li>

      </ul>

    </div>

</nav>
    )
}
