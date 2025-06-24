import React from 'react'
import { 
  Brain, 
  Users, 
  Heart, 
  Shield, 
  CheckCircle, 
  DollarSign, 
  Clock, 
  Phone, 
  Award, 
  Star,
  ArrowRight,
  Target,
  Sparkles,
  Lightbulb,
  FileCheck,
  Building,
  Calendar,
  CreditCard
} from 'lucide-react'

const Services = () => {
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
              <Sparkles size={16} />
              Comprehensive Mental Health Services
            </div>
            <h1>Psychological Services</h1>
            <p>
              Evidence-based mental health care with over 20 years of experience serving 
              children, adolescents, adults, couples, and families across diverse populations.
            </p>
          </div>
        </div>
      </section>

      {/* Top Specialties */}
      <section className="services-top-specialties">
        <div className="container">
          <div className="specialties-intro">
            <h2>Top Specialties</h2>
            <p>
              Specialized care in the areas where Dr. Grissom has the most extensive 
              training and experience, helping you achieve meaningful healing and growth.
            </p>
          </div>
          
          <div className="top-specialties-grid">
            <div className="specialty-card featured">
              <div className="specialty-visual">
                <div className="specialty-icon trauma">
                  <Brain size={48} />
                </div>
                <div className="specialty-badge">
                  <Star size={16} />
                  <span>Top Specialty</span>
                </div>
              </div>
              <div className="specialty-content">
                <h3>Trauma & PTSD Therapy</h3>
                <p>
                  Specialized care for healing from traumatic experiences using evidence-based 
                  approaches. I help clients process difficult experiences and work toward 
                  healing at their own pace.
                </p>
                <div className="specialty-details">
                  <h4>What I treat:</h4>
                  <ul>
                    <li>Post-Traumatic Stress Disorder (PTSD)</li>
                    <li>Complex trauma and childhood trauma</li>
                    <li>Sexual abuse and assault trauma</li>
                    <li>Combat and military trauma</li>
                    <li>Secondary trauma for caregivers</li>
                  </ul>
                  <div className="approach-tags">
                    <span>Trauma-Focused CBT</span>
                    <span>Cognitive Processing</span>
                    <span>EMDR</span>
                    <span>Exposure Therapy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="specialty-card featured">
              <div className="specialty-visual">
                <div className="specialty-icon grief">
                  <Heart size={48} />
                </div>
                <div className="specialty-badge">
                  <Star size={16} />
                  <span>Top Specialty</span>
                </div>
              </div>
              <div className="specialty-content">
                <h3>Grief & Loss Counseling</h3>
                <p>
                  Compassionate support through difficult transitions and loss. Grief affects 
                  everyone differently, and I provide personalized care to help you navigate 
                  complex emotions and challenges.
                </p>
                <div className="specialty-details">
                  <h4>Types of grief and loss:</h4>
                  <ul>
                    <li>Death of loved ones</li>
                    <li>Divorce and relationship endings</li>
                    <li>Job loss and career transitions</li>
                    <li>Health diagnoses and chronic illness</li>
                    <li>Life transitions and major changes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="specialty-card featured">
              <div className="specialty-visual">
                <div className="specialty-icon testing">
                  <FileCheck size={48} />
                </div>
                <div className="specialty-badge">
                  <Star size={16} />
                  <span>Top Specialty</span>
                </div>
              </div>
              <div className="specialty-content">
                <h3>Testing & Evaluation</h3>
                <p>
                  Comprehensive psychological testing and assessment services that are 
                  culturally competent and thorough, helping to understand cognitive, 
                  emotional, and behavioral functioning.
                </p>
                <div className="specialty-details">
                  <h4>Assessment services:</h4>
                  <ul>
                    <li>ADHD and attention evaluations</li>
                    <li>Autism spectrum assessments</li>
                    <li>Learning disability testing</li>
                    <li>Cognitive and intelligence testing</li>
                    <li>Educational and developmental evaluations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="services-categories">
        <div className="container">
          <div className="categories-intro">
            <h2>Comprehensive Mental Health Services</h2>
            <p>
              Personalized care for individuals, couples, and families across all age groups 
              with a focus on evidence-based treatment and cultural competence.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-category">
              <div className="category-header">
                <div className="category-icon">
                  <Users size={32} />
                </div>
                <h3>Individual Therapy</h3>
                <p>Personalized treatment for all ages</p>
              </div>
              <div className="category-content">
                <div className="service-areas">
                  <div className="area-group">
                    <h4>Common Concerns</h4>
                    <ul>
                      <li>Anxiety and panic disorders</li>
                      <li>Depression and mood disorders</li>
                      <li>Life transitions and adjustment</li>
                      <li>Self-esteem and identity concerns</li>
                      <li>Stress management</li>
                      <li>Sleep and insomnia issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-category">
              <div className="category-header">
                <div className="category-icon">
                  <Heart size={32} />
                </div>
                <h3>Couples & Family Therapy</h3>
                <p>Strengthening relationships and family bonds</p>
              </div>
              <div className="category-content">
                <div className="service-areas">
                  <div className="area-group">
                    <h4>Relationship Concerns</h4>
                    <ul>
                      <li>Communication difficulties</li>
                      <li>Marital and premarital counseling</li>
                      <li>Family conflict resolution</li>
                      <li>Parenting challenges and support</li>
                      <li>Blended family adjustment</li>
                      <li>Divorce and separation support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-category">
              <div className="category-header">
                <div className="category-icon">
                  <Shield size={32} />
                </div>
                <h3>Child & Adolescent Services</h3>
                <p>Specialized care for young people</p>
              </div>
              <div className="category-content">
                <div className="service-areas">
                  <div className="area-group">
                    <h4>Youth Concerns</h4>
                    <ul>
                      <li>ADHD and attention difficulties</li>
                      <li>Autism spectrum disorders</li>
                      <li>Behavioral issues and defiance</li>
                      <li>Developmental concerns</li>
                      <li>School-related challenges</li>
                      <li>Peer relationship problems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="services-approaches">
        <div className="container">
          <div className="approaches-content">
            <div className="approaches-text">
              <h2>Evidence-Based Treatment Approaches</h2>
              <p>
                I use various therapeutic interventions tailored to meet the unique needs of each 
                client, combining proven methodologies with cultural competence and compassionate care.
              </p>
            </div>
            
            <div className="approaches-grid">
              <div className="approach-item">
                <Brain size={24} />
                <div>
                  <h4>Cognitive Behavioral Therapy (CBT)</h4>
                  <p>Evidence-based approach for anxiety, depression, and behavioral issues</p>
                </div>
              </div>
              
              <div className="approach-item">
                <Heart size={24} />
                <div>
                  <h4>Trauma-Focused Therapy</h4>
                  <p>Specialized treatment for trauma and PTSD recovery</p>
                </div>
              </div>
              
              <div className="approach-item">
                <Users size={24} />
                <div>
                  <h4>Family Systems Therapy</h4>
                  <p>Understanding and improving family dynamics and relationships</p>
                </div>
              </div>
              
              <div className="approach-item">
                <Target size={24} />
                <div>
                  <h4>Strength-Based Approach</h4>
                  <p>Building on individual and family strengths and resilience</p>
                </div>
              </div>
              
              <div className="approach-item">
                <Lightbulb size={24} />
                <div>
                  <h4>Integrative Methods</h4>
                  <p>Combining multiple therapeutic modalities for optimal outcomes</p>
                </div>
              </div>
              
              <div className="approach-item">
                <Sparkles size={24} />
                <div>
                  <h4>Culturally Sensitive Care</h4>
                  <p>Respectful and competent treatment for diverse populations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Practical Info */}
      <section className="services-practical">
        <div className="container">
          <div className="practical-grid">
            <div className="practical-card">
              <div className="card-header">
                <Shield size={32} />
                <h3>Insurance & Payment</h3>
              </div>
              <div className="card-content">
                <h4>Insurance Accepted</h4>
                <div className="insurance-grid">
                  <span>Aetna</span>
                  <span>BlueCross BlueShield</span>
                  <span>Cigna</span>
                  <span>Health Alliance</span>
                  <span>Optum</span>
                  <span>UnitedHealthcare</span>
                </div>
                
                <h4>Payment Methods</h4>
                <div className="payment-methods">
                  <div className="payment-item">
                    <CreditCard size={18} />
                    <span>Credit Cards (Visa, Mastercard, Amex, Discover)</span>
                  </div>
                  <div className="payment-item">
                    <DollarSign size={18} />
                    <span>Cash & Check</span>
                  </div>
                  <div className="payment-item">
                    <Building size={18} />
                    <span>Health Savings Account (HSA)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="practical-card">
              <div className="card-header">
                <Calendar size={32} />
                <h3>Session Information</h3>
              </div>
              <div className="card-content">
                <div className="session-options">
                  <div className="session-option">
                    <CheckCircle size={18} />
                    <div>
                      <h4>In-Person Sessions</h4>
                      <p>Traditional office-based therapy sessions</p>
                    </div>
                  </div>
                  
                  <div className="session-option">
                    <CheckCircle size={18} />
                    <div>
                      <h4>Video Sessions</h4>
                      <p>Secure online therapy from your home</p>
                    </div>
                  </div>
                  
                  <div className="session-option">
                    <Star size={18} />
                    <div>
                      <h4>Flexible Scheduling</h4>
                      <p>Accommodating appointment times</p>
                    </div>
                  </div>
                </div>
                
                <div className="safety-note">
                  <strong>Safety Note:</strong> If you have symptoms, please reschedule 
                  in-person appointments to video sessions for everyone's safety.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content-services">
            <div className="cta-text">
              <h2>Ready to Start Your Healing Journey?</h2>
              <p>
                Take the first step toward better mental health. Dr. Grissom is here to help you 
                through the process of regaining control of your life, learning healthy ways of 
                coping, healing, recovering, and becoming the best version of yourself.
              </p>
            </div>
            
            <div className="cta-actions-services">
              <a href="tel:(217) 269-8769" className="btn btn-primary large">
                <Phone size={20} />
                Call (217) 269-8769
                <ArrowRight size={20} />
              </a>
              
              <div className="cta-assurance">
                <div className="assurance-item">
                  <Award size={16} />
                  <span>20+ Years Experience</span>
                </div>
                <div className="assurance-item">
                  <CheckCircle size={16} />
                  <span>Psychology Today Verified</span>
                </div>
                <div className="assurance-item">
                  <Shield size={16} />
                  <span>Insurance Accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 