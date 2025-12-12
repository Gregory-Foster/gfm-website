import React from "react";
import SectionCard from "../components/SectionCard";
import * as FiIcons from "react-icons/fi";

// ✅ use the 3 images that actually exist
import youthLeaderPhoto from "../assets/images/leaders/IMG_0010.png";
import outreachLeaderPhoto from "../assets/images/leaders/IMG_0083.JPG";
import worshipLeaderPhoto from "../assets/images/leaders/testimonials-5.jpg";

const { FiUsers, FiHeart, FiMusic, FiBookOpen, FiSun, FiHome } = FiIcons;

const Ministries = () => {
  const ministries = [
    {
      icon: FiUsers,
      title: "Youth Ministry",
      description:
        "Engaging programs for teens and young adults to grow in faith and fellowship.",
      buttonText: "Learn More",
      buttonLink: "#youth",
      leaderName: "Minister James Carter",
      leaderTitle: "Youth Ministry Director",
      leaderPhoto: youthLeaderPhoto,
    },
    {
      icon: FiHeart,
      title: "Community Outreach",
      description:
        "Serving our local community through food banks, shelter support, and assistance programs.",
      buttonText: "Get Involved",
      buttonLink: "#outreach",
      leaderName: "Sister Angela Morris",
      leaderTitle: "Outreach Coordinator",
      leaderPhoto: outreachLeaderPhoto,
    },
    {
      icon: FiMusic,
      title: "Worship Team",
      description:
        "Join our music ministry and help lead the congregation in praise and worship.",
      buttonText: "Join Us",
      buttonLink: "#worship",
      leaderName: "Minister David Price",
      leaderTitle: "Worship Leader",
      leaderPhoto: worshipLeaderPhoto,
    },
    {
      icon: FiBookOpen,
      title: "Bible Study Groups",
      description:
        "Small group Bible studies for deeper understanding and spiritual growth.",
      buttonText: "Find a Group",
      buttonLink: "#biblestudy",
      leaderName: "Elder Sharon Williams",
      leaderTitle: "Discipleship Director",
      leaderPhoto: discipleshipLeaderPhoto,
    },
    {
      icon: FiSun,
      title: "Children's Ministry",
      description:
        "Fun and engaging programs to help children learn about God's love.",
      buttonText: "Learn More",
      buttonLink: "#children",
      leaderName: "Sister Monica Green",
      leaderTitle: "Children's Ministry Leader",
      leaderPhoto: childrenLeaderPhoto,
    },
    {
      icon: FiHome,
      title: "Family Ministry",
      description:
        "Strengthening families through biblical principles, prayer, and community support.",
      buttonText: "Explore",
      buttonLink: "#family",
      leaderName: "Pastor Rodney Hayes",
      leaderTitle: "Family Ministry Pastor",
      leaderPhoto: familyLeaderPhoto,
    },
  ];

  return (
    <div className="ministries-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Ministries</h1>
          <p className="page-subtitle body-font">
            Discover ways to serve, grow, and connect in our church community.
          </p>
        </div>

        {/* cards – 3 per row on desktop */}
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
            We believe everyone has unique gifts and talents to contribute to
            God's kingdom. Whether you're looking to serve, lead, or simply
            connect with others, there is a place for you in our ministry
            family.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
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
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        @media (max-width: 900px) {
          .ministries-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .ministries-grid {
            grid-template-columns: 1fr;
          }
        }

        .ministry-cta {
          margin-top: 40px;
          padding: 40px 20px;
        }

        .ministry-cta h2 {
          font-size: 1.7rem;
          margin-bottom: 10px;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Ministries;
