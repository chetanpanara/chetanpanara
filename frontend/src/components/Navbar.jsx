import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img
              src="cp.png"
              className="h-8 w-auto "
              alt="Company Logo"
            />
            <span className="text-2xl tracking-wider font-bold text-white">
              chetanpanara
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-lg p-2 inline-flex items-center"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop and Mobile Menu */}
          <div className={`
            fixed md:static
            ${isMenuOpen ? 'left-0' : '-left-full'}
            top-16 w-full md:w-auto
            bg-black 
            md:block
            transition-all duration-300 ease-in-out
            z-50 md:z-auto
            mx-auto
          `}>
            <ul className="
              flex flex-col 
              md:flex-row 
              space-y-2 md:space-y-0 
              md:space-x-8 
              p-4 md:p-0
              font-medium
              h-[calc(100vh-4rem)] md:h-auto
              overflow-y-auto md:overflow-visible
            ">
              <li className="relative group">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    block py-2 px-2 
                    relative
                    ${isActive
                      ? 'text-green before:w-full'
                      : 'text-gray-300 hover:text-white'}
                    before:absolute before:bottom-0 before:left-0
                    before:h-0.5 before:bg-white
                    before:transition-all before:duration-300
                    before:w-0 group-hover:before:w-full
                  `}
                >
                  Home
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    block py-2 px-2 
                    relative
                    ${isActive
                      ? 'text-white before:w-full'
                      : 'text-gray-300 hover:text-white'}
                    before:absolute before:bottom-0 before:left-0
                    before:h-0.5 before:bg-white
                    before:transition-all before:duration-300
                    before:w-0 group-hover:before:w-full
                  `}
                >
                  About
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/works"
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    block py-2 px-2 
                    relative
                    ${isActive
                      ? 'text-white before:w-full'
                      : 'text-gray-300 hover:text-white'}
                    before:absolute before:bottom-0 before:left-0
                    before:h-0.5 before:bg-white
                    before:transition-all before:duration-300
                    before:w-0 group-hover:before:w-full
                  `}
                >
                  Works
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/projects"
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    block py-2 px-2 
                    relative
                    ${isActive
                      ? 'text-white before:w-full'
                      : 'text-gray-300 hover:text-white'}
                    before:absolute before:bottom-0 before:left-0
                    before:h-0.5 before:bg-white
                    before:transition-all before:duration-300
                    before:w-0 group-hover:before:w-full
                  `}
                >
                  Projects
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/youtube"
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    block py-2 px-2 
                    relative
                    ${isActive
                      ? 'text-white before:w-full'
                      : 'text-gray-300 hover:text-white'}
                    before:absolute before:bottom-0 before:left-0
                    before:h-0.5 before:bg-white
                    before:transition-all before:duration-300
                    before:w-0 group-hover:before:w-full
                  `}
                >
                 Youtube
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    block py-2 px-2 
                    relative
                    ${isActive
                      ? 'text-white before:w-full'
                      : 'text-gray-300 hover:text-white'}
                    before:absolute before:bottom-0 before:left-0
                    before:h-0.5 before:bg-white
                    before:transition-all before:duration-300
                    before:w-0 group-hover:before:w-full
                  `}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;