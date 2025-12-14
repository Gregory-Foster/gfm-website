import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiClock, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">We're Here for You</h1>
          <p className="page-subtitle body-font">
           Whether you need prayer, guidance, or urgent pastoral care, help is available.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <div className="form-container card">
              <h2 className="form-title heading-font">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Please share your message..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  <SafeIcon icon={FiSend} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-section">
            <div className="info-card card">
              <h3 className="info-title heading-font">Get In Touch</h3>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <SafeIcon icon={FiPhone} />
                  </div>
                  <div className="method-details">
                    <h4>Phone</h4>
                    <p>(555) 123-4567</p>
                    <span>Call us during office hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <SafeIcon icon={FiMail} />
                  </div>
                  <div className="method-details">
                    <h4>Email</h4>
                    <p>info@gregoryforsterministries.org</p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <SafeIcon icon={FiMapPin} />
                  </div>
                  <div className="method-details">
                    <h4>Address</h4>
                    <p>123 Faith Avenue<br />Hope City, HC 12345</p>
                    <span>Visit us anytime</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hours-card card">
              <h3 className="info-title heading-font">
                <SafeIcon icon={FiClock} />
                Office Hours
              </h3>
              
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Monday - Thursday</span>
                  <span className="time">9:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Friday</span>
                  <span className="time">9:00 AM - 3:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">By Appointment</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Worship Services Only</span>
                </div>
              </div>
            </div>

            <div className="emergency-card card">
              <h3 className="info-title heading-font">Emergency Pastoral Care</h3>
              <p className="body-font">
                For urgent spiritual or emotional needs.
                available anytime., please call our 
                emergency line at <strong>(555) 999-PRAY</strong> available 24/7.
              </p>
               <p className="body-font">
                Available anytime.<strong>(555) 999-PRAY</strong> available 24/7.
              </p>
            </div>

            <div className="social-card card">
              <h3 className="info-title heading-font">Follow Us</h3>
              <p className="body-font">
                Stay connected with our community through social media for updates, 
                encouragement, and ministry highlights.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding: 60px 0;
          min-height: 80vh;
        }

        .page-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .page-title {
          font-size: 2.5rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: var(--gfm-navy);
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .form-container {
          background-color: var(--gfm-white);
        }

        .form-title {
          font-size: 1.8rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 30px;
          text-align: center;
        }

        .contact-form {
          display: grid;
          gap: 25px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: grid;
          gap: 8px;
        }

        .form-label {
          font-weight: 600;
          color: var(--gfm-dark-blue);
          font-size: 1rem;
        }

        .form-input,
        .form-textarea {
          padding: 12px 15px;
          border: 2px solid var(--gfm-gray-light);
          border-radius: 8px;
          font-size: 1rem;
          font-family: 'Lato', sans-serif;
          transition: border-color 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--gfm-light-blue);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 1.1rem;
          padding: 15px 30px;
          margin-top: 10px;
        }

        .contact-info-section {
          display: grid;
          gap: 25px;
          align-content: start;
        }

        .info-card {
          background-color: var(--gfm-white);
        }

        .info-title {
          font-size: 1.4rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contact-methods {
          display: grid;
          gap: 25px;
        }

        .contact-method {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .method-icon {
          width: 50px;
          height: 50px;
          background-color: var(--gfm-light-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gfm-white);
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .method-details h4 {
          font-size: 1.2rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 5px;
        }

        .method-details p {
          color: var(--gfm-navy);
          font-weight: 600;
          margin-bottom: 3px;
        }

        .method-details span {
          color: var(--gfm-navy);
          font-size: 0.9rem;
        }

        .hours-card {
          background-color: var(--gfm-gray-light);
        }

        .hours-list {
          display: grid;
          gap: 12px;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(10, 47, 90, 0.1);
        }

        .hours-item:last-child {
          border-bottom: none;
        }

        .day {
          font-weight: 600;
          color: var(--gfm-dark-blue);
        }

        .time {
          color: var(--gfm-navy);
        }

        .emergency-card {
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          color: var(--gfm-white);
        }

        .emergency-card .info-title {
          color: var(--gfm-white);
        }

        .emergency-card p {
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }

        .social-link {
          color: var(--gfm-light-blue);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: var(--gfm-navy);
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .hours-item {
            flex-direction: column;
            text-align: center;
            gap: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;