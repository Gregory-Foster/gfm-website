import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiClock, FiCalendar } = FiIcons;

const LiveStream = () => {
  const upcomingStreams = [
    {
      title: 'Sunday Worship Service',
      date: '2024-01-21',
      time: '10:00 AM',
      description: 'Join us for our weekly worship service with inspiring music and biblical teaching.'
    },
    {
      title: 'Wednesday Bible Study',
      date: '2024-01-24',
      time: '7:00 PM',
      description: 'Midweek Bible study exploring the book of Romans.'
    },
    {
      title: 'Prayer Meeting',
      date: '2024-01-26',
      time: '6:30 PM',
      description: 'Come together in prayer for our community and church family.'
    }
  ];

  return (
    <div className="live-stream-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Watch Live</h1>
          <p className="page-subtitle body-font">
            Join our live worship services and events from anywhere
          </p>
        </div>

        <div className="live-player-section">
          <div className="video-container card">
            <div className="video-placeholder">
              <SafeIcon icon={FiPlay} className="play-icon" />
              <h3 className="heading-font">Live Stream</h3>
              <p className="body-font">
                YouTube or live stream will be embedded here
              </p>
              <div className="stream-status">
                <span className="status-indicator offline"></span>
                <span>Currently Offline</span>
              </div>
            </div>
          </div>
        </div>

        <div className="schedule-section">
          <h2 className="section-title heading-font">Upcoming Live Streams</h2>
          
          <div className="schedule-grid">
            {upcomingStreams.map((stream, index) => (
              <div key={index} className="schedule-card card">
                <div className="schedule-header">
                  <div className="schedule-icon">
                    <SafeIcon icon={FiCalendar} />
                  </div>
                  <div className="schedule-details">
                    <h3 className="schedule-title heading-font">{stream.title}</h3>
                    <div className="schedule-datetime">
                      <span className="schedule-date">
                        {new Date(stream.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="schedule-time">
                        <SafeIcon icon={FiClock} />
                        {stream.time}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="schedule-description body-font">{stream.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stream-info card">
          <h2 className="heading-font">Can't Watch Live?</h2>
          <p className="body-font">
            Don't worry! All our services are recorded and available to watch later. 
            Visit our <a href="/sermons" className="info-link">Sermons page</a> to catch up on 
            previous messages, or check out our <a href="/podcast" className="info-link">Podcast</a> 
            for audio versions of our teachings.
          </p>
        </div>
      </div>

      <style jsx>{`
        .live-stream-page {
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

        .live-player-section {
          margin-bottom: 60px;
        }

        .video-container {
          background: var(--gfm-gray-light);
          border: 2px dashed var(--gfm-light-blue);
        }

        .video-placeholder {
          text-align: center;
          padding: 80px 40px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .play-icon {
          font-size: 5rem;
          color: var(--gfm-light-blue);
          margin-bottom: 20px;
        }

        .video-placeholder h3 {
          font-size: 2rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .video-placeholder p {
          font-size: 1.2rem;
          color: var(--gfm-navy);
          margin-bottom: 25px;
        }

        .stream-status {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--gfm-navy);
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #dc3545;
        }

        .status-indicator.live {
          background-color: #28a745;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }

        .schedule-section {
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 2rem;
          color: var(--gfm-dark-blue);
          text-align: center;
          margin-bottom: 40px;
        }

        .schedule-grid {
          display: grid;
          gap: 25px;
        }

        .schedule-card {
          transition: transform 0.3s ease;
        }

        .schedule-card:hover {
          transform: translateY(-3px);
        }

        .schedule-header {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .schedule-icon {
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

        .schedule-details {
          flex: 1;
        }

        .schedule-title {
          font-size: 1.5rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 10px;
        }

        .schedule-datetime {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .schedule-date {
          color: var(--gfm-navy);
          font-weight: 600;
        }

        .schedule-time {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--gfm-light-blue);
          font-weight: 600;
        }

        .schedule-description {
          color: var(--gfm-navy);
          line-height: 1.6;
        }

        .stream-info {
          background: var(--gfm-gray-light);
          text-align: center;
        }

        .stream-info h2 {
          font-size: 1.8rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .stream-info p {
          font-size: 1.1rem;
          color: var(--gfm-navy);
          line-height: 1.7;
        }

        .info-link {
          color: var(--gfm-light-blue);
          text-decoration: none;
          font-weight: 600;
        }

        .info-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .video-placeholder {
            padding: 60px 20px;
            min-height: 300px;
          }

          .play-icon {
            font-size: 4rem;
          }

          .video-placeholder h3 {
            font-size: 1.7rem;
          }

          .schedule-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .page-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LiveStream;