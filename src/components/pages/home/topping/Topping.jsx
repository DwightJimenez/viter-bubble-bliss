import React from "react";
import CardTopping from "../../../partials/CardTopping";

const Topping = () => {
  return (
    <>
      <section className='bg-pink-100 py-20'>
        <div className='container'>
          <h3 className='text-center'>
            Delicious <p className='gradient-text'>Toppings</p>
          </h3>
          <p className='text-center mt-4'>
            Customize your milk tea these tasty additions that add texture and
            flavor.
          </p>

          <div className='grid grid-cols-5 mt-8 gap-5'>
            <CardTopping
              icon={"🟤"}
              topping={"Boba Pearls"}
              bg={"bg-pink-200"}
            />
            <CardTopping
              icon={"🍮"}
              topping={"Boba Pearls"}
              bg={"bg-pink-200"}
            />
            <CardTopping icon={""} topping={"Boba Pearls"} bg={"bg-pink-200"} />
            <CardTopping
              icon={"🟤"}
              topping={"Boba Pearls"}
              bg={"bg-pink-200"}
            />
            <CardTopping
              icon={"🟤"}
              topping={"Boba Pearls"}
              bg={"bg-pink-200"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Topping;
