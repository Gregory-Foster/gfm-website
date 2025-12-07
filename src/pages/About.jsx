import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiTarget, FiBook } = FiIcons;

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">About Gregory Foster Ministries</h1>
          <p className="page-subtitle body-font">
            Sharing God's love and building community since our founding
          </p>
        </div>

        <div className="about-content">
          <div className="pastor-section card">
            <div className="pastor-info">
              <div className="pastor-image">
                <div className="image-placeholder">
                  <SafeIcon icon={FiUsers} className="pastor-icon" />
                </div>
              </div>
              <div className="pastor-details">
                <h2 className="heading-font">Pastor Gregory Foster</h2>
                <p className="body-font">
                  Pastor Gregory Foster has been faithfully serving in ministry for over 15 years, 
                  dedicated to spreading the Gospel and building strong Christian communities. 
                  His passion for teaching God's Word and caring for people has touched countless 
                  lives throughout his ministry.
                </p>
                <p className="body-font">
                  With a heart for evangelism and discipleship, Pastor Foster believes in the 
                  transformative power of God's love and the importance of authentic Christian 
                  fellowship. He is committed to helping others discover their purpose in Christ 
                  and grow in their faith journey.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-vision-section">
            <div className="mission-card card">
              <div className="card-icon">
                <SafeIcon icon={FiTarget} />
              </div>
              <h3 className="heading-font">Our Mission</h3>
              <p className="body-font">
                To share the love of Jesus Christ through authentic worship, biblical teaching, 
                and compassionate service, empowering believers to live out their faith and 
                make a positive impact in their communities.
              </p>
            </div>

            <div className="vision-card card">
              <div className="card-icon">
                <SafeIcon icon={FiHeart} />
              </div>
              <h3 className="heading-font">Our Vision</h3>
              <p className="body-font">
                To be a thriving community of believers who are transformed by God's grace, 
                united in love, and committed to advancing God's kingdom through evangelism, 
                discipleship, and service to others.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title heading-font">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card card">
                <SafeIcon icon={FiBook} className="value-icon" />
                <h4 className="heading-font">Biblical Truth</h4>
                <p className="body-font">
                  We believe in the authority and accuracy of God's Word as our foundation 
                  for faith and life.
                </p>
              </div>

              <div className="value-card card">
                <SafeIcon icon={FiHeart} className="value-icon" />
                <h4 className="heading-font">Authentic Love</h4>
                <p className="body-font">
                  We strive to love God wholeheartedly and love others as Christ loves us.
                </p>
              </div>

              <div className="value-card card">
                <SafeIcon icon={FiUsers} className="value-icon" />
                <h4 className="heading-font">Community</h4>
                <p className="body-font">
                  We believe in the power of Christian fellowship and supporting one another 
                  in faith.
                </p>
              </div>

              <div className="value-card card">
                <SafeIcon icon={FiTarget} className="value-icon" />
                <h4 className="heading-font">Purpose-Driven</h4>
                <p className="body-font">
                  We are committed to fulfilling the Great Commission and making disciples 
                  of all nations.
                </p>
              </div>
            </div>
          </div>

          <div className="history-section card">
            <h2 className="heading-font">Our Story</h2>
            <div className="history-content">
              <p className="body-font">
                Gregory Foster Ministries began as a small group of believers with a big vision 
                to impact their community for Christ. What started as home Bible studies and 
                prayer meetings has grown into a thriving ministry that reaches people both 
                locally and around the world.
              </p>
              <p className="body-font">
                Through the years, we have remained committed to our core mission of sharing 
                God's love through authentic relationships, biblical teaching, and compassionate 
                service. Our ministry has expanded to include various outreach programs, 
                worship services, educational initiatives, and community support services.
              </p>
              <p className="body-font">
                Today, Gregory Foster Ministries continues to grow and evolve, but our heart 
                remains the same: to see lives transformed by the Gospel of Jesus Christ and 
                to build a community where everyone can experience God's love, grace, and purpose.
              </p>
            </div>
          </div>

          <div className="contact-cta card">
            <h2 className="heading-font">Join Our Community</h2>
            <p className="body-font">
              We would love to welcome you into our church family. Whether you're new to faith 
              or have been walking with God for years, there's a place for you here.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/calendar" className="btn-outline visit-btn">Plan Your Visit</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-page {
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

        .about-content {
          display: grid;
          gap: 50px;
        }

        .pastor-section {
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          color: var(--gfm-white);
        }

        .pastor-info {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 30px;
          align-items: center;
        }

        .pastor-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--gfm-white);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pastor-icon {
          font-size: 3rem;
          color: var(--gfm-white);
        }

        .pastor-details h2 {
          font-size: 2.2rem;
          margin-bottom: 20px;
        }

        .pastor-details p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .mission-vision-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .mission-card,
        .vision-card {
          text-align: center;
        }

        .card-icon {
          width: 80px;
          height: 80px;
          background-color: var(--gfm-light-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gfm-white);
          font-size: 2rem;
          margin: 0 auto 20px;
        }

        .mission-card h3,
        .vision-card h3 {
          font-size: 1.8rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .mission-card p,
        .vision-card p {
          color: var(--gfm-navy);
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .values-section {
          text-align: center;
        }

        .section-title {
          font-size: 2.2rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 40px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .value-card {
          text-align: center;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          font-size: 2.5rem;
          color: var(--gfm-light-blue);
          margin-bottom: 15px;
        }

        .value-card h4 {
          font-size: 1.3rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 12px;
        }

        .value-card p {
          color: var(--gfm-navy);
          line-height: 1.6;
        }

        .history-section {
          background-color: var(--gfm-gray-light);
        }

        .history-section h2 {
          font-size: 2rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 25px;
          text-align: center;
        }

        .history-content p {
          font-size: 1.1rem;
          color: var(--gfm-navy);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .contact-cta {
          background: linear-gradient(135deg, var(--gfm-navy), var(--gfm-dark-blue));
          color: var(--gfm-white);
          text-align: center;
        }

        .contact-cta h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .contact-cta p {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .visit-btn {
          border-color: var(--gfm-white);
          color: var(--gfm-white);
        }

        .visit-btn:hover {
          background-color: var(--gfm-white);
          color: var(--gfm-dark-blue);
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .pastor-info {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 20px;
          }

          .pastor-image {
            width: 120px;
            height: 120px;
            margin: 0 auto;
          }

          .pastor-details h2 {
            font-size: 1.8rem;
          }

          .mission-vision-section {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default About;