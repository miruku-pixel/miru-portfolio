import React, { useEffect, useState } from "react";
import { MENU_LINKS } from "../utils/data";
import LOGO from "../assets/images/LOGO.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Set initial state based on screen size
    handleResize();

    // Listen to resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#b7e2ff] backdrop-blur-[10px] m-5 p-3 md:p-0">
        {/*Logo and Title*/}
        <Link
          to="hero"
          spy
          offset={-100}
          smooth={true}
          duration={500}
          aria-label="Go to Home section"
        >
          <div className="flex items-center cursor-pointer">
            <img className="h-9 ml-6 -mb-1" src={LOGO} alt="Logo" />
            <h1 className="ml-2 text-xl font-gidole">Miruku</h1>
            <h1 className="ml-1 text-2xl font-kanit"> PixeL</h1>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {/* Hamburger Icon (on small screen) */}
          <button
            className="block md:hidden text-[#333] mr-6 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`${isOpen ? "flex" : "hidden"} 
          menu-wrapper`}
          >
            {MENU_LINKS.map((item) => (
              <li key={item.id}>
                <Link
                  activeClass="active"
                  to={item.to}
                  smooth
                  spy
                  offset={item.offset}
                  className="menu-item"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire Me Button (Always Visible on Large Screens) */}
          <Link
            to="contact"
            spy
            offset={-100}
            smooth={true}
            duration={500}
            aria-label="Go to Contact Us section"
          >
            <button
              className="hidden md:block h-12 text-[17px] font-medium text-[#333] bg-gradient-to-r from-blue-400 to-blue-200
          rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
