import React from "react";
import SafeIcon from "../common/SafeIcon";

const SectionCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  children,
  leaderPhoto,
  leaderName,
  leaderTitle,
}) => {
  return (
    <div className="section-card card">
      {/* Leader block (optional) */}
      {(leaderPhoto || leaderName || leaderTitle) && (
        <div className="leader-section">
          {leaderPhoto && (
           <img
  src={leaderPhoto}
  alt={leaderName}
  className="card-image"
/>

          )}
          {leaderName && <p className="leader-name">{leaderName}</p>}
          {leaderTitle && <p className="leader-title">{leaderTitle}</p>}
        </div>
      )}

      {/* Original card header */}
      <div className="card-header">
        {icon && (
          <div className="card-icon">
            <SafeIcon icon={icon} />
          </div>
        )}
        <h3 className="card-title heading-font">{title}</h3>
      </div>

      {/* Original card content */}
      <div className="card-content">
        {description && (
          <p className="card-description body-font">{description}</p>
        )}
        {children}
      </div>

      {/* Original button footer */}
      {buttonText && buttonLink && (
        <div className="card-footer">
          <a href={buttonLink} className="btn-primary">
            {buttonText}
          </a>
        </div>
      )}
    </div>
  );
};

export default SectionCard;
