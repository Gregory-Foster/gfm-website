 1  import React from 'react';
 2  import SectionCard from '../components/SectionCard';
 3  import SafeIcon from '../common/SafeIcon';
 4  import * as FiIcons from 'react-icons/fi';
 5  
 6 const { FiUsers, FiHeart, FiMusic, FiBookOpen, FiSun, FiHome } = FiIcons;

const Ministries = () => {
  const ministries = [
    {
      icon: FiUsers,
      title: 'Youth Ministry',
      description: 'Engaging programs for teens and young adults to grow in faith and fellowship.',
      buttonText: 'Learn More',
      buttonLink: '#youth',
      leaderName: 'Minister James Carter',
      leaderTitle: 'Youth Ministry Director',
      leaderPhoto: '/images/leaders/james-carter.jpg',
    },
    {
      icon: FiHeart,
      title: 'Community Outreach',
      description: 'Serving our local community through food banks, shelter support, and assistance programs.',
      buttonText: 'Get Involved',
      buttonLink: '#outreach',
      leaderName: 'Sister Angela Morris',
      leaderTitle: 'Outreach Coordinator',
      leaderPhoto: '/images/leaders/angela-morris.jpg',
    },
    {
      icon: FiMusic,
      title: 'Worship Team',
      description: 'Join our music ministry and help lead the congregation in praise and worship.',
      buttonText: 'Join Us',
      buttonLink: '#worship',
      leaderName: 'Minister David Price',
      leaderTitle: 'Worship Leader',
      leaderPhoto: '/images/leaders/david-price.jpg',
    },
    // 👉 Add your other ministries here (Bible Study Groups, Children’s, Family, etc.)
  ];

  return (
    <div className="ministries-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Our Ministries</h1>
          <p className="page-subtitle body-font">
            Discover ways to serve, grow, and connect in our church community.
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
              leaderName={ministry.leaderName}
              leaderTitle={ministry.leaderTitle}
              leaderPhoto={ministry.leaderPhoto}
            />
          ))}
        </div>

        <div className="ministry-cta card">
          <h2 className="heading-font">Ready to Get Involved?</h2>
          <p className="body-font">
            We believe everyone has unique gifts and talents to contribute to God’s kingdom.
            Whether you&apos;re looking to serve, lead, or simply connect with others,
            there&apos;s a place for you in our ministry family.
          </p>
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
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .ministry-cta {
          padding: 40px 20px;
          margin-top: 40px;
        }

        .ministry-cta h2 {
          font-size: 1.7rem;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Ministries;

