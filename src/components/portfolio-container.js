import React, { useState } from 'react'

import NavBar from './navbar'
import Footer from './footer'

import Home from './pages/home'
import About from './pages/about-me'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Resume from './pages/resume'

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}

