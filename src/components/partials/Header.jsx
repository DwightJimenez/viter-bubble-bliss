import React from "react";

const Header = () => {
  return (
    <>
      <nav className='shadow-lg py-2 sticky top-0 z-50 bg-white'>
        <div className='container'>
          <div className='flex justify-between px-4'>
            <div className='flex items-center gap-2'>
              <h4 className='gradient-text font-bold'>Bubble bliss</h4>
              <p>🧋</p>
            </div>
            <div className='md:flex space-x-8 hidden '>
              <a href='#home'>Home</a>
              <a href='#types'>Types</a>
              <a href='#toppings'>Toppings</a>
              <a href='#benefits'>Benefits</a>
              <a href='#contact'>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
