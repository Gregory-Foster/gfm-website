import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiSend, FiLock } = FiIcons;

const PrayerRequests = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
    isAnonymous: false,
    isPrivate: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Prayer request submitted:', formData);
  };

  return (
    <div className="prayer-requests-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Prayer Requests</h1>
          <p className="page-subtitle body-font">
            We believe in the power of prayer and would be honored to pray for you
          </p>
        </div>

        <div className="prayer-content">
          <div className="prayer-form-section">
            <div className="form-container card">
              <div className="form-header">
                <SafeIcon icon={FiHeart} className="form-icon" />
                <h2 className="heading-font">Submit a Prayer Request</h2>
              </div>

              <form onSubmit={handleSubmit} className="prayer-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name (Optional)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email for updates"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="request" className="form-label">Prayer Request *</label>
                  <textarea
                    id="request"
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Please share your prayer request..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <div className="form-options">
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="isAnonymous"
                        checked={formData.isAnonymous}
                        onChange={handleChange}
                        className="checkbox-input"
                      />
                      <span className="checkbox-text">Submit anonymously</span>
                    </label>
                  </div>

                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="isPrivate"
                        checked={formData.isPrivate}
                        onChange={handleChange}
                        className="checkbox-input"
                      />
                      <span className="checkbox-text">Keep this request private (pastoral team only)</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  <SafeIcon icon={FiSend} />
                  Submit Prayer Request
                </button>
              </form>
            </div>
          </div>

          <div className="prayer-info-section">
            <div className="info-card card">
              <SafeIcon icon={FiLock} className="info-icon" />
              <h3 className="heading-font">Confidential & Secure</h3>
              <p className="body-font">
                All prayer requests are handled with complete confidentiality. 
                Our pastoral team reviews each request personally and prays over them regularly.
              </p>
            </div>

            <div className="info-card card">
              <h3 className="heading-font">How We Pray</h3>
              <ul className="prayer-list body-font">
                <li>Daily prayer sessions with our pastoral team</li>
                <li>Special prayer meetings for urgent requests</li>
                <li>Follow-up prayers and check-ins when appropriate</li>
                <li>Community prayer (only with permission)</li>
              </ul>
            </div>

            <div className="info-card card">
              <h3 className="heading-font">Emergency Prayer</h3>
              <p className="body-font">
                For urgent prayer needs or crisis situations, please call our 
                prayer line at <strong>(555) 123-4567</strong> or contact Pastor Foster 
                directly at <strong>pastor@gfm.org</strong>.
              </p>
            </div>

            <div className="scripture-card card">
              <blockquote className="scripture-quote scripture-font">
                "Therefore I tell you, whatever you ask for in prayer, believe that 
                you have received it, and it will be yours."
              </blockquote>
              <cite className="scripture-citation">Mark 11:24</cite>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .prayer-requests-page {
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

        .prayer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .form-container {
          background-color: var(--gfm-white);
        }

        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .form-icon {
          font-size: 3rem;
          color: var(--gfm-light-blue);
          margin-bottom: 15px;
        }

        .form-header h2 {
          font-size: 1.8rem;
          color: var(--gfm-dark-blue);
        }

        .prayer-form {
          display: grid;
          gap: 25px;
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

        .form-options {
          display: grid;
          gap: 15px;
          padding: 20px;
          background-color: var(--gfm-gray-light);
          border-radius: 8px;
        }

        .checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
        }

        .checkbox-input {
          margin-top: 2px;
          width: 18px;
          height: 18px;
          accent-color: var(--gfm-light-blue);
        }

        .checkbox-text {
          color: var(--gfm-navy);
          font-weight: 500;
          line-height: 1.4;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 1.1rem;
          padding: 15px 30px;
        }

        .prayer-info-section {
          display: grid;
          gap: 25px;
          align-content: start;
        }

        .info-card {
          background-color: var(--gfm-white);
        }

        .info-icon {
          font-size: 2.5rem;
          color: var(--gfm-light-blue);
          margin-bottom: 15px;
        }

        .info-card h3 {
          font-size: 1.4rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 12px;
        }

        .info-card p {
          color: var(--gfm-navy);
          line-height: 1.6;
        }

        .prayer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          color: var(--gfm-navy);
        }

        .prayer-list li {
          padding: 8px 0;
          padding-left: 20px;
          position: relative;
        }

        .prayer-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--gfm-light-blue);
          font-weight: bold;
        }

        .scripture-card {
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          color: var(--gfm-white);
          text-align: center;
        }

        .scripture-quote {
          font-size: 1.2rem;
          font-style: italic;
          line-height: 1.6;
          margin: 0 0 15px 0;
        }

        .scripture-citation {
          font-weight: 600;
          font-size: 1rem;
        }

        @media (max-width: 968px) {
          .prayer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .form-header h2 {
            font-size: 1.6rem;
          }

          .checkbox-label {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default PrayerRequests;