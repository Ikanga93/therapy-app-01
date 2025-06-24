import { Link } from 'react-router-dom'
import { 
  Brain, 
  Phone, 
  MapPin, 
  Shield, 
  Mail, 
  Calendar, 
  Award, 
  CheckCircle,
  ExternalLink,
  Heart,
  Users,
  ArrowRight,
  Clock,
  Star
} from 'lucide-react'

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
          <div className="footer-shape footer-shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <Brain size={32} />
                </div>
                <span className="logo-text">Dr. Dynesha D Grissom</span>
              </div>
              <p className="footer-description">
                Providing compassionate, evidence-based psychological care for over 20 years. 
                Specializing in trauma, grief, and comprehensive mental health services for 
                individuals, couples, and families in Champaign, Illinois.
              </p>
              <div className="footer-credentials">
                <div className="credential-item">
                  <Award size={24} />
                  <div className="credential-text">
                    <h4>Licensed Psychologist</h4>
                    <p>Illinois License #071010029</p>
                  </div>
                </div>
                <div className="credential-item">
                  <Star size={24} />
                  <div className="credential-text">
                    <h4>Psychology Today Verified</h4>
                    <p>Verified professional profile</p>
                  </div>
                </div>
                <div className="credential-item">
                  <Shield size={24} />
                  <div className="credential-text">
                    <h4>PhD, LCP, MSCP</h4>
                    <p>Advanced clinical credentials</p>
                  </div>
                </div>
                </div>
              </div>
            </div>

          {/* Main Sections */}
          <div className="footer-sections">
            <div className="footer-section">
              <h3>
                <Users size={20} />
                Navigation
              </h3>
              <div className="footer-links">
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About Dr. Grissom</Link>
                <Link to="/services" onClick={handleLinkClick}>Services & Specialties</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact & Appointments</Link>
              </div>
            </div>

            <div className="footer-section">
              <h3>
                <Heart size={20} />
                Specialties & Services
              </h3>
              <div className="footer-links">
                <span>Trauma & PTSD Treatment</span>
                <span>Grief & Loss Counseling</span>
                <span>Psychological Testing & Evaluation</span>
                <span>Individual Therapy</span>
                <span>Couples & Relationship Therapy</span>
                <span>Family & Child Therapy</span>
                <span>Adolescent Mental Health</span>
                <span>Crisis Intervention</span>
              </div>
            </div>

            <div className="footer-section">
              <h3>
                <Phone size={20} />
                Contact & Location
              </h3>
              <div className="contact-methods">
                <a href="tel:(217) 269-8769" className="contact-method">
                  <Phone size={20} />
                  <div className="method-details">
                    <h4>Call Today</h4>
                    <p>(217) 269-8769</p>
                  </div>
                </a>
                <div className="contact-method">
                  <MapPin size={20} />
                  <div className="method-details">
                    <h4>Visit Our Office</h4>
                    <p>
                      YMG Psychological Services, PLLC<br />
                      701 Devonshire Drive, Building C, Suite 132<br />
                    Champaign, IL 61820
                    </p>
                  </div>
                </div>
                <div className="contact-method">
                  <Calendar size={20} />
                  <div className="method-details">
                    <h4>Appointment Options</h4>
                    <p>Video sessions & in-person visits available</p>
                  </div>
                </div>
              </div>
              
              <div className="insurance-info">
                <h4>
                  <Shield size={18} />
                  Insurance Accepted
                </h4>
                <div className="insurance-badges">
                  <span>Aetna</span>
                  <span>BlueCross BlueShield</span>
                  <span>Cigna</span>
                  <span>Health Alliance</span>
                  <span>Optum</span>
                  <span>UnitedHealthcare</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="footer-cta">
            <div className="footer-cta-content">
              <h3>Ready to Begin Your Healing Journey?</h3>
              <p>
                Take the first step toward better mental health. Dr. Grissom is here to 
                provide the professional, compassionate care you deserve.
              </p>
              <a href="tel:(217) 269-8769" className="footer-cta-btn">
                <Phone size={18} />
                Call (217) 269-8769
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>© 2024 YMG Psychological Services, PLLC. Dr. Dynesha D Grissom, PhD, LCP, MSCP.</p>
              <p>All rights reserved. Professional psychological services since 2001.</p>
              <div className="footer-license">
                <Shield size={14} />
                Licensed by the State of Illinois #071010029 • Comprehensive Mental Health Care
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 