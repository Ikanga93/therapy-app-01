import { Link } from 'react-router-dom'
import { Heart, Phone, MapPin, Shield, Mail, Calendar, Award, CheckCircle } from 'lucide-react'

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="footer-shape footer-shape-1"></div>
          <div className="footer-shape footer-shape-2"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="footer-main">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <Heart size={28} />
                </div>
                <span className="logo-text">The Mending Space</span>
              </div>
              <p className="footer-description">
                Creating a safe space for healing, growth, and authentic connections. 
                Professional therapy services in Champaign, Illinois.
              </p>
              <div className="footer-credentials">
                <div className="credential-item">
                  <Shield size={18} />
                  <span>Licensed LCSW #149.026321</span>
                </div>
                <div className="credential-item">
                  <Award size={18} />
                  <span>Psychology Today Verified</span>
                </div>
              </div>
            </div>

            <div className="footer-nav">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About Michelle</Link>
                <Link to="/services" onClick={handleLinkClick}>Services & Pricing</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact & Hours</Link>
              </div>
            </div>

            <div className="footer-services">
              <h4>Therapy Services</h4>
              <div className="footer-links">
                <span>Individual Therapy</span>
                <span>Family & Couples</span>
                <span>Trauma & PTSD Treatment</span>
                <span>Child & Adolescent Care</span>
                <span>EMDR Therapy</span>
              </div>
            </div>

            <div className="footer-contact">
              <h4>Get in Touch</h4>
              <div className="contact-methods">
                <a href="tel:(217) 834-1738" className="contact-method">
                  <Phone size={18} />
                  <span>(217) 834-1738</span>
                </a>
                <a href="mailto:michelle@themendingspace.com" className="contact-method">
                  <Mail size={18} />
                  <span>michelle@themendingspace.com</span>
                </a>
                <div className="contact-method">
                  <MapPin size={18} />
                  <span>
                    701 Devonshire Drive<br />
                    Champaign, IL 61820
                  </span>
                </div>
                <div className="contact-method">
                  <Calendar size={18} />
                  <span>Free 15-min consultation</span>
                </div>
              </div>
              
              <div className="insurance-info">
                <h5>Insurance Accepted</h5>
                <div className="insurance-badges">
                  <span>Aetna</span>
                  <span>BCBS</span>
                  <span>Health Alliance</span>
                  <span>TriWest</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>© 2024 The Mending Space. Michelle Hooks, LCSW. All rights reserved.</p>
              <p className="footer-license">
                Licensed by the State of Illinois • Professional Mental Health Services
              </p>
            </div>
            
            <div className="footer-cta">
              <div className="footer-cta-content">
                <span>Ready to begin healing?</span>
                <a href="tel:(217) 834-1738" className="footer-cta-btn">
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 