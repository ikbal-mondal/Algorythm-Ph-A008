import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {  Menu, X } from "lucide-react";
import { FaAppStore, FaGithub } from "react-icons/fa";
import logo  from '../../assets/logo.png'
import { MdAddHome } from "react-icons/md";
import { GoDownload } from "react-icons/go";

const Header  = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon:<MdAddHome /> },
    { name: "Apps", path: "/apps" ,icon: <FaAppStore />},
    { name: "Installation", path: "/installation",icon:<GoDownload /> },
  ];
 

  return (
    <nav className="bg-white shadow-sm border-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to='/'>
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Hero"
              className="h-6 w-6"
            />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
             ALGORYTHM
            </span>
          </div></Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? "text-purple-600 border-b-2"
                      : "text-gray-700 hover:text-purple-600"
                  }`
                }
              >
              <div className="flex justify-content-center gap-2 items-center">
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-xl">{link.name}</span>
              </div>
              </NavLink>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden md:flex">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm px-4 py-2 rounded-md flex items-center space-x-1 hover:opacity-90 transition"
            >
               <FaGithub  />
              <span>Contribute</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-sm border-t">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-sm ${
                    isActive
                      ? "text-purple-600 font-semibold"
                      : "text-gray-700 hover:text-purple-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
            >
                 <FaGithub  />
              <span>Contribute</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header ;
