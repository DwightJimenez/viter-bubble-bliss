import React from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className='shadow-lg py-2 sticky top-0 z-50 bg-white'>
        <div className='container'>
          <div className='flex justify-between px-4'>
            <div className='flex items-center gap-2'>
              <h4 className='gradient-text font-bold'>Bubble bliss</h4>
              <p>🧋</p>
            </div>
            <div className='md:flex space-x-8 hidden'>
              <a href='#home'>Home</a>
              <a href='#types'>Types</a>
              <a href='#toppings'>Toppings</a>
              <a href='#benefits'>Benefits</a>
              <a href='#contact'>Contact</a>
            </div>
            <button
              className='md:hidden text-xl focus:outline-none'
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : "☰"}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`
        fixed inset-0 bg-gradient-to-b from-pink-100 to bg-purple-100 z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
      >
        <div className='flex flex-col items-center space-y-8 text-white text-2xl'>
          <a
            href='#home'
            className='hover:text-purple-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href='#types'
            className='hover:text-purple-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Types
          </a>
          <a
            href='#toppings'
            className='hover:text-purple-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Toppings
          </a>
          <a
            href='#benefits'
            className='hover:text-purple-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <a
            href='#contact'
            className='hover:text-purple-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
