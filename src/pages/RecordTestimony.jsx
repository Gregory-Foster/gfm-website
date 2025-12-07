import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMic, FiVideo, FiHeart } = FiIcons;

const RecordTestimony = () => {
  return (
    <div className="record-testimony-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Record Your Testimony</h1>
          <p className="page-subtitle body-font">
            Share your story of faith and inspire others in our community
          </p>
        </div>

        <div className="testimony-content">
          <div className="intro-section card">
            <div className="intro-icon">
              <SafeIcon icon={FiHeart} />
            </div>
            <h2 className="heading-font">Share Your Story</h2>
            <p className="body-font">
              Your testimony is powerful! Whether it's how you came to faith, a prayer that was answered, 
              or how God has worked in your life, we want to hear from you. Your story could be the 
              encouragement someone else needs to hear today.
            </p>
            <ul className="testimony-tips body-font">
              <li>Keep it personal and authentic</li>
              <li>Share specific moments or experiences</li>
              <li>Focus on how God has impacted your life</li>
              <li>Be encouraged - there's no wrong way to share</li>
            </ul>
          </div>

          <div className="recording-section">
            <div className="recording-options">
              <div className="option-card card">
                <SafeIcon icon={FiMic} className="option-icon" />
                <h3 className="heading-font">Audio Recording</h3>
                <p className="body-font">Record your voice sharing your testimony</p>
              </div>
              
              <div className="option-card card">
                <SafeIcon icon={FiVideo} className="option-icon" />
                <h3 className="heading-font">Video Recording</h3>
                <p className="body-font">Share your testimony with video</p>
              </div>
            </div>

            <div className="recorder-container card">
              <div className="recorder-placeholder">
                <SafeIcon icon={FiMic} className="recorder-icon" />
                <h3 className="heading-font">AI Recording Widget</h3>
                <p className="body-font">
                  The AI audio/video recorder will be embedded here
                </p>
                <button className="btn-primary recorder-btn">
                  Start Recording My Testimony
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .record-testimony-page {
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

        .testimony-content {
          display: grid;
          gap: 40px;
        }

        .intro-section {
          text-align: center;
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          color: var(--gfm-white);
        }

        .intro-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          opacity: 0.9;
        }

        .intro-section h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .intro-section p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .testimony-tips {
          text-align: left;
          max-width: 400px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }

        .testimony-tips li {
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
        }

        .testimony-tips li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--gfm-white);
          font-weight: bold;
        }

        .recording-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .option-card {
          text-align: center;
          transition: transform 0.3s ease;
        }

        .option-card:hover {
          transform: translateY(-5px);
        }

        .option-icon {
          font-size: 3rem;
          color: var(--gfm-light-blue);
          margin-bottom: 15px;
        }

        .option-card h3 {
          font-size: 1.5rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 10px;
        }

        .recorder-container {
          background: var(--gfm-gray-light);
          border: 2px dashed var(--gfm-light-blue);
        }

        .recorder-placeholder {
          text-align: center;
          padding: 60px 40px;
        }

        .recorder-icon {
          font-size: 4rem;
          color: var(--gfm-light-blue);
          margin-bottom: 20px;
        }

        .recorder-placeholder h3 {
          font-size: 1.8rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .recorder-placeholder p {
          font-size: 1.1rem;
          color: var(--gfm-navy);
          margin-bottom: 30px;
        }

        .recorder-btn {
          font-size: 1.2rem;
          padding: 15px 40px;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .intro-section h2 {
            font-size: 1.7rem;
          }

          .recorder-placeholder {
            padding: 40px 20px;
          }

          .testimony-tips {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default RecordTestimony;