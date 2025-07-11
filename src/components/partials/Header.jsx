import React from "react";

const Header = () => {
  return (
    <>
      <nav className='shadow-lg py-2'>
        <div className='container'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <h3 className="gradient-text">Bubble bliss</h3>
              <p>🧋</p>
            </div>
            <div className='flex space-x-8'>
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
