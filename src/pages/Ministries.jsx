import React from 'react';
import SectionCard from '../components/SectionCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiHeart, FiMusic, FiBookOpen, FiSun, FiHome } = FiIcons;

const Ministries = () => {
  const ministries = [
    {
      icon: FiUsers,
      title: 'Youth Ministry',
      description: 'Engaging programs for teens and young adults to grow in faith and fellowship.',
      buttonText: 'Learn More',
      buttonLink: '#youth'
    },
    {
      icon: FiHeart,
      title: 'Community Outreach',
      description: 'Serving our local community through food banks, shelter support, and assistance programs.',
      buttonText: 'Get Involved',
      buttonLink: '#outreach'
    },
    {
      icon: FiMusic,
      title: 'Worship Team',
      description: 'Join our music ministry and help lead the congregation in praise and worship.',
      buttonText: 'Join Us',
      buttonLink: '#worship'
    },
    {
      icon: FiBookOpen,
      title: 'Bible Study Groups',
      description: 'Small group Bible studies for deeper understanding and spiritual growth.',
      buttonText: 'Find a Group',
      buttonLink: '#bible-study'
    },
    {
      icon: FiSun,
      title: 'Children\'s Ministry',
      description: 'Fun and engaging programs to help children learn about God\'s love.',
      buttonText: 'Learn More',
      buttonLink: '#children'
    },
    {
      icon: FiHome,
      title: 'Family Ministry',
      description: 'Strengthening families through biblical principles and community support.',
      buttonText: 'Explore',
      buttonLink: '#family'
    }
  ];

  return (
    <div className="ministries-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Ministries</h1>
          <p className="page-subtitle body-font">
            Discover ways to serve, grow, and connect in our church community
          </p>
        </div>

        <div className="ministries-grid">
          {ministries.map((ministry, index) => (
            <SectionCard
              key={index}
              icon={ministry.icon}
              title={ministry.title}
              description={ministry.description}
              buttonText={ministry.buttonText}
              buttonLink={ministry.buttonLink}
            />
          ))}
        </div>

        <div className="ministry-cta card">
          <h2 className="heading-font">Ready to Get Involved?</h2>
          <p className="body-font">
            We believe everyone has unique gifts and talents to contribute to God's kingdom. 
            Whether you're looking to serve, lead, or simply connect with others, there's a 
            place for you in our ministry family.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">Contact Us</a>
            <a href="/volunteer" className="btn-outline volunteer-btn">Volunteer Today</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ministries-page {
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

        .ministries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .ministry-cta {
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          color: var(--gfm-white);
          text-align: center;
          padding: 50px 40px;
        }

        .ministry-cta h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .ministry-cta p {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .volunteer-btn {
          border-color: var(--gfm-white);
          color: var(--gfm-white);
        }

        .volunteer-btn:hover {
          background-color: var(--gfm-white);
          color: var(--gfm-dark-blue);
        }

        @media (max-width: 768px) {
          .ministries-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .page-title {
            font-size: 2rem;
          }

          .ministry-cta {
            padding: 40px 20px;
          }

          .ministry-cta h2 {
            font-size: 1.7rem;
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

export default Ministries;