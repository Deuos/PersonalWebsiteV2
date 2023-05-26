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
export default NavBar;
