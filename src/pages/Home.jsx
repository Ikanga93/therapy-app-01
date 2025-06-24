import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Heart,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Users,
  Brain,
  Clock,
  Shield,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import profileImage from '../assets/therapy-app-01-profile.jpeg';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section with Curved Design */}
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
                Psychology Today Verified
              </div>
              
              <h1 className="hero-title">
                Expert Psychological Care,
                <span className="gradient-text">Compassionate Healing</span>
              </h1>
              
              <p className="hero-subtitle">
                Dr. Dynesha D Grissom, PhD, LCP, MSCP brings over 20 years of specialized experience 
                in trauma, grief, and psychological evaluation to help you on your journey to wellness.
              </p>
              
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary large">
                  <Phone size={20} />
                  Schedule Consultation
                </Link>
                
                <Link to="/about" className="btn btn-secondary large">
                  <Users size={20} />
                  Learn About Dr. Grissom
                </Link>
              </div>
              
              <div className="hero-trust">
                <div className="trust-item">
                  <Award size={20} />
                  <span>20+ Years Experience</span>
                </div>
                <div className="trust-item">
                  <CheckCircle size={20} />
                  <span>Illinois Licensed</span>
                </div>
                <div className="trust-item">
                  <Star size={20} />
                  <span>Psychology Today Verified</span>
                </div>
              </div>
            </div>
            
            <div className="hero-image hero-image-mobile-order">
              <Link to="/about" className="profile-card-link">
                <div className="profile-card interactive">
                  <div className="profile-image">
                    <img src={profileImage} alt="Dr. Dynesha D Grissom" />
                    <div className="verified-badge">
                      <Award size={18} />
                    </div>
                  </div>
                  
                  <div className="profile-info">
                    <h3>Dr. Dynesha D Grissom</h3>
                    <p>Psychologist, PhD, LCP, MSCP</p>
                    <div className="profile-credentials">
                      Illinois License #071010029
                    </div>
                  </div>
                  
                  <div className="profile-cta">
                    <span className="learn-more">View Profile</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
              
              <div className="floating-card consultation-card">
                <div className="card-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Free Consultation</h4>
                  <p>(217) 269-8769</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight with Modern Cards */}
      <section className="services-highlight">
        <div className="container">
          <div className="services-intro">
            <h2>Specialized Psychological Services</h2>
            <p>
              Comprehensive mental health care tailored to your unique needs, 
              backed by decades of expertise and evidence-based approaches.
            </p>
          </div>
          
          <div className="services-showcase">
            <div className="service-highlight">
              <div className="service-visual">
                <div className="service-icon-large trauma">
                  <Heart size={50} />
                </div>
              </div>
              <div className="service-info">
                <h3>Trauma & PTSD</h3>
                <p>
                  Specialized care for trauma survivors using evidence-based treatments 
                  to help you reclaim your sense of safety and well-being.
                </p>
              </div>
            </div>
            
            <div className="service-highlight">
              <div className="service-visual">
                <div className="service-icon-large grief">
                  <Users size={50} />
                </div>
              </div>
              <div className="service-info">
                <h3>Grief & Loss</h3>
                <p>
                  Compassionate support through the grieving process, helping you 
                  navigate loss and find meaning in your healing journey.
                </p>
              </div>
            </div>
            
            <div className="service-highlight">
              <div className="service-visual">
                <div className="service-icon-large testing">
                  <Brain size={50} />
                </div>
              </div>
              <div className="service-info">
                <h3>Testing & Evaluation</h3>
                <p>
                  Comprehensive psychological assessments to better understand 
                  your mental health and guide effective treatment planning.
                </p>
              </div>
            </div>
          </div>
          
          <div className="services-action">
            <Link to="/services" className="btn btn-outline large">
              <Sparkles size={20} />
              Explore All Services
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose Dr. Grissom?</h2>
              <p>
                With over two decades of experience serving diverse communities, 
                Dr. Grissom brings unparalleled expertise and genuine compassion 
                to every therapeutic relationship.
              </p>
              
              <div className="value-points">
                <div className="value-point">
                  <div className="value-icon">
                    <Award size={24} />
                  </div>
                  <div className="value-content">
                    <h4>Extensive Experience</h4>
                    <p>Over 20 years serving children, adolescents, adults, couples, and families across diverse therapeutic settings.</p>
                  </div>
                </div>
                
                <div className="value-point">
                  <div className="value-icon">
                    <Brain size={24} />
                  </div>
                  <div className="value-content">
                    <h4>Specialized Expertise</h4>
                    <p>Advanced training in trauma, grief counseling, and comprehensive psychological evaluation services.</p>
                  </div>
                </div>
                
                <div className="value-point">
                  <div className="value-icon">
                    <Heart size={24} />
                  </div>
                  <div className="value-content">
                    <h4>Compassionate Care</h4>
                    <p>Person-centered approach that honors your unique journey and empowers lasting positive change.</p>
                  </div>
                </div>
                
                <div className="value-point">
                  <div className="value-icon">
                    <Shield size={24} />
                  </div>
                  <div className="value-content">
                    <h4>Professional Excellence</h4>
                    <p>Illinois licensed psychologist with Psychology Today verification and comprehensive insurance coverage.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="credentials-showcase">
              <div className="credential-badge">
                <CheckCircle size={32} />
                <div>
                  <h3>Licensed Psychologist</h3>
                  <p>Illinois License #071010029</p>
                </div>
              </div>
              
              <div className="credential-badge">
                <Star size={32} />
                <div>
                  <h3>Psychology Today Verified</h3>
                  <p>Verified professional profile</p>
                </div>
              </div>
              
              <div className="credential-badge">
                <Award size={32} />
                <div>
                  <h3>20+ Years Experience</h3>
                  <p>Since 2001 in practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Begin Your Healing Journey?</h2>
              <p>
                Take the first step toward better mental health with a comprehensive 
                consultation. Dr. Grissom is here to support you every step of the way.
              </p>
              
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary large">
                  <Phone size={20} />
                  Call (217) 269-8769
                </Link>
                
                <Link to="/about" className="btn btn-secondary large">
                  <Mail size={20} />
                  Learn More About Dr. Grissom
                </Link>
              </div>
              
              <div className="cta-assurance">
                <div className="assurance-item">
                  <Clock size={16} />
                  <span>Video & In-Person Available</span>
                </div>
                <div className="assurance-item">
                  <Shield size={16} />
                  <span>Insurance Accepted</span>
                </div>
                <div className="assurance-item">
                  <CheckCircle size={16} />
                  <span>Confidential & Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 