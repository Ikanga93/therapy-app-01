import { Phone, MapPin, Clock, Mail, Calendar, Shield, CheckCircle, ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div className="page-header">
            <h1>Get in Touch</h1>
            <p>Ready to take the first step toward healing? Let's connect.</p>
          </div>
        </div>
      </section>

      <section className="contact-detail">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-main">
              <div className="consultation-card highlight-card">
                <div className="card-header">
                  <Calendar size={32} />
                  <div>
                    <h2>Free 15-Minute Consultation</h2>
                    <p>Let's see if we're a good fit for each other</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>
                    Building a relationship with a therapist is important, and I want you to feel 
                    confident in your choice. I offer a complimentary 15-minute phone consultation 
                    where we can discuss your needs and questions.
                  </p>
                  <div className="consultation-benefits">
                    <div className="benefit">
                      <CheckCircle size={20} />
                      <span>No commitment required</span>
                    </div>
                    <div className="benefit">
                      <CheckCircle size={20} />
                      <span>Discuss your specific needs</span>
                    </div>
                    <div className="benefit">
                      <CheckCircle size={20} />
                      <span>Ask any questions you have</span>
                    </div>
                  </div>
                  <a href="tel:(217) 834-1738" className="btn btn-primary large">
                    <Phone size={24} />
                    Call (217) 834-1738
                  </a>
                </div>
              </div>

              <div className="contact-methods">
                <h3>Contact Information</h3>
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-details">
                    <h4>Phone</h4>
                    <a href="tel:(217) 834-1738" className="contact-link">
                      (217) 834-1738
                    </a>
                    <p>Call for appointments or questions</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-details">
                    <h4>Email</h4>
                    <a href="mailto:michelle@themendingspace.com" className="contact-link">
                      michelle@themendingspace.com
                    </a>
                    <p>Send a message anytime</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="method-details">
                    <h4>Office Location</h4>
                    <div className="address">
                      <strong>The Mending Space</strong><br />
                      701 Devonshire Drive<br />
                      Champaign, IL 61820
                    </div>
                    <p>In-person and telehealth sessions available</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Clock size={24} />
                  </div>
                  <div className="method-details">
                    <h4>Response Time</h4>
                    <p><strong>Usually within 24 hours</strong></p>
                    <p>I'll return your call as soon as possible</p>
                  </div>
                </div>
              </div>

              <div className="session-info-card">
                <h3>Session Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <h4>Session Length</h4>
                    <p>50 minutes for individual sessions</p>
                  </div>
                  <div className="info-item">
                    <h4>Session Fee</h4>
                    <p>$200 per session</p>
                  </div>
                  <div className="info-item">
                    <h4>Sliding Scale</h4>
                    <p>Available based on need</p>
                  </div>
                  <div className="info-item">
                    <h4>Payment</h4>
                    <p>Cash, check, or card accepted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar">
              <div className="office-hours-card">
                <h3>Office Hours</h3>
                <div className="hours-list">
                  <div className="day-hours">
                    <span className="day">Monday</span>
                    <span className="hours">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="day-hours">
                    <span className="day">Tuesday</span>
                    <span className="hours">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="day-hours">
                    <span className="day">Wednesday</span>
                    <span className="hours">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="day-hours">
                    <span className="day">Thursday</span>
                    <span className="hours">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="day-hours">
                    <span className="day">Friday</span>
                    <span className="hours">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="day-hours weekend">
                    <span className="day">Saturday</span>
                    <span className="hours">Limited availability</span>
                  </div>
                  <div className="day-hours weekend">
                    <span className="day">Sunday</span>
                    <span className="hours">Closed</span>
                  </div>
                </div>
                <p className="hours-note">
                  Evening and weekend appointments may be available upon request.
                </p>
              </div>

              <div className="insurance-info-card">
                <h3>Insurance Accepted</h3>
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
                    <span>Health Alliance</span>
                  </div>
                  <div className="insurance-item">
                    <CheckCircle size={16} />
                    <span>TriWest</span>
                  </div>
                </div>
                <p className="insurance-note">
                  Please verify your benefits with your insurance provider. I can provide 
                  receipts for out-of-network reimbursement.
                </p>
              </div>

              <div className="credentials-card">
                <h3>Professional Information</h3>
                <div className="credential-item">
                  <Shield size={20} />
                  <div>
                    <h4>Licensed Clinical Social Worker</h4>
                    <p>Illinois License #149.026321</p>
                  </div>
                </div>
                <div className="credential-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Master of Social Work</h4>
                    <p>Campbellsville University, 2021</p>
                  </div>
                </div>
                <div className="credential-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Psychology Today Verified</h4>
                    <p>4+ years in practice</p>
                  </div>
                </div>
              </div>

              <div className="emergency-card">
                <h3>Crisis Resources</h3>
                <p>If you're experiencing a mental health emergency, please:</p>
                <div className="emergency-actions">
                  <a href="tel:988" className="emergency-link">
                    Call 988 - Suicide & Crisis Lifeline
                  </a>
                  <a href="tel:911" className="emergency-link">
                    Call 911 for immediate emergency
                  </a>
                  <span className="emergency-option">
                    Go to your nearest emergency room
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I know if therapy is right for me?</h4>
              <p>
                Therapy can be helpful when you're feeling stuck, overwhelmed, or ready for change. 
                Our free consultation is a great way to explore whether therapy might be beneficial for you.
              </p>
            </div>
            <div className="faq-item">
              <h4>What should I expect in our first session?</h4>
              <p>
                We'll spend time getting to know each other and discussing what brought you to therapy. 
                I'll ask about your history and goals, and we'll begin to plan our work together.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer telehealth sessions?</h4>
              <p>
                Yes, I offer both in-person and secure telehealth sessions to accommodate your needs 
                and preferences.
              </p>
            </div>
            <div className="faq-item">
              <h4>How long does therapy typically last?</h4>
              <p>
                The length of therapy varies for each person and depends on your goals. Some people 
                benefit from short-term work, while others prefer longer-term therapy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 