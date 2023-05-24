import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ['About Me', '/AboutMe'],
        ['Projects', '/Projects'],
        ['Contact Me', '/ContactMe'],
      ].map(([title, url]) => (
        <Link to={url} className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">
          {title}</Link>
      ))}
    </nav>
  );
}
//<div class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">Hover over me</div>
export default NavBar;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './Sidebar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// // import { FaFolder, FaUser } from 'react-icons/fa';
// // import { HiMail } from 'react-icons/hi'

// const Sidebar = () => {
//   return (
//     <div className="nagivation">
//       <ul>
//         <li>
//           <Link className="ahref" to="/AboutMe">
//             <span className="icons"><FontAwesomeIcon icon={faUser} /></span>
//             <span className="title">About me</span>
//           </Link>
//         </li>
//         <li>
//           <Link className="ahref" to="/Projects">
//             <span className="icons"><FontAwesomeIcon icon={faFolder} /></span>
//             <span className="title">Projects</span>
//           </Link>
//         </li>
//         <li>
//           <Link className="ahref" to="/ContactMe">
//             <span className="icons"><FontAwesomeIcon icon={faEnvelope} /></span>
//             <span className="title">Contact Me</span>
//           </Link>
//         </li>
//       </ul>
//     </div>

//   );
// };

// export default Sidebar;

// {/* <a href="#project">
//               <span className="icons"></span>
//               <span className="title">Projects</span>
//             </a> */}