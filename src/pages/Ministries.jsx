// src/pages/Ministries.jsx
import React from "react";
import SectionCard from "../components/SectionCard";
import * as FiIcons from "react-icons/fi";

// leader images – these files must exist in: src/assets/images/leaders
import img1 from "../assets/images/leaders/IMG_0010.png";
import img2 from "../assets/images/leaders/IMG_0083.JPG";
import img3 from "../assets/images/leaders/testimonials-5.jpg";

const Ministries = () => {
  const ministries = [
    {
      icon: FiIcons.FiUsers,
      title: "Youth Ministry",
      description:
        "Engaging programs for teens and young adults to grow in faith and fellowship.",
      buttonText: "Learn More",
      buttonLink: "#youth",
      leaderName: "Minister James Carter",
      leaderTitle: "Youth Ministry Director",
      leaderPhoto: img1,
    },
    {
      icon: FiIcons.FiHeart,
      title: "Community Outreach",
      description:
        "Serving our local community through food banks, shelter support, and assistance programs.",
      buttonText: "Get Involved",
      buttonLink: "#outreach",
      leaderName: "Sister Angela Morris",
      leaderTitle: "Outreach Coordinator",
      leaderPhoto: img2,
    },
    {
      icon: FiIcons.FiMusic,
      title: "Worship Team",
      description:
        "Join our music ministry and help lead the congregation in praise and worship.",
      buttonText: "Join Us",
      buttonLink: "#worship",
      leaderName: "Minister David Price",
      leaderTitle: "Worship Leader",
      leaderPhoto: img3,
    },
    {
      icon: FiIcons.FiBookOpen,
      title: "Bible Study Groups",
      description:
        "Small group Bible studies for deeper understanding and spiritual growth.",
      buttonText: "Find a Group",
      buttonLink: "#biblestudy",
      leaderName: "Elder Sharon Williams",
      leaderTitle: "Discipleship Director",
      leaderPhoto: img1,
    },
    {
      icon: FiIcons.FiSun,
      title: "Children's Ministry",
      description:
        "Fun and engaging programs to help children learn about God's love.",
      buttonText: "Learn More",
      buttonLink: "#children",
      leaderName: "Sister Monica Green",
      leaderTitle: "Children's Ministry Leader",
      leaderPhoto: img2,
    },
    {
      icon: FiIcons.FiHome,
      title: "Family Ministry",
      description:
        "Strengthening families through biblical principles, prayer, and support.",
      buttonText: "Explore",
      buttonLink: "#family",
      leaderName: "Pastor Rodney Hayes",
      leaderTitle: "Family Ministry Pastor",
      leaderPhoto: img3,
    },
  ];

  return (
    <div className="ministries-page">
      <div className="container">
        {/* header */}
        <div className="page-header">
          <h1 className="page-title heading-font">Our Ministries</h1>
          <p className="page-subtitle body-font">
            Discover ways to serve, grow, and connect at Gregory Foster
            Ministries.
          </p>
        </div>

        {/* cards – 3 per row on desktop, auto-wrap on smaller screens */}
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

        {/* call to action */}
        <div className="ministry-cta card">
          <h2 className="heading-font">Ready to Get Involved?</h2>
          <p className="body-font">
            We believe everyone has unique gifts and talents for God's kingdom.
            Whether you're looking to serve, learn, or simply connect with
            others, there is a place for you and your family.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* page-specific styles */}
      <style jsx>{`
        .ministries-page {
          padding: 60px 0;
          min-height: 80vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .ministry-cta {
          margin-top: 60px;
          padding: 40px 20px;
          text-align: center;
        }

        .ministry-cta h2 {
          font-size: 1.7rem;
          margin-bottom: 10px;
        }

        .cta-buttons {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        .btn-primary {
          display: inline-block;
          padding: 12px 28px;
          border-radius: 4px;
          background-color: var(--gfm-accent, #00b5e2);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }

        .btn-primary:hover {
          opacity: 0.9;
        }

        /* Make ministry & leader titles stand out */
        :global(.card-title) {
          font-weight: 700;
          font-size: 1.25rem;
        }

        :global(.leader-title) {
          font-weight: 700;
          color: var(--gfm-dark-blue);
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Ministries;
