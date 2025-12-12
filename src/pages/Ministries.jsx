import React from "react";
import SectionCard from "../components/SectionCard";
import * as FiIcons from "react-icons/fi";

import img1 from "../assets/images/leaders/IMG_0010.jpg";
import img2 from "../assets/images/leaders/IMG_0083.jpg";
import img3 from "../assets/images/leaders/IMG_0089.jpg";

const { FiUsers, FiHeart, FiMusic, FiBookOpen, FiSun, FiHome } = FiIcons;


const Ministries = () => {
  const ministries = [
    {
      icon: FiUsers,
      title: "Youth Ministry",
      description:
        "Engaging programs for teens and young adults to grow in faith, leadership, and fellowship.",
      buttonText: "Learn More",
      buttonLink: "#youth",
      leaderName: "Minister James Carter",
      leaderTitle: "Youth Ministry Director",
      leaderPhoto: img1,
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
      leaderPhoto: img2,
    },
    {
      icon: FiMusic,
      title: "Worship Team",
      description:
        "Join our music ministry and help lead the congregation in praise and worship.",
      buttonText: "Join Us",
      buttonLink: "#worship",
      leaderName: "Elder Brian Thompson",
      leaderTitle: "Worship Leader",
      leaderPhoto: img3,
    },
    {
      icon: FiBookOpen,
      title: "Christian Education",
      description:
        "Bible studies, small groups, and classes designed to help believers grow in the Word.",
      buttonText: "View Classes",
      buttonLink: "#education",
      leaderName: "Deacon Lisa Howard",
      leaderTitle: "Christian Education Director",
      leaderPhoto: img1,
    },
    {
      icon: FiSun,
      title: "Children’s Ministry",
      description:
        "Fun, safe, and Christ-centered environments where children learn about Jesus.",
      buttonText: "Discover More",
      buttonLink: "#children",
      leaderName: "Sister Monique Fields",
      leaderTitle: "Children’s Ministry Leader",
      leaderPhoto: img2,
    },
    {
      icon: FiHome,
      title: "Care & Support",
      description:
        "Prayer, counseling, hospital visits, and support for members and families in need.",
      buttonText: "Request Support",
      buttonLink: "#care",
      leaderName: "Elder Marcus Green",
      leaderTitle: "Care Ministry Leader",
      leaderPhoto: img3,
    },
  ];

  return (
    <div className="ministries-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Our Ministries</h1>
          <p className="page-subtitle body-font">
            Discover ways to serve, grow, and stay connected at Gregory Foster
            Ministries.
          </p>
        </div>

        {/* cards - 3 per row on desktop */}
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

        {/* bottom CTA */}
        <div className="ministry-cta">
          <h2 className="heading-font">
            Ready to Get Involved in Ministry?
          </h2>
          <p className="body-font">
            We believe everyone has unique gifts and talents that can be used
            for God&apos;s kingdom. Whether you&apos;re looking to serve,
            learn, or connect with others, there is a place for you in our
            church family.
          </p>

          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="/schedule" className="btn-secondary">
              View Service Times
            </a>
          </div>
        </div>
      </div>

      {/* Page-specific styles */}
      <style jsx="true">{`
.ministry-card {
  height: 500px;        /* MAKE ALL CARDS SAME HEIGHT */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

      .ministry-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  height: 380px; /* ← FIXED HEIGHT */
}

        .ministries-page {
          padding: 80px 0;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-title {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .page-subtitle {
          font-size: 1.1rem;
          color: #555;
          max-width: 650px;
          margin: 0 auto;
        }

        .ministries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .ministry-cta {
          margin-top: 40px;
          padding: 40px 20px;
          text-align: center;
          background: #f7f7fb;
          border-radius: 12px;
        }

        .ministry-cta h2 {
          font-size: 1.7rem;
          margin-bottom: 10px;
        }

        .ministry-cta p {
          max-width: 650px;
          margin: 0 auto 20px auto;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
        }

        .btn-primary {
          background: var(--gfm-primary, #2b6cb0);
          color: #fff;
        }

        .btn-secondary {
          border: 2px solid var(--gfm-primary, #2b6cb0);
          color: var(--gfm-primary, #2b6cb0);
        }

        .btn-primary:hover {
          opacity: 0.9;
        }

        /* Make ministry & leader titles stand out */
        :global(.card-title),
        :global(.leader-title) {
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .cta-buttons {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Ministries;
