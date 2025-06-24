import React from 'react'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Calendar, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Award, 
  Star,
  Heart,
  Brain,
  Building,
  CreditCard,
  DollarSign,
  Video,
  UserCheck,
  Sparkles
} from 'lucide-react'
import profileImage from '../assets/therapy-app-01-profile.jpeg'

const Contact = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="page-header">
            <div className="hero-badge">
              <Heart size={16} />
              Ready to Begin Your Healing Journey?
            </div>
            <h1>Get in Touch</h1>
            <p>
              Take the first step toward better mental health. Dr. Grissom is here to provide 
              the professional, compassionate care you deserve with flexible appointment options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-hero-grid">
            {/* Primary Contact Card */}
            <div className="primary-contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-large">
                  <Phone size={48} />
                </div>
                <div>
                  <h2>Schedule Your Appointment</h2>
                  <p>Available both in-person and online</p>
                </div>
              </div>
              
              <div className="contact-card-content">
                <p>
                  I am here to help you through the process of regaining control of your life, 
                  learning healthy ways of coping, healing, recovering, resolving conflict, 
                  growing and becoming the best version of you.
                </p>
                
                <div className="consultation-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={20} />
                    <span>Video and in-person appointments available</span>
                  </div>
                  <div className="highlight-item">
                    <Award size={20} />
                    <span>Over 20 years of experience</span>
                  </div>
                  <div className="highlight-item">
                    <Star size={20} />
                    <span>Psychology Today verified provider</span>
                  </div>
                  <div className="highlight-item safety-note">
                    <Shield size={20} />
                    <span>If you have symptoms, please reschedule in-person to video</span>
                  </div>
                </div>
                
                <div className="primary-cta">
                  <a href="tel:(217) 269-8769" className="btn btn-primary large">
                    <Phone size={20} />
                    Call (217) 269-8769
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Doctor Profile Card */}
            <div className="doctor-profile-card">
              <div className="profile-visual-contact">
                <div className="profile-image-contact">
                  <img src={profileImage} alt="Dr. Dynesha D Grissom" />
                  <div className="verified-badge-contact">
                    <Star size={16} />
                  </div>
                </div>
              </div>
              
              <div className="profile-info-contact">
                <h3>Dr. Dynesha D Grissom</h3>
                <p className="credentials">PhD, LCP, MSCP (she/her)</p>
                <div className="license-badge">
                  <Shield size={16} />
                  <span>Illinois License #071010029</span>
                </div>
                
                <div className="specialties-quick">
                  <span>Trauma & PTSD</span>
                  <span>Grief & Loss</span>
                  <span>Testing & Evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="container">
          <div className="contact-methods-grid">
            <div className="contact-method-card">
              <div className="method-icon">
                <Phone size={32} />
              </div>
              <div className="method-content">
                <h3>Phone Consultation</h3>
                <div className="contact-link-large">
                  <a href="tel:(217) 269-8769">(217) 269-8769</a>
                </div>
                <p>Call directly for appointments or questions about services</p>
                <div className="method-features">
                  <span>Immediate scheduling</span>
                  <span>Questions answered</span>
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">
                <Video size={32} />
              </div>
              <div className="method-content">
                <h3>Video Sessions</h3>
                <p>Secure online therapy from the comfort of your home</p>
                <div className="method-features">
                  <span>HIPAA compliant</span>
                  <span>Flexible scheduling</span>
                  <span>Safe and convenient</span>
                </div>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">
                <Building size={32} />
              </div>
              <div className="method-content">
                <h3>In-Person Visits</h3>
                <p>Traditional office-based therapy sessions</p>
                <div className="location-quick">
                  <MapPin size={18} />
                  <span>Building C, Suite 132, Champaign, IL</span>
                </div>
                <div className="method-features">
                  <span>Professional setting</span>
                  <span>Private and confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Information */}
      <section className="practice-info-section">
        <div className="container">
          <div className="practice-info-grid">
            {/* Location Card */}
            <div className="info-card location-card">
              <div className="card-header">
                <MapPin size={28} />
                <h3>Office Location</h3>
              </div>
              <div className="card-content">
                <div className="location-details">
                  <h4>YMG Psychological Services, PLLC</h4>
                  <div className="address">
                    701 Devonshire Drive<br />
                    Building C, Suite 132<br />
                    Champaign, IL 61820
                  </div>
                </div>
                
                <div className="areas-served">
                  <h4>Areas Served</h4>
                  <div className="area-tags">
                    <span>Champaign</span>
                    <span>Urbana</span>
                    <span>Savoy</span>
                    <span>Surrounding Areas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance Card */}
            <div className="info-card insurance-card">
              <div className="card-header">
                <Shield size={28} />
                <h3>Insurance & Payment</h3>
              </div>
              <div className="card-content">
                <div className="insurance-accepted">
                  <h4>Insurance Accepted</h4>
                  <div className="insurance-list">
                    <div className="insurance-item">
                      <CheckCircle size={16} />
                      <span>Aetna</span>
                    </div>
                    <div className="insurance-item">
                      <CheckCircle size={16} />
                      <span>BlueCross BlueShield</span>
                    </div>
                    <div className="insurance-item">
                      <CheckCircle size={16} />
                      <span>Cigna</span>
                    </div>
                    <div className="insurance-item">
                      <CheckCircle size={16} />
                      <span>Health Alliance</span>
                    </div>
                    <div className="insurance-item">
                      <CheckCircle size={16} />
                      <span>Optum</span>
                    </div>
                    <div className="insurance-item">
                      <CheckCircle size={16} />
                      <span>UnitedHealthcare</span>
                    </div>
                  </div>
                </div>
                
                <div className="payment-methods">
                  <h4>Payment Methods</h4>
                  <div className="payment-grid">
                    <div className="payment-item">
                      <CreditCard size={16} />
                      <span>Credit Cards</span>
                    </div>
                    <div className="payment-item">
                      <DollarSign size={16} />
                      <span>Cash & Check</span>
                    </div>
                    <div className="payment-item">
                      <Building size={16} />
                      <span>HSA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Info Card */}
            <div className="info-card appointment-card">
              <div className="card-header">
                <Calendar size={28} />
                <h3>Appointment Information</h3>
              </div>
              <div className="card-content">
                <div className="session-types">
                  <div className="session-type">
                    <Video size={20} />
                    <div>
                      <h4>Video Sessions</h4>
                      <p>Secure online appointments</p>
                    </div>
                  </div>
                  <div className="session-type">
                    <UserCheck size={20} />
                    <div>
                      <h4>In-Person Sessions</h4>
                      <p>Traditional office visits</p>
                    </div>
                  </div>
                </div>
                
                <div className="scheduling-note">
                  <h4>Flexible Scheduling</h4>
                  <p>Dr. Grissom works to accommodate your schedule with both daytime and evening appointment options.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="credentials-section">
        <div className="container">
          <div className="credentials-showcase">
            <div className="credentials-header">
              <h2>Professional Qualifications</h2>
              <p>
                Dr. Grissom brings over 20 years of experience and advanced credentials 
                to provide comprehensive mental health care.
              </p>
            </div>
            
            <div className="credentials-grid">
              <div className="credential-item">
                <Award size={24} />
                <div>
                  <h4>Licensed Psychologist</h4>
                  <p>Illinois License #071010029</p>
                </div>
              </div>
              
              <div className="credential-item">
                <Brain size={24} />
                <div>
                  <h4>Advanced Degrees</h4>
                  <p>PhD, LCP, MSCP</p>
                </div>
              </div>
              
              <div className="credential-item">
                <Star size={24} />
                <div>
                  <h4>Psychology Today Verified</h4>
                  <p>Verified professional profile</p>
                </div>
              </div>
              
              <div className="credential-item">
                <Clock size={24} />
                <div>
                  <h4>20+ Years Experience</h4>
                  <p>Serving diverse populations since 2001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content-contact">
            <div className="cta-visual">
              <div className="cta-icon">
                <Heart size={48} />
              </div>
            </div>
            
            <div className="cta-text">
              <h2>Take the First Step Today</h2>
              <p>
                It takes strength and courage to seek help. I'm here to provide the compassionate, 
                professional care you need to heal, grow, and become the best version of yourself.
              </p>
            </div>
            
            <div className="cta-actions-contact">
              <a href="tel:(217) 269-8769" className="btn btn-primary large">
                <Phone size={20} />
                Call (217) 269-8769
              </a>
              
              <div className="contact-assurance">
                <div className="assurance-item">
                  <Shield size={16} />
                  <span>Confidential & Professional</span>
                </div>
                <div className="assurance-item">
                  <CheckCircle size={16} />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="assurance-item">
                  <Heart size={16} />
                  <span>Compassionate Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 