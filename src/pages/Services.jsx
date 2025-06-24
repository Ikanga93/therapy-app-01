import { Brain, Users, Heart, Shield, CheckCircle, DollarSign, Clock, Phone } from 'lucide-react'

const Services = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div className="page-header">
            <h1>Therapy Services</h1>
            <p>Professional mental health support tailored to your unique needs</p>
          </div>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          {/* Main Services */}
          <div className="services-main">
            <div className="service-detail-card">
              <div className="service-header">
                <div className="service-icon large trauma">
                  <Brain size={40} />
                </div>
                <div>
                  <h2>Trauma & PTSD Therapy</h2>
                  <p>Specialized treatment for trauma recovery and healing</p>
                </div>
              </div>
              <div className="service-content">
                <p>
                  Trauma can profoundly impact how we see ourselves, others, and the world around us. 
                  I provide a safe, supportive environment where you can process difficult experiences 
                  and work toward healing at your own pace.
                </p>
                <h4>What I treat:</h4>
                <ul>
                  <li>Post-Traumatic Stress Disorder (PTSD)</li>
                  <li>Complex trauma and childhood trauma</li>
                  <li>Acute stress reactions</li>
                  <li>Secondary trauma (for caregivers, first responders)</li>
                </ul>
                <h4>Treatment approaches:</h4>
                <div className="approach-tags">
                  <span>EMDR</span>
                  <span>Trauma-Focused CBT</span>
                  <span>Somatic Therapy</span>
                  <span>Expressive Arts</span>
                </div>
              </div>
            </div>

            <div className="service-detail-card">
              <div className="service-header">
                <div className="service-icon large family">
                  <Users size={40} />
                </div>
                <div>
                  <h2>Family Therapy</h2>
                  <p>Strengthening family bonds and improving communication</p>
                </div>
              </div>
              <div className="service-content">
                <p>
                  Family relationships are complex and meaningful. I help families navigate challenges, 
                  improve communication, and build stronger connections through understanding and empathy.
                </p>
                <h4>Common family concerns:</h4>
                <ul>
                  <li>Communication problems</li>
                  <li>Conflict resolution</li>
                  <li>Parenting challenges</li>
                  <li>Blended family adjustment</li>
                  <li>Life transitions and changes</li>
                </ul>
                <h4>My approach:</h4>
                <div className="approach-tags">
                  <span>Family Systems</span>
                  <span>Emotionally Focused Therapy</span>
                  <span>Attachment-Based</span>
                  <span>Strength-Based</span>
                </div>
              </div>
            </div>

            <div className="service-detail-card">
              <div className="service-header">
                <div className="service-icon large individual">
                  <Heart size={40} />
                </div>
                <div>
                  <h2>Individual Therapy</h2>
                  <p>Personal growth and healing in a safe, supportive environment</p>
                </div>
              </div>
              <div className="service-content">
                <p>
                  Individual therapy provides a space for you to explore your thoughts, feelings, and 
                  experiences without judgment. Together, we'll work toward your goals for healing and growth.
                </p>
                <h4>Areas I can help with:</h4>
                <ul>
                  <li>Anxiety and depression</li>
                  <li>Self-esteem and identity issues</li>
                  <li>Life transitions and adjustment</li>
                  <li>Grief and loss</li>
                  <li>Relationship difficulties</li>
                  <li>Stress management</li>
                </ul>
                <h4>Therapeutic tools:</h4>
                <div className="approach-tags">
                  <span>Art Therapy</span>
                  <span>Sand Tray</span>
                  <span>Journaling</span>
                  <span>Mindfulness</span>
                  <span>IFS</span>
                </div>
              </div>
            </div>

            <div className="service-detail-card">
              <div className="service-header">
                <div className="service-icon large child">
                  <Shield size={40} />
                </div>
                <div>
                  <h2>Child & Teen Therapy</h2>
                  <p>Age-appropriate therapy for young people and adolescents</p>
                </div>
              </div>
              <div className="service-content">
                <p>
                  Children and teens face unique challenges as they grow and develop. I provide 
                  developmentally appropriate therapy that meets young people where they are.
                </p>
                <h4>Common concerns:</h4>
                <ul>
                  <li>Behavioral challenges</li>
                  <li>School-related stress</li>
                  <li>Social and peer issues</li>
                  <li>Emotional regulation</li>
                  <li>Family changes (divorce, moving)</li>
                  <li>Anxiety and mood issues</li>
                </ul>
                <h4>Child-friendly approaches:</h4>
                <div className="approach-tags">
                  <span>Play Therapy</span>
                  <span>Art & Creative Expression</span>
                  <span>Sand Tray Therapy</span>
                  <span>Storytelling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="services-sidebar">
            <div className="pricing-card">
              <h3>Session Information</h3>
              <div className="pricing-item">
                <DollarSign size={20} />
                <div>
                  <h4>$200 per session</h4>
                  <p>50-minute individual sessions</p>
                </div>
              </div>
              <div className="pricing-item">
                <Clock size={20} />
                <div>
                  <h4>Free 15-min consultation</h4>
                  <p>Get to know each other first</p>
                </div>
              </div>
              <div className="pricing-note">
                <p><strong>Sliding scale available</strong> - I believe everyone deserves access to quality mental health care.</p>
              </div>
            </div>

            <div className="insurance-card">
              <h3>Insurance Accepted</h3>
              <ul>
                <li><CheckCircle size={16} /> Aetna</li>
                <li><CheckCircle size={16} /> BlueCross BlueShield</li>
                <li><CheckCircle size={16} /> Health Alliance</li>
                <li><CheckCircle size={16} /> TriWest</li>
              </ul>
              <p className="insurance-note">
                Please contact your insurance provider to verify benefits and coverage details.
              </p>
            </div>

            <div className="approaches-card">
              <h3>Treatment Approaches</h3>
              <div className="approach-list">
                <span>Attachment-based</span>
                <span>Christian Counseling</span>
                <span>EMDR</span>
                <span>Emotionally Focused</span>
                <span>Experiential Therapy</span>
                <span>Family Systems</span>
                <span>Integrative</span>
                <span>Internal Family Systems (IFS)</span>
                <span>Relational</span>
                <span>Strength-Based</span>
                <span>Trauma Focused</span>
              </div>
            </div>

            <div className="contact-card">
              <h3>Ready to Get Started?</h3>
              <p>Schedule your free consultation to discuss how I can support your healing journey.</p>
              <a href="tel:(217) 834-1738" className="btn btn-primary full-width">
                <Phone size={20} />
                Call (217) 834-1738
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 