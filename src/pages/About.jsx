import { CheckCircle, Heart, Award, Users, Calendar } from 'lucide-react'
import michellePhoto from '../assets/Michelle-hooks.jpeg'

const About = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div className="page-header">
            <h1>About Michelle Hooks, LCSW</h1>
            <p>Compassionate care with professional excellence</p>
          </div>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="about-grid">
            <div className="about-main">
              <div className="profile-section">
                <div className="profile-image-large">
                  <img 
                    src={michellePhoto}
                    alt="Michelle Hooks, LCSW"
                  />
                  <div className="credentials-badge">
                    <Award size={16} />
                    <span>LCSW</span>
                  </div>
                </div>
                
                <div className="profile-details">
                  <h2>Michelle Hooks</h2>
                  <p className="title">Licensed Clinical Social Worker</p>
                  <div className="quick-facts">
                    <div className="fact">
                      <Calendar size={16} />
                      <span>4+ Years in Practice</span>
                    </div>
                    <div className="fact">
                      <Award size={16} />
                      <span>Illinois License #149.026321</span>
                    </div>
                    <div className="fact">
                      <Users size={16} />
                      <span>All Ages Welcome</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="story-section">
                <h3>My Story</h3>
                <p>
                  My clients are ready for something to be different in their lives. They are looking for a space 
                  where they can just be, let it all out and find the next step. I am passionate about offering a 
                  space where you can pause and attend to your needs.
                </p>
                <p>
                  As I continue my own healing, I'm committed to fully offering my presence, guidance 
                  and a trustworthy connection. I value sensitivity, humor and playfulness. I also use expressive 
                  tools, including sand, art, miniatures and writing to help facilitate healing and growth.
                </p>
              </div>

              <div className="approach-section">
                <h3>My Therapeutic Approach</h3>
                <p>
                  I strive to guide children, families, and individuals toward healing through an 
                  attachment-oriented perspective, prioritizing connections, presence and a sense of security.
                </p>
                
                <div className="approach-grid">
                  <div className="approach-card">
                    <Heart size={24} />
                    <h4>Attachment-Based</h4>
                    <p>Focusing on building secure connections and relationships</p>
                  </div>
                  <div className="approach-card">
                    <Users size={24} />
                    <h4>Family Systems</h4>
                    <p>Understanding family dynamics and improving communication</p>
                  </div>
                  <div className="approach-card">
                    <CheckCircle size={24} />
                    <h4>Expressive Therapy</h4>
                    <p>Using creative tools like art, sand, and writing for healing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-sidebar">
              <div className="education-card">
                <h3>Education & Training</h3>
                <div className="education-item">
                  <div className="year">2021</div>
                  <div className="details">
                    <h4>Master of Social Work (MSW)</h4>
                    <p>Campbellsville University</p>
                  </div>
                </div>
              </div>

              <div className="credentials-card">
                <h3>Professional Credentials</h3>
                <ul>
                  <li>
                    <CheckCircle size={16} />
                    Licensed Clinical Social Worker (LCSW)
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    Illinois State License #149.026321
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    Psychology Today Verified Provider
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    EMDR Trained
                  </li>
                </ul>
              </div>

              <div className="specialties-card">
                <h3>Areas of Expertise</h3>
                <div className="specialty-tags">
                  <span>Trauma & PTSD</span>
                  <span>Family Therapy</span>
                  <span>Child & Adolescent</span>
                  <span>Anxiety & Depression</span>
                  <span>Attachment Issues</span>
                  <span>Life Transitions</span>
                  <span>Grief & Loss</span>
                  <span>Parenting Support</span>
                </div>
              </div>

              <div className="contact-card">
                <h3>Ready to Connect?</h3>
                <p>I offer a free 15-minute consultation to discuss your needs and see if we're a good fit.</p>
                <a href="tel:(217) 834-1738" className="btn btn-primary full-width">
                  Call (217) 834-1738
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 