import React from 'react';
import Hero from '../components/Hero';
import SectionCard from '../components/SectionCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUsers, FiMessageCircle } = FiIcons;

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="home-sections section-padding">
        <div className="container">
          <div className="sections-grid">
            <SectionCard
              icon={FiCalendar}
              title="Upcoming Events"
              description="Join us for worship services, community gatherings, and special ministry events. Stay connected with what's happening in our church family."
              buttonText="View Calendar"
              buttonLink="/calendar"
            />
            
            <SectionCard
              icon={FiUsers}
              title="Community"
              description="Be part of our loving church community. Connect with fellow believers, join small groups, and grow together in faith and fellowship."
              buttonText="Learn More"
              buttonLink="/ministries"
            />
            
            <SectionCard
              icon={FiMessageCircle}
              title="Connect With Us"
              description="We'd love to hear from you! Reach out with prayer requests, questions, or just to say hello. Our pastoral team is here for you."
              buttonText="Get In Touch"
              buttonLink="/contact"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          min-height: 100vh;
        }

        .home-sections {
          background-color: var(--gfm-gray-light);
        }

        .sections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        @media (max-width: 768px) {
          .sections-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;