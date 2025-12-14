import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title heading-font">
              I came to give life, and life more abundantly
            </h1>
            <p className="hero-verse scripture-font">
              (John 10:10)
            </p>
            <Link to="/contact" className="btn-outline hero-btn">
              Care and Connection
            </Link>
          </div>
          
          <div className="hero-right">
            <div className="hero-image">
              {/* Church steeple/cross image placeholder */}
              <div className="image-placeholder">
                <div className="cross-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background-color: var(--gfm-dark-blue);
          color: var(--gfm-white);
          padding: 80px 0;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-left {
          z-index: 2;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--gfm-white);
        }

        .hero-verse {
          font-size: 1.5rem;
          font-style: italic;
          margin-bottom: 30px;
          color: var(--gfm-light-blue);
        }

        .hero-btn {
          font-size: 1.1rem;
          padding: 15px 40px;
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          width: 300px;
          height: 400px;
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .cross-icon {
          width: 80px;
          height: 120px;
          position: relative;
        }

        .cross-icon::before,
        .cross-icon::after {
          content: '';
          position: absolute;
          background-color: var(--gfm-white);
          border-radius: 4px;
        }

        .cross-icon::before {
          width: 12px;
          height: 120px;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
        }

        .cross-icon::after {
          width: 60px;
          height: 12px;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-verse {
            font-size: 1.3rem;
          }

          .image-placeholder {
            width: 250px;
            height: 320px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 0;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-verse {
            font-size: 1.2rem;
          }

          .image-placeholder {
            width: 200px;
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;