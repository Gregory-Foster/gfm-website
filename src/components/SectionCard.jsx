import React from 'react';
import SafeIcon from '../common/SafeIcon';

const SectionCard = ({ icon, title, description, buttonText, buttonLink, children }) => {
  return (
    <div className="section-card card">
      <div className="card-header">
        {icon && (
          <div className="card-icon">
            <SafeIcon icon={icon} />
          </div>
        )}
        <h3 className="card-title heading-font">{title}</h3>
      </div>
      
      <div className="card-content">
        {description && (
          <p className="card-description body-font">{description}</p>
        )}
        {children}
      </div>
      
      {buttonText && buttonLink && (
        <div className="card-footer">
          <a href={buttonLink} className="btn-primary">
            {buttonText}
          </a>
        </div>
      )}

      <style jsx>{`
        .section-card {
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .section-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .card-icon {
          width: 50px;
          height: 50px;
          background-color: var(--gfm-light-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gfm-white);
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--gfm-dark-blue);
          margin: 0;
        }

        .card-content {
          margin-bottom: 25px;
        }

        .card-description {
          color: var(--gfm-navy);
          line-height: 1.6;
          margin: 0;
        }

        .card-footer {
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .card-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionCard;