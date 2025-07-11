import React from "react";

const CardTopping = ({ icon, topping, bg }) => {
  return (
    <>
      <div className='bg-white rounded-lg p-4 flex flex-col items-center'>
        <div className={`rounded-full p-4 ${bg}`}>
          <p className="text-xl">{icon}</p>
        </div>
        <h5 className="font-bold">{topping}</h5>
      </div>
    </>
  );
};

export default CardTopping;
