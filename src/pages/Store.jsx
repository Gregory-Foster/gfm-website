import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMusic, FiBookOpen, FiShoppingCart } = FiIcons;

const Store = () => {
  const products = [
    {
      id: 1,
      type: 'album',
      title: 'Songs of Worship Vol. 1',
      description: 'Inspiring worship songs to lift your spirit',
      price: '$15.99',
      image: '/api/placeholder/300/300',
      icon: FiMusic
    },
    {
      id: 2,
      type: 'book',
      title: 'Walking in Faith',
      description: 'A daily devotional for spiritual growth',
      price: '$12.99',
      image: '/api/placeholder/300/300',
      icon: FiBookOpen
    },
    {
      id: 3,
      type: 'single',
      title: 'Amazing Grace (Acoustic)',
      description: 'Beautiful acoustic version of the beloved hymn',
      price: '$2.99',
      image: '/api/placeholder/300/300',
      icon: FiMusic
    },
    {
      id: 4,
      type: 'devotional',
      title: '30 Days of Prayer',
      description: 'Transform your prayer life in one month',
      price: '$9.99',
      image: '/api/placeholder/300/300',
      icon: FiBookOpen
    }
  ];

  return (
    <div className="store-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Music & Book Store</h1>
          <p className="page-subtitle body-font">
            Discover inspiring music and books to strengthen your faith journey
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card card">
              <div className="product-image">
                <div className="image-placeholder">
                  <SafeIcon icon={product.icon} className="product-icon" />
                </div>
              </div>
              
              <div className="product-info">
                <span className="product-type">{product.type.toUpperCase()}</span>
                <h3 className="product-title heading-font">{product.title}</h3>
                <p className="product-description body-font">{product.description}</p>
                
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="btn-primary buy-btn">
                    <SafeIcon icon={FiShoppingCart} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="store-info card">
          <h2 className="heading-font">About Our Store</h2>
          <p className="body-font">
            All proceeds from our music and book sales go directly to supporting our ministry 
            and community outreach programs. Thank you for your support in spreading the Gospel 
            and building God's kingdom.
          </p>
        </div>
      </div>

      <style jsx>{`
        .store-page {
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

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .product-card {
          transition: transform 0.3s ease;
          overflow: hidden;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-image {
          margin-bottom: 20px;
        }

        .image-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-icon {
          font-size: 4rem;
          color: var(--gfm-white);
          opacity: 0.8;
        }

        .product-type {
          display: inline-block;
          background-color: var(--gfm-light-blue);
          color: var(--gfm-white);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
        }

        .product-title {
          font-size: 1.4rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 10px;
        }

        .product-description {
          color: var(--gfm-navy);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gfm-dark-blue);
        }

        .buy-btn {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .store-info {
          background: var(--gfm-gray-light);
          text-align: center;
          margin-top: 40px;
        }

        .store-info h2 {
          font-size: 1.8rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .store-info p {
          font-size: 1.1rem;
          color: var(--gfm-navy);
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .page-title {
            font-size: 2rem;
          }

          .product-footer {
            flex-direction: column;
            gap: 15px;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
};

export default Store;