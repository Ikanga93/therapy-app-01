import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Brain, Phone, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <div className="logo-icon">
              <Brain size={24} />
            </div>
            <span className="logo-text">Dr. Dynesha D Grissom</span>
          </Link>

          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a href="tel:(217) 269-8769" className="nav-cta">
            <Phone size={16} />
            (217) 269-8769
          </a>

          <button 
            className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-overlay ${isOpen ? 'nav-overlay-visible' : ''}`} onClick={() => setIsOpen(false)} />

      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
          {navLinks.map((link, index) => (
              <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${isActive(link.path) ? 'mobile-nav-link-active' : ''}`}
              onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              {link.name}
              </Link>
            ))}
          
          <a 
            href="tel:(217) 269-8769" 
            className="mobile-nav-cta"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} />
            Call (217) 269-8769
            </a>
          </div>
        </div>
    </>
  )
}

export default Navbar 