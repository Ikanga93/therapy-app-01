import React from 'react'
import { 
  CheckCircle, 
  Heart, 
  Award, 
  Users, 
  Calendar, 
  Brain, 
  Shield, 
  Phone, 
  MapPin,
  Star,
  Clock,
  Sparkles,
  ArrowRight,
  Building,
  GraduationCap,
  Target,
  Lightbulb
} from 'lucide-react'
import profileImage from '../assets/therapy-app-01-profile.jpeg'

const About = () => {
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
              <Star size={16} />
              Psychology Today Verified Professional
            </div>
            <h1>About Dr. Dynesha D Grissom</h1>
            <p>
              Licensed Psychologist with over 20 years of experience providing compassionate, 
              evidence-based mental health care to diverse populations across Illinois.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="about-profile">
        <div className="container">
          <div className="profile-hero">
            <div className="profile-visual">
              <div className="profile-image-container">
                <div className="profile-image-large">
                  <img src={profileImage} alt="Dr. Dynesha D Grissom" />
                  <div className="verified-badge-large">
                    <Award size={20} />
                  </div>
                </div>
                
                <div className="floating-credentials">
                  <div className="credential-float">
                    <GraduationCap size={18} />
                    <span>PhD Psychology</span>
                  </div>
                  <div className="credential-float">
                    <Shield size={18} />
                    <span>Illinois Licensed</span>
                  </div>
                  <div className="credential-float">
                    <Star size={18} />
                    <span>20+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="profile-content">
              <div className="profile-header">
                <h2>Dr. Dynesha D Grissom</h2>
                <p className="title">Psychologist, PhD, LCP, MSCP (she/her)</p>
                <div className="license-info">
                  <Shield size={16} />
                  <span>Illinois License #071010029</span>
                </div>
              </div>
              
              <div className="profile-stats">
                <div className="stat-card">
                  <div className="stat-icon">
                    <Calendar size={24} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <Users size={24} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">All Ages</span>
                    <span className="stat-label">Populations Served</span>
                    </div>
                    </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <Award size={24} />
                    </div>
                  <div className="stat-content">
                    <span className="stat-number">Verified</span>
                    <span className="stat-label">Psychology Today</span>
                  </div>
                </div>
              </div>

              <div className="profile-description">
                <p>
                  It takes a lot of strength and courage to seek help when you are hurting, feel like things 
                  are falling apart, confused, scared, and feel like things are out of control. I am here to 
                  help you through the process of regaining control of your life, learning healthy ways of 
                  coping, healing, recovering, resolving conflict, growing and becoming the best version of you.
                </p>
                <a href="tel:(217) 269-8769" className="btn btn-primary">
                  <Phone size={18} />
                  Schedule Consultation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Approach Section */}
      <section className="about-experience">
        <div className="container">
          <div className="experience-content">
            <div className="experience-text">
              <h2>Comprehensive Care Across Diverse Settings</h2>
                <p>
                I am a licensed psychologist with over 20 years of experience in mental health. 
                I have worked with diverse populations in diverse settings, bringing cultural 
                competence and evidence-based practices to every therapeutic relationship.
              </p>
              
              <div className="experience-highlights">
                <div className="highlight-item">
                  <Building size={20} />
                  <span>Community mental health agencies</span>
                </div>
                <div className="highlight-item">
                  <GraduationCap size={20} />
                  <span>Schools and educational institutions</span>
                </div>
                <div className="highlight-item">
                  <Shield size={20} />
                  <span>Veterans Affairs (VA) facilities</span>
                </div>
                <div className="highlight-item">
                  <Building size={20} />
                  <span>Colleges and universities</span>
                </div>
                <div className="highlight-item">
                  <Heart size={20} />
                  <span>Hospitals and medical centers</span>
                </div>
                <div className="highlight-item">
                  <Users size={20} />
                  <span>Safe houses and crisis centers</span>
                </div>
              </div>
            </div>
            
            <div className="approach-cards">
              <div className="approach-card modern">
                <div className="card-icon">
                  <Brain size={32} />
                </div>
                <h3>Evidence-Based Treatment</h3>
                <p>
                  Using proven therapeutic interventions including CBT, trauma-focused therapy, 
                  and family systems approaches.
                </p>
              </div>

              <div className="approach-card modern">
                <div className="card-icon">
                  <Heart size={32} />
                </div>
                <h3>Culturally Competent Care</h3>
                <p>
                  Providing respectful, inclusive therapy that honors diverse backgrounds 
                  and experiences.
                </p>
              </div>
                
              <div className="approach-card modern">
                <div className="card-icon">
                  <Target size={32} />
                </div>
                <h3>Comprehensive Assessment</h3>
                <p>
                  Offering thorough psychological testing and evaluation services for 
                  accurate diagnosis and treatment planning.
                </p>
                  </div>
                  </div>
                  </div>
                </div>
      </section>

      {/* Specialties & Expertise */}
      <section className="about-specialties">
        <div className="container">
          <div className="specialties-header">
            <h2>Areas of Expertise</h2>
            <p>
              Comprehensive mental health services for children, adolescents, adults, 
              couples, and families with specialized focus on trauma, grief, and assessment.
            </p>
          </div>
          
          <div className="specialties-grid">
            <div className="specialty-category">
              <div className="category-header">
                <Brain size={28} />
                <h3>Top Specialties</h3>
              </div>
              <div className="specialty-tags primary">
                <span>Trauma and PTSD</span>
                <span>Grief & Loss</span>
                <span>Testing & Evaluation</span>
              </div>
            </div>

            <div className="specialty-category">
              <div className="category-header">
                <Users size={28} />
                <h3>Clinical Areas</h3>
              </div>
              <div className="specialty-tags">
                <span>ADHD</span>
                <span>Anxiety Disorders</span>
                <span>Depression</span>
                <span>Autism Spectrum</span>
                <span>Behavioral Issues</span>
                <span>Bipolar Disorder</span>
                <span>Family Conflict</span>
                <span>Life Transitions</span>
                  </div>
            </div>
            
            <div className="specialty-category">
              <div className="category-header">
                <Heart size={28} />
                <h3>Population Focus</h3>
              </div>
              <div className="specialty-tags">
                <span>Children & Adolescents</span>
                <span>Adults</span>
                <span>Couples</span>
                <span>Families</span>
                <span>LGBTQ+ Individuals</span>
                <span>Military & Veterans</span>
                <span>Healthcare Workers</span>
                <span>First Responders</span>
                </div>
              </div>

            <div className="specialty-category">
              <div className="category-header">
                <Lightbulb size={28} />
                <h3>Treatment Approaches</h3>
              </div>
                <div className="specialty-tags">
                <span>Cognitive Behavioral (CBT)</span>
                <span>Trauma-Focused Therapy</span>
                <span>Family Systems</span>
                <span>Mindfulness-Based</span>
                <span>Solution-Focused</span>
                <span>Strength-Based</span>
                <span>Play Therapy</span>
                <span>Group Therapy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content-about">
            <div className="cta-text">
              <h2>Ready to Begin Your Healing Journey?</h2>
              <p>
                My clients often comment that, after meeting with me, they feel heard, seen, 
                understood, cared for, encouraged, empowered and equipped. I am passionate about 
                my work and use different interventions to meet the needs of those with whom I 
                am entrusted to work.
              </p>
              </div>

            <div className="cta-actions-about">
              <a href="tel:(217) 269-8769" className="btn btn-primary large">
                <Phone size={20} />
                Call (217) 269-8769
              </a>
              
              <div className="contact-info-quick">
                <div className="quick-contact">
                  <MapPin size={18} />
                  <span>
                    YMG Psychological Services, PLLC<br />
                    701 Devonshire Drive, Building C, Suite 132<br />
                    Champaign, IL 61820
                  </span>
                </div>
                <div className="quick-contact">
                  <Clock size={18} />
                  <span>Video & in-person appointments available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 