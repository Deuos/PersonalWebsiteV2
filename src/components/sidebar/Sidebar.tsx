import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { FaFolder, FaUser } from 'react-icons/fa';
// import { HiMail } from 'react-icons/hi'

const Sidebar = () => {
  return (
    <div className="nagivation">
      <ul>
        <li>
          <Link className="ahref" to="/AboutMe">
            <span className="icons"><FontAwesomeIcon icon={faUser} /></span>
            <span className="title">About me</span>
          </Link>
        </li>
        <li>
          <Link className="ahref" to="/Projects">
            <span className="icons"><FontAwesomeIcon icon={faFolder} /></span>
            <span className="title">Projects</span>
          </Link>
        </li>
        <li>
          <Link className="ahref" to="/ContactMe">
            <span className="icons"><FontAwesomeIcon icon={faEnvelope} /></span>
            <span className="title">Contact Me</span>
          </Link>
        </li>
      </ul>
    </div>

  );
};

export default Sidebar;

{/* <a href="#project">
              <span className="icons"></span>
              <span className="title">Projects</span>
            </a> */}