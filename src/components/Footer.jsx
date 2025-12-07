import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFacebook, FiInstagram, FiYoutube, FiMail, FiPhone, FiRadio } = FiIcons;

const Footer = ({ variant = 'normal', scriptureText = "Devote yourselves to prayer, being watchful and thankful.", scriptureRef = "Colossians 4:2" }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
    { icon: FiMail, href: '#', label: 'Email' },
    { icon: FiPhone, href: '#', label: 'Phone' },
    { icon: FiRadio, href: '#', label: 'Live Stream' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {variant === 'scripture' && (
          <div className="scripture-section">
            <p className="scripture-text scripture-font">
              "{scriptureText}" ({scriptureRef})
            </p>
          </div>
        )}
        
        <div className="footer-content">
          <div className="footer-left">
            <p className="copyright">
              Copyright © {currentYear} Gregory Foster Ministries
            </p>
          </div>
          
          <div className="footer-right">
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="social-icon"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SafeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #000000;
          color: var(--gfm-white);
          padding: 20px 0;
          margin-top: auto;
        }

        .scripture-section {
          text-align: center;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 15px;
        }

        .scripture-text {
          font-size: 1.1rem;
          font-style: italic;
          color: var(--gfm-white);
          margin: 0;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-left {
          flex: 1;
        }

        .copyright {
          margin: 0;
          font-size: 0.9rem;
          color: var(--gfm-white);
        }

        .footer-right {
          flex-shrink: 0;
        }

        .social-icons {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #000000;
          border: 2px solid var(--gfm-white);
          border-radius: 4px;
          color: var(--gfm-white);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .social-icon:hover {
          background-color: var(--gfm-white);
          color: #000000;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .social-icons {
            gap: 8px;
          }

          .social-icon {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .scripture-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .social-icons {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;