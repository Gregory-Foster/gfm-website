import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageCircle, FiHelpCircle } = FiIcons;

const Chat = () => {
  return (
    <div className="chat-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Chat With Us</h1>
          <p className="page-subtitle body-font">
            Have questions? Need prayer? We're here to help and support you
          </p>
        </div>

        <div className="chat-container">
          <div className="chat-widget-placeholder card">
            <div className="chat-icon">
              <SafeIcon icon={FiMessageCircle} />
            </div>
            <h3 className="heading-font">AI Chatbot Widget</h3>
            <p className="body-font">
              The chatbot embed code will be placed here for real-time assistance
            </p>
            <div className="chat-features">
              <div className="feature">
                <SafeIcon icon={FiHelpCircle} />
                <span>Ask questions about our ministry</span>
              </div>
              <div className="feature">
                <SafeIcon icon={FiHelpCircle} />
                <span>Request prayer or spiritual guidance</span>
              </div>
              <div className="feature">
                <SafeIcon icon={FiHelpCircle} />
                <span>Get information about events</span>
              </div>
              <div className="feature">
                <SafeIcon icon={FiHelpCircle} />
                <span>Connect with our pastoral team</span>
              </div>
            </div>
          </div>

          <div className="chat-info">
            <div className="info-card card">
              <h3 className="heading-font">Available 24/7</h3>
              <p className="body-font">
                Our AI assistant is available around the clock to provide initial support 
                and guidance. For more personal matters, you'll be connected with our 
                pastoral team during office hours.
              </p>
            </div>

            <div className="info-card card">
              <h3 className="heading-font">Private & Secure</h3>
              <p className="body-font">
                Your conversations are private and secure. We respect your privacy 
                and maintain confidentiality in all our interactions.
              </p>
            </div>

            <div className="info-card card">
              <h3 className="heading-font">Need Immediate Help?</h3>
              <p className="body-font">
                If you're experiencing a crisis or emergency, please contact your 
                local emergency services or our emergency prayer line at (555) 123-4567.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chat-page {
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

        .chat-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .chat-widget-placeholder {
          background: var(--gfm-gray-light);
          border: 2px dashed var(--gfm-light-blue);
          text-align: center;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .chat-icon {
          font-size: 4rem;
          color: var(--gfm-light-blue);
          margin-bottom: 20px;
        }

        .chat-widget-placeholder h3 {
          font-size: 2rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .chat-widget-placeholder p {
          font-size: 1.2rem;
          color: var(--gfm-navy);
          margin-bottom: 30px;
        }

        .chat-features {
          display: grid;
          gap: 15px;
          max-width: 400px;
          margin: 0 auto;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
          color: var(--gfm-navy);
          font-weight: 500;
        }

        .feature svg {
          color: var(--gfm-light-blue);
          flex-shrink: 0;
        }

        .chat-info {
          display: grid;
          gap: 25px;
        }

        .info-card {
          background-color: var(--gfm-white);
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-3px);
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

        @media (max-width: 968px) {
          .chat-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .chat-widget-placeholder {
            min-height: 400px;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .chat-widget-placeholder {
            padding: 40px 20px;
          }

          .chat-icon {
            font-size: 3rem;
          }

          .chat-widget-placeholder h3 {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Chat;