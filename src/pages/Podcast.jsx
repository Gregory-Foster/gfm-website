import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiHeadphones } = FiIcons;

const Podcast = () => {
  const episodes = [
    {
      title: 'Walking in Faith',
      description: 'Exploring what it means to live a life of faith in today\'s world',
      duration: '32:15',
      date: '2024-01-15'
    },
    {
      title: 'The Power of Prayer',
      description: 'Understanding the transformative power of prayer in our daily lives',
      duration: '28:45',
      date: '2024-01-08'
    },
    {
      title: 'Building Community',
      description: 'How to foster meaningful relationships within the church community',
      duration: '35:22',
      date: '2024-01-01'
    }
  ];

  return (
    <div className="podcast-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Podcast</h1>
          <p className="page-subtitle body-font">Listen to inspiring messages and biblical teachings</p>
        </div>

        <div className="featured-player">
          <div className="player-container card">
            <div className="player-icon">
              <SafeIcon icon={FiHeadphones} />
            </div>
            <div className="player-info">
              <h3 className="heading-font">Latest Episode</h3>
              <p className="body-font">Audio player will be embedded here</p>
            </div>
            <button className="play-btn">
              <SafeIcon icon={FiPlay} />
            </button>
          </div>
        </div>

        <div className="episodes-section">
          <h2 className="section-title heading-font">Recent Episodes</h2>
          <div className="episodes-grid">
            {episodes.map((episode, index) => (
              <div key={index} className="episode-card card">
                <div className="episode-content">
                  <h3 className="episode-title heading-font">{episode.title}</h3>
                  <p className="episode-description body-font">{episode.description}</p>
                  <div className="episode-meta">
                    <span className="episode-duration">{episode.duration}</span>
                    <span className="episode-date">{new Date(episode.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="episode-play-btn btn-primary">
                  <SafeIcon icon={FiPlay} />
                  Listen
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .podcast-page {
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
        }

        .featured-player {
          margin-bottom: 60px;
        }

        .player-container {
          display: flex;
          align-items: center;
          gap: 25px;
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          color: var(--gfm-white);
          min-height: 120px;
        }

        .player-icon {
          font-size: 3rem;
          opacity: 0.8;
        }

        .player-info {
          flex: 1;
        }

        .player-info h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .play-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--gfm-white);
          color: var(--gfm-dark-blue);
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .play-btn:hover {
          transform: scale(1.1);
        }

        .episodes-section {
          margin-top: 40px;
        }

        .section-title {
          font-size: 2rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 30px;
          text-align: center;
        }

        .episodes-grid {
          display: grid;
          gap: 25px;
        }

        .episode-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }

        .episode-content {
          flex: 1;
        }

        .episode-title {
          font-size: 1.3rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 10px;
        }

        .episode-description {
          color: var(--gfm-navy);
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .episode-meta {
          display: flex;
          gap: 20px;
          font-size: 0.9rem;
          color: var(--gfm-light-blue);
          font-weight: 600;
        }

        .episode-play-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .episode-card {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .player-container {
            flex-direction: column;
            text-align: center;
            padding: 40px 30px;
          }

          .page-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Podcast;