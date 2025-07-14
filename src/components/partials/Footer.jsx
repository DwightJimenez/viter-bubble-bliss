import React from "react";

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-800 py-10'>
        <div className='container'>
          <div>
            <div className='flex flex-col items-center md:flex-row md:justify-between gap-5 md:gap-0'>
              <div className="flex flex-col justify-center gap-2">
                <div className='flex justify-center md:justify-start gap-2'>
                  <h4 className='gradient-text font-bold'>Bubble bliss</h4>
                  <p>🧋</p>
                </div>
                <p>Sip happiness in every cup</p>
              </div>
              <div className='flex gap-5 '>
                <p className='text-2xl'>📱</p>
                <p className='text-2xl'>📷</p>
                <p className='text-2xl'>🐦</p>
                <p className='text-2xl'>📘</p>
              </div>
            </div>
            <div className='bg-gray-700 h-[1px] w-full my-6'></div>
            <p className="text-center font-semibold">&copy; 2025 Bubble Bliss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
