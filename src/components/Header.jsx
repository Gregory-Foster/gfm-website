import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SafeIcon from "../common/SafeIcon";
import * as FiIcons from "react-icons/fi";
import DropdownMenu from "./DropdownMenu";

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Calendar", path: "/calendar" },
    { name: "Ministries", path: "/ministries" },
    { name: "Sermons", path: "/sermons" },
    { name: "Prayer Requests", path: "/prayer-requests" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Schedule a Call", path: "/schedule" },
  ];

  const dropdownItems = [
    { name: "Contact", path: "/contact" },
    { name: "Donations", path: "/donations" },
    { name: "Podcast", path: "/podcast" },
    { name: "Record a Testimony", path: "/record-testimony" },
    { name: "Music & Book Store", path: "/store" },
    { name: "Live Stream", path: "/live-stream" },
    { name: "Chat With Us", path: "/chat" },
  ];

  return (
    <header className="header">
      {/* Row 1 - Logo Area */}
      <div className="header-logo-row">
        <div className="container">
          <div className="logo-area">
            <div className="logo-placeholder">
              {/* Logo SVG will be replaced here */}
              <div className="logo-icon"></div>
            </div>
            <div className="logo-text">
              <h1 className="heading-font logo-main">
                Gregory Foster Ministries
              </h1>
              <p className="logo-sub">GFM Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 - Navigation */}
      <nav className="header-nav-row">
        <div className="container">
          <div className="nav-wrapper">
            {/* Desktop Navigation */}
            <ul className="nav-menu desktop-nav">
              {mainNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="dropdown-container">
                <DropdownMenu
                  items={dropdownItems}
                  isOpen={isDropdownOpen}
                  setIsOpen={setIsDropdownOpen}
                />
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMenuOpen ? "mobile-nav-open" : ""}`}>
            <ul className="mobile-nav-menu">
              {mainNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {dropdownItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--gfm-light-blue);
        }

        .header-logo-row {
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo-placeholder {
          width: 50px;
          height: 50px;
          background-color: var(--gfm-white);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-icon {
          width: 30px;
          height: 30px;
          background-color: var(--gfm-light-blue);
          border-radius: 4px;
        }

        .logo-main {
          color: var(--gfm-white);
          font-size: 1.8rem;
          font-weight: 600;
          margin: 0;
        }

        .logo-sub {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin: 0;
        }

        .header-nav-row {
          padding: 0;
        }

        .nav-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-menu li {
          margin: 0;
        }

        .nav-link {
          display: block;
          padding: 15px 20px;
          color: var(--gfm-white);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }

        .nav-link:hover,
        .nav-link.active {
          background-color: rgba(255, 255, 255, 0.1);
          border-bottom-color: var(--gfm-white);
        }

        .dropdown-container {
          position: relative;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--gfm-white);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 10px;
        }

        .mobile-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--gfm-light-blue);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .mobile-nav-open {
          display: block;
        }

        .mobile-nav-menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-link {
          display: block;
          padding: 15px 20px;
          color: var(--gfm-white);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .desktop-nav {
          display: flex;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
            position: absolute;
            right: 0;
          }

          .logo-main {
            font-size: 1.4rem;
          }

          .logo-sub {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
