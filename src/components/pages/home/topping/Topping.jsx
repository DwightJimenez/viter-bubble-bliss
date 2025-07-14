import React from "react";
import CardTopping from "../../../partials/CardTopping";

const Topping = () => {
  return (
    <>
      <section className='bg-purple-50' id="toppings">
        <div className='container'>
          <h3 className='text-center'>
            Delicious <span className='gradient-text'>Toppings</span>
          </h3>
          <p className='text-center mt-4'>
            Customize your milk tea these tasty additions that add texture and
            flavor.
          </p>

          <div className='flex flex-wrap justify-center mt-8 gap-5'>
            <CardTopping
              icon={"🟤"}
              topping={"Boba Pearls"}
              bg={"bg-pink-200"}
            />
            <CardTopping icon={"🍮"} topping={"Pudding"} bg={"bg-yellow-200"} />
            <CardTopping icon={"🧊"} topping={"Jelly"} bg={"bg-red-200"} />
            <CardTopping icon={"🥥"} topping={"Cocunot"} bg={"bg-green-200"} />
            <CardTopping
              icon={"🧈"}
              topping={"Cheese Foam"}
              bg={"bg-blue-200"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Topping;
