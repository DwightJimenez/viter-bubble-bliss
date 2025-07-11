import React from "react";

const CardPopular = ({ icon, title, description }) => {
  return (
    <>
      <div className='bg-pink-100 rounded-lg py-4 px-8 flex flex-col items-center text-center space-y-4 shadow-md'>
        <div className='rounded-full bg-pink-200 p-4 inline-block'>{icon}</div>
        <h4 className='font-semibold'>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CardPopular;
