import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <nav>
      {/* Desktop/Tablet */}
      <div className="flex sm:justify-center space-x-4 visible max-mobile:hidden">
        {[
          ['About Me', '/AboutMe'],
          ['Projects', '/Projects'],
          ['Contact Me', '/ContactMe'],
        ].map(([title, url]) => (
          <Link to={url} className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">
            {title}</Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between border border-gray-400 py-8 mobile:hidden">
        <nav>
          <section className="MOBILE-MENU border flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN text-black flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/AboutMe">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/Projects">Projects</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/ContactMe">Contact Me</a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </nav>
  );
}
export default NavBar;
