import React, {useState} from "react";
import { FaHome, FaUser, FaInfoCircle } from 'react-icons/fa';
import './Sidebar.css'

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`sidebar ${expanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <a href="/" className="sidebar-link">
            <FaHome className="sidebar-icon" />
            Home
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/profile" className="sidebar-link">
            <FaUser className="sidebar-icon" />
            Profile
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/about" className="sidebar-link">
            <FaInfoCircle className="sidebar-icon" />
            About
          </a>
        </li>
      </ul>
    </div>
  );
};
  
  export default Sidebar;