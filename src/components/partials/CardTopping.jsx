import React from "react";

const CardTopping = ({ icon, topping, bg }) => {
  return (
    <>
      <div className='bg-white rounded-lg p-4 w-32 flex flex-col gap-4 items-center'>
        <div className={`rounded-full p-4 ${bg}`}>
          <p className="text-2xl">{icon}</p>
        </div>
        <h6 className="font-semibold text-black/90">{topping}</h6>
      </div>
    </>
  );
};

export default CardTopping;
