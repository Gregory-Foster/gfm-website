import React from 'react';
import SectionCard from '../components/SectionCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiHeart, FiMusic, FiBookOpen, FiSun, FiHome } = FiIcons;

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
    leaderName: 'Elder Marcus Hill',
    leaderTitle: 'Worship Leader',
    leaderPhoto: '/images/leaders/marcus-hill.jpg',
  },
  {
    icon: FiBookOpen,
    title: 'Bible Study Groups',
    description: 'Small group Bible studies for deeper understanding and spiritual growth.',
    buttonText: 'Find a Group',
    buttonLink: '#biblestudy',
    leaderName: 'Deacon Samuel Price',
    leaderTitle: 'Bible Study Coordinator',
    leaderPhoto: '/images/leaders/samuel-price.jpg',
  },
  {
    icon: FiSun,
    title: 'Children’s Ministry',
    description: 'Fun and engaging programs to help children learn about God’s love.',
    buttonText: 'Learn More',
    buttonLink: '#children',
    leaderName: 'Sister Monica Green',
    leaderTitle: 'Children’s Ministry Director',
    leaderPhoto: '/images/leaders/monica-green.jpg',
  },
  {
    icon: FiHome,
    title: 'Family Ministry',
    description: 'Strengthening families through biblical principles and community support.',
    buttonText: 'Explore',
    buttonLink: '#family',
    leaderName: 'Pastor Rodney Hayes',
    leaderTitle: 'Family Ministry Pastor',
    leaderPhoto: '/images/leaders/rodney-hayes.jpg',
  },
];


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
             }</style>
    </div>
  );
}

export default Ministries;
