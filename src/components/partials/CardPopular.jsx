import React from "react";

const CardPopular = ({ icon, title, description, bgCircle }) => {
  return (
    <>
      <div className='bg-purple-50 rounded-lg py-4 px-8 flex flex-col items-center text-center space-y-4 shadow-md'>
        <div className={`rounded-full ${bgCircle} p-4 inline-block text-2xl`}>
          {icon}
        </div>
        <h6 className='font-semibold'>{title}</h6>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CardPopular;
