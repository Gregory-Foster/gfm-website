import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown } = FiIcons;

const DropdownMenu = ({ items, isOpen, setIsOpen }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button 
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        More
        <SafeIcon icon={FiChevronDown} className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-list">
            {items.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className="dropdown-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        .dropdown {
          position: relative;
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 15px 20px;
          background: none;
          border: none;
          color: var(--gfm-white);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }

        .dropdown-trigger:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-bottom-color: var(--gfm-white);
        }

        .dropdown-arrow {
          transition: transform 0.3s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background-color: var(--gfm-white);
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          min-width: 220px;
          z-index: 1000;
          border: 1px solid var(--gfm-gray-light);
        }

        .dropdown-list {
          list-style: none;
          margin: 0;
          padding: 8px 0;
        }

        .dropdown-link {
          display: block;
          padding: 12px 20px;
          color: var(--gfm-dark-blue);
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .dropdown-link:hover {
          background-color: var(--gfm-gray-light);
        }
      `}</style>
    </div>
  );
};

export default DropdownMenu;