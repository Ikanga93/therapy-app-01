import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Heart, Users, Brain, Calendar, CheckCircle } from 'lucide-react'
import michellePhoto from '../assets/Michelle-hooks.jpeg'

const Home = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <Star size={16} />
                <span>Psychology Today Verified</span>
              </div>
              
              <h1 className="hero-title">
                Find Your Path to 
                <span className="gradient-text"> Healing & Growth</span>
              </h1>
              
              <p className="hero-subtitle">
                I strive to guide children, families, and individuals toward healing through an 
                attachment-oriented perspective, prioritizing connections, presence and a sense of security.
              </p>
              
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Schedule Free Consultation
                  <ArrowRight size={20} />
                </Link>
                <a href="tel:(217) 834-1738" className="btn btn-secondary">
                  <Calendar size={20} />
                  Call Now
                </a>
              </div>
              
              <div className="hero-trust">
                <div className="trust-item">
                  <Shield size={16} />
                  <span>Licensed LCSW</span>
                </div>
                <div className="trust-item">
                  <Heart size={16} />
                  <span>4+ Years Experience</span>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <Link to="/about" className="profile-card-link">
                <div className="profile-card interactive">
                  <div className="profile-image">
                    <img 
                      src={michellePhoto}
                      alt="Michelle Hooks, LCSW"
                    />
                    <div className="verified-badge">
                      <Shield size={16} />
                    </div>
                  </div>
                  <div className="profile-info">
                    <h3>Michelle Hooks</h3>
                    <p>Licensed Clinical Social Worker</p>
                    <div className="profile-credentials">
                      <span>LCSW • Illinois Licensed</span>
                    </div>
                  </div>
                  <div className="profile-cta">
                    <span className="learn-more">Learn More About Michelle</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
              
              <div className="floating-card consultation-card">
                <Calendar size={20} />
                <div>
                  <h4>Free Consultation</h4>
                  <p>15-minute phone call</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="services-highlight">
        <div className="container">
          <div className="services-intro">
            <h2>Comprehensive Mental Health Support</h2>
            <p>Professional therapy services designed to meet you where you are in your healing journey</p>
          </div>
          
          <div className="services-showcase">
            <div className="service-highlight">
              <div className="service-visual">
                <div className="service-icon-large trauma">
                  <Brain size={48} />
                </div>
              </div>
              <div className="service-info">
                <h3>Trauma & PTSD</h3>
                <p>Specialized care for healing from difficult experiences</p>
              </div>
            </div>
            
            <div className="service-highlight">
              <div className="service-visual">
                <div className="service-icon-large family">
                  <Users size={48} />
                </div>
              </div>
              <div className="service-info">
                <h3>Family Therapy</h3>
                <p>Strengthening bonds and improving communication</p>
              </div>
            </div>
            
            <div className="service-highlight">
              <div className="service-visual">
                <div className="service-icon-large individual">
                  <Heart size={48} />
                </div>
              </div>
              <div className="service-info">
                <h3>Individual Support</h3>
                <p>Personal growth in a safe, supportive environment</p>
              </div>
            </div>
          </div>
          
          <div className="services-action">
            <Link to="/services" className="btn btn-outline">
              Explore All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose The Mending Space?</h2>
              <p>
                I believe healing happens in relationship. My approach combines professional expertise 
                with genuine care, creating a space where you can truly be yourself.
              </p>
              
              <div className="value-points">
                <div className="value-point">
                  <div className="value-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div className="value-content">
                    <h4>Attachment-Focused Care</h4>
                    <p>Building secure connections that promote lasting healing</p>
                  </div>
                </div>
                
                <div className="value-point">
                  <div className="value-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div className="value-content">
                    <h4>Creative & Expressive Tools</h4>
                    <p>Art, sand tray, and writing to facilitate growth</p>
                  </div>
                </div>
                
                <div className="value-point">
                  <div className="value-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div className="value-content">
                    <h4>All Ages Welcome</h4>
                    <p>Specialized care for children, teens, adults, and families</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn btn-primary">
                Learn More About Michelle
                <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="why-choose-visual">
              <div className="credentials-showcase">
                <div className="credential-badge">
                  <Shield size={32} />
                  <div>
                    <h3>Licensed LCSW</h3>
                    <p>Illinois #149.026321</p>
                  </div>
                </div>
                
                <div className="credential-badge">
                  <Star size={32} />
                  <div>
                    <h3>Psychology Today</h3>
                    <p>Verified Provider</p>
                  </div>
                </div>
                
                <div className="credential-badge">
                  <Brain size={32} />
                  <div>
                    <h3>EMDR Trained</h3>
                    <p>Trauma Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Begin Your Healing Journey?</h2>
              <p>
                Take the first step with a free 15-minute consultation. 
                Let's explore how therapy can support your path to wellness.
              </p>
              
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary large">
                  Schedule Free Consultation
                  <Calendar size={24} />
                </Link>
                <a href="tel:(217) 834-1738" className="btn btn-secondary large">
                  Call (217) 834-1738
                </a>
              </div>
              
              <div className="cta-assurance">
                <div className="assurance-item">
                  <CheckCircle size={16} />
                  <span>No commitment required</span>
                </div>
                <div className="assurance-item">
                  <CheckCircle size={16} />
                  <span>Confidential and secure</span>
                </div>
                <div className="assurance-item">
                  <CheckCircle size={16} />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 