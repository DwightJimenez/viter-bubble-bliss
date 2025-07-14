import React from "react";

const Benefits = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='grid gap-8 md:gap-0 md:grid-cols-2'>
            <div className="flex flex-col items-center md:items-start">
              <h3>
                Why <span className='gradient-text'>Milk Tea</span> is Good For You
              </h3>
              <div className='flex flex-col items-center md:flex-row text-center md:text-left gap-4 mt-6'>
                <div className='bg-red-100 text-pink-500 rounded-full p-2 w-fit'>
                  ✓
                </div>
                <div>
                  <p className='font-semibold text-black'>Antioxidant Rich</p>
                  <p>Tea contains polyphenols that help fight free radicals.</p>
                </div>
              </div>
              <div className='flex flex-col items-center md:flex-row text-center md:text-left gap-4 mt-6'>
                <div className='bg-purple-100 text-purple-500 rounded-full p-2'>
                  ✓
                </div>
                <div>
                  <p className='font-semibold text-black'>Energy Boost</p>
                  <p>
                    Natural caffeine provides a gentle lift without coffee
                    jitters.
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center md:flex-row text-center md:text-left gap-4 mt-6'>
                <div className='bg-yellow-100 text-yellow-500 rounded-full p-2'>
                  ✓
                </div>
                <div>
                  <p className='font-semibold text-black'>Mood Enhancer</p>
                  <p>
                    The comforting warmth and sweetness can brighten your day.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='flex flex-col gap-5 text-center w-64 bg-gradient-to-br from-pink-100 to-purple-100 p-10 rounded-xl'>
                <p className='text-6xl'>💖</p>
                <p className='font-semibold text-black/90'>
                  "A cup of milk tea a day keeps the stress away!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
