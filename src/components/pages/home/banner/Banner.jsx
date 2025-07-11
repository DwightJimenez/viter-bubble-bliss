import React from "react";

const Banner = () => {
  return (
    <>
      <section className='bg-pink-100 py-20'>
        <div className='container'>
          <div className='grid grid-cols-2'>
            <div className='text-center space-y-4'>
              <h1 className="font-bold">Discover the <p className="gradient-text">Joy</p> of Milk Tea</h1>
              <p>
                Creamy, sweet, and refreshing - our milk tea will transport you
                to flavor paradise with every sip.
              </p>
              <button className='btn'>Explore Flavors</button>
            </div>
            <div className='flex justify-center relative'>
              <div className=' rounded-full bg-pink-500/20 blur-2xl h-56 w-56'></div>
              <p className='text-8xl absolute'>🧋</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
