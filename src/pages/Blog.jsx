import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiArrowRight } = FiIcons;

const Blog = () => {
  const blogPosts = [
    {
      title: 'Finding Hope in Difficult Times',
      author: 'Pastor Gregory Foster',
      date: '2024-01-15',
      excerpt: 'When life feels overwhelming, we can find strength and hope in God\'s promises. Learn how to navigate through challenging seasons with faith.',
      readTime: '5 min read',
      category: 'Faith & Hope'
    },
    {
      title: 'The Importance of Community in Faith',
      author: 'Ministry Team',
      date: '2024-01-10',
      excerpt: 'Discover why being part of a church community is essential for spiritual growth and how we can better support one another.',
      readTime: '7 min read',
      category: 'Community'
    },
    {
      title: 'Prayer: More Than Just Words',
      author: 'Pastor Gregory Foster',
      date: '2024-01-05',
      excerpt: 'Understanding the deeper aspects of prayer and how it transforms our relationship with God and others.',
      readTime: '6 min read',
      category: 'Prayer'
    },
    {
      title: 'Serving Others: The Heart of Ministry',
      author: 'Outreach Team',
      date: '2024-01-01',
      excerpt: 'Explore how serving others reflects Christ\'s love and discover practical ways to make a difference in your community.',
      readTime: '8 min read',
      category: 'Service'
    }
  ];

  const categories = [
    'Faith & Hope',
    'Community',
    'Prayer',
    'Service',
    'Bible Study',
    'Worship',
    'Family'
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Blog</h1>
          <p className="page-subtitle body-font">
            Reflections, insights, and encouragement for your spiritual journey
          </p>
        </div>

        <div className="blog-content">
          <div className="blog-main">
            <div className="blog-posts">
              {blogPosts.map((post, index) => (
                <article key={index} className="blog-post card">
                  <div className="post-header">
                    <span className="post-category">{post.category}</span>
                    <h2 className="post-title heading-font">
                      <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {post.title}
                      </a>
                    </h2>
                  </div>

                  <div className="post-meta">
                    <div className="meta-item">
                      <SafeIcon icon={FiUser} />
                      <span>{post.author}</span>
                    </div>
                    <div className="meta-item">
                      <SafeIcon icon={FiCalendar} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="meta-item">
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="post-content">
                    <p className="post-excerpt body-font">{post.excerpt}</p>
                    <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="read-more-link">
                      Read More
                      <SafeIcon icon={FiArrowRight} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="pagination">
              <button className="pagination-btn" disabled>Previous</button>
              <span className="pagination-info">Page 1 of 3</span>
              <button className="pagination-btn">Next</button>
            </div>
          </div>

          <div className="blog-sidebar">
            <div className="sidebar-card card">
              <h3 className="sidebar-title heading-font">Categories</h3>
              <ul className="categories-list">
                {categories.map((category, index) => (
                  <li key={index} className="category-item">
                    <a href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="category-link">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card card">
              <h3 className="sidebar-title heading-font">Recent Posts</h3>
              <div className="recent-posts">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="recent-post">
                    <h4 className="recent-post-title">
                      <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {post.title}
                      </a>
                    </h4>
                    <span className="recent-post-date">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card card newsletter-card">
              <h3 className="sidebar-title heading-font">Stay Updated</h3>
              <p className="body-font">
                Subscribe to receive our latest blog posts and ministry updates.
              </p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                />
                <button type="submit" className="btn-primary newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-page {
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

        .blog-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .blog-posts {
          display: grid;
          gap: 30px;
        }

        .blog-post {
          transition: transform 0.3s ease;
        }

        .blog-post:hover {
          transform: translateY(-3px);
        }

        .post-header {
          margin-bottom: 15px;
        }

        .post-category {
          display: inline-block;
          background-color: var(--gfm-light-blue);
          color: var(--gfm-white);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .post-title {
          font-size: 1.8rem;
          margin: 0;
        }

        .post-title a {
          color: var(--gfm-dark-blue);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .post-title a:hover {
          color: var(--gfm-light-blue);
        }

        .post-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--gfm-navy);
          font-size: 0.9rem;
        }

        .meta-item svg {
          color: var(--gfm-light-blue);
        }

        .post-content {
          border-top: 1px solid var(--gfm-gray-light);
          padding-top: 20px;
        }

        .post-excerpt {
          color: var(--gfm-navy);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--gfm-light-blue);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .read-more-link:hover {
          color: var(--gfm-navy);
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 40px;
          padding: 30px 0;
        }

        .pagination-btn {
          padding: 10px 20px;
          border: 2px solid var(--gfm-light-blue);
          background-color: var(--gfm-white);
          color: var(--gfm-light-blue);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-btn:hover:not(:disabled) {
          background-color: var(--gfm-light-blue);
          color: var(--gfm-white);
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-info {
          color: var(--gfm-navy);
          font-weight: 500;
        }

        .blog-sidebar {
          display: grid;
          gap: 25px;
          align-content: start;
        }

        .sidebar-card {
          background-color: var(--gfm-white);
        }

        .sidebar-title {
          font-size: 1.4rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 20px;
        }

        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-item {
          margin-bottom: 12px;
        }

        .category-link {
          color: var(--gfm-navy);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .category-link:hover {
          color: var(--gfm-light-blue);
        }

        .recent-posts {
          display: grid;
          gap: 15px;
        }

        .recent-post {
          padding-bottom: 15px;
          border-bottom: 1px solid var(--gfm-gray-light);
        }

        .recent-post:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .recent-post-title {
          font-size: 1rem;
          margin: 0 0 5px 0;
        }

        .recent-post-title a {
          color: var(--gfm-dark-blue);
          text-decoration: none;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .recent-post-title a:hover {
          color: var(--gfm-light-blue);
        }

        .recent-post-date {
          font-size: 0.8rem;
          color: var(--gfm-navy);
        }

        .newsletter-card {
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          color: var(--gfm-white);
        }

        .newsletter-card .sidebar-title {
          color: var(--gfm-white);
        }

        .newsletter-card p {
          margin-bottom: 20px;
        }

        .newsletter-form {
          display: grid;
          gap: 12px;
        }

        .newsletter-input {
          padding: 12px 15px;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
        }

        .newsletter-btn {
          background-color: var(--gfm-white);
          color: var(--gfm-dark-blue);
        }

        .newsletter-btn:hover {
          background-color: var(--gfm-gray-light);
        }

        @media (max-width: 968px) {
          .blog-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .post-title {
            font-size: 1.5rem;
          }

          .post-meta {
            flex-direction: column;
            gap: 8px;
          }

          .pagination {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;