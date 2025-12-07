import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiDownload, FiBookmark } = FiIcons;

const Sermons = () => {
  const sermons = [
    {
      title: 'Walking by Faith, Not by Sight',
      speaker: 'Pastor Gregory Foster',
      date: '2024-01-14',
      series: 'Faith in Action',
      scripture: '2 Corinthians 5:7',
      description: 'Learning to trust God even when we cannot see the path ahead.',
      duration: '38:45'
    },
    {
      title: 'The Power of Prayer',
      speaker: 'Pastor Gregory Foster',
      date: '2024-01-07',
      series: 'Spiritual Disciplines',
      scripture: 'Matthew 6:5-15',
      description: 'Understanding how prayer transforms both us and our circumstances.',
      duration: '42:20'
    },
    {
      title: 'Love One Another',
      speaker: 'Pastor Gregory Foster',
      date: '2023-12-31',
      series: 'New Year, New Heart',
      scripture: 'John 13:34-35',
      description: 'How Christ\'s love compels us to love others unconditionally.',
      duration: '35:12'
    }
  ];

  const series = [
    'Faith in Action',
    'Spiritual Disciplines',
    'New Year, New Heart',
    'Psalms of Praise',
    'Gospel of John'
  ];

  return (
    <div className="sermons-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Sermons</h1>
          <p className="page-subtitle body-font">
            Listen to inspiring biblical teachings and grow in your faith journey
          </p>
        </div>

        <div className="sermons-content">
          <div className="sermons-main">
            <div className="sermons-list">
              {sermons.map((sermon, index) => (
                <div key={index} className="sermon-card card">
                  <div className="sermon-header">
                    <div className="sermon-info">
                      <h3 className="sermon-title heading-font">{sermon.title}</h3>
                      <p className="sermon-speaker">{sermon.speaker}</p>
                      <div className="sermon-meta">
                        <span className="sermon-date">
                          {new Date(sermon.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="sermon-duration">{sermon.duration}</span>
                      </div>
                    </div>
                    <div className="sermon-actions">
                      <button className="action-btn play-btn">
                        <SafeIcon icon={FiPlay} />
                      </button>
                      <button className="action-btn">
                        <SafeIcon icon={FiDownload} />
                      </button>
                      <button className="action-btn">
                        <SafeIcon icon={FiBookmark} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="sermon-details">
                    <div className="sermon-series">
                      <span className="series-label">Series:</span>
                      <span className="series-name">{sermon.series}</span>
                    </div>
                    <div className="sermon-scripture scripture-font">
                      <span className="scripture-label">Scripture:</span>
                      <span className="scripture-text">{sermon.scripture}</span>
                    </div>
                    <p className="sermon-description body-font">{sermon.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sermons-sidebar">
            <div className="sidebar-card card">
              <h3 className="sidebar-title heading-font">Sermon Series</h3>
              <ul className="series-list">
                {series.map((seriesName, index) => (
                  <li key={index} className="series-item">
                    <a href={`#${seriesName.toLowerCase().replace(/\s+/g, '-')}`} className="series-link">
                      {seriesName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card card">
              <h3 className="sidebar-title heading-font">Recent Messages</h3>
              <p className="body-font">
                New sermons are uploaded every Sunday evening. Subscribe to our 
                <a href="/podcast" className="podcast-link"> podcast</a> to never miss a message.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sermons-page {
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

        .sermons-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .sermons-list {
          display: grid;
          gap: 30px;
        }

        .sermon-card {
          transition: transform 0.3s ease;
        }

        .sermon-card:hover {
          transform: translateY(-3px);
        }

        .sermon-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .sermon-info {
          flex: 1;
        }

        .sermon-title {
          font-size: 1.6rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 8px;
        }

        .sermon-speaker {
          color: var(--gfm-light-blue);
          font-weight: 600;
          margin-bottom: 10px;
        }

        .sermon-meta {
          display: flex;
          gap: 20px;
          font-size: 0.9rem;
          color: var(--gfm-navy);
        }

        .sermon-actions {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--gfm-light-blue);
          background-color: var(--gfm-white);
          color: var(--gfm-light-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background-color: var(--gfm-light-blue);
          color: var(--gfm-white);
        }

        .play-btn {
          background-color: var(--gfm-light-blue);
          color: var(--gfm-white);
        }

        .play-btn:hover {
          background-color: var(--gfm-navy);
        }

        .sermon-details {
          border-top: 1px solid var(--gfm-gray-light);
          padding-top: 20px;
        }

        .sermon-series,
        .sermon-scripture {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }

        .series-label,
        .scripture-label {
          font-weight: 600;
          color: var(--gfm-navy);
          min-width: 70px;
        }

        .series-name {
          color: var(--gfm-light-blue);
          font-weight: 600;
        }

        .scripture-text {
          color: var(--gfm-dark-blue);
          font-style: italic;
        }

        .sermon-description {
          color: var(--gfm-navy);
          line-height: 1.6;
          margin-top: 15px;
        }

        .sermons-sidebar {
          display: grid;
          gap: 25px;
          align-content: start;
        }

        .sidebar-card {
          background-color: var(--gfm-gray-light);
        }

        .sidebar-title {
          font-size: 1.4rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 20px;
        }

        .series-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .series-item {
          margin-bottom: 12px;
        }

        .series-link {
          color: var(--gfm-navy);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .series-link:hover {
          color: var(--gfm-light-blue);
        }

        .podcast-link {
          color: var(--gfm-light-blue);
          text-decoration: none;
          font-weight: 600;
        }

        .podcast-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 968px) {
          .sermons-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .sermon-header {
            flex-direction: column;
            gap: 20px;
          }

          .sermon-actions {
            align-self: stretch;
            justify-content: center;
          }

          .sermon-meta {
            flex-direction: column;
            gap: 5px;
          }

          .page-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Sermons;