import React from "react";

const Banner = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-pink-100 to-purple-100' id="home">
        <div className='container'>
          <div className='grid md:grid-cols-2 gap-8 md:gap-0'>
            <div className='flex flex-col justify-center items-center text-center md:text-left md:items-start space-y-4'>
              <h1 className='font-bold'>
                Discover the <span className='gradient-text h-12'>Joy</span> of Milk Tea
              </h1>
              <p>
                Creamy, sweet, and refreshing - our milk tea will transport you
                to flavor paradise with every sip.
              </p>
              <button className='btn inline-block w-fit rounded-full'>Explore Flavors</button>
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
