import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Phone } from 'lucide-react'
import Gallery from './Gallery'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openGallery = () => {
    setIsGalleryOpen(true)
    setIsMenuOpen(false) // Close mobile menu when opening gallery
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <div className="logo-icon">
              <Heart size={24} />
            </div>
            <span className="logo-text">The Mending Space</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={openGallery}
              className="nav-link"
            >
              Space
            </button>
            <a href="tel:(217) 834-1738" className="nav-cta">
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`mobile-nav-link ${isActive(item.path) ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={openGallery}
              className="mobile-nav-link"
            >
              Space Gallery
            </button>
            <a href="tel:(217) 834-1738" className="mobile-nav-cta">
              <Phone size={16} />
              Call (217) 834-1738
            </a>
          </div>
        </div>
      </nav>
      
      {/* Overlay */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'nav-overlay-visible' : ''}`}
        onClick={closeMenu}
      />

      {/* Gallery Modal */}
      <Gallery isOpen={isGalleryOpen} onClose={closeGallery} />
    </>
  )
}

export default Navbar 