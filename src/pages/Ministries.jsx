import React from "react";
import SectionCard from "../components/SectionCard";
import * as FiIcons from "react-icons/fi";

import img1 from "../assets/images/leaders/IMG_0020.jpg";
import img2 from "../assets/images/leaders/IMG_0014.jpg";
import img3 from "../assets/images/leaders/IMG_0016.jpg";
import img4 from "../assets/images/leaders/IMG_0017.jpg";
import img5 from "../assets/images/leaders/IMG_0012.jpg";
import img6 from "../assets/images/leaders/IMG_0012.jpg";

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
      leaderPhoto: img4,
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
      leaderPhoto: img5,
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
      leaderPhoto: img6,
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

<style jsx="true">{`

.card-image {
  width: 100%;
  height: 450px;      /* Adjust this number until the pictures look perfect */
  object-fit: cover;  /* This keeps the picture from getting stretched */
  border-radius: 8px; /* Optional for rounded corners */
}

  .ministries-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  /* CARD STYLES – ALL SAME HEIGHT */
  .section-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 500px; /* 🔵 make all cards same height */
  }

  /* LEADER PHOTO – SAME SIZE IN EVERY CARD */
  .section-card .leader-photo {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  /* TEXT INSIDE CARD */
  .leader-title {
    font-weight: 700;
  }

  .ministry-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* RESPONSIVE GRID */
  @media (max-width: 900px) {
    .ministries-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .ministries-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>

    </div>
  );
};

export default Ministries;
