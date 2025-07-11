import React from "react";
import CardPopular from "../../../partials/CardPopular";

const Popular = () => {
  return (
    <>
      <section className='bg-white py-20'>
        <div className='container'>
          <h3 className='text-center'>
            Popular <p className='gradient-text'>Milk Tea</p> Types
          </h3>

          <div className='grid grid-cols-3 mt-8 gap-5'>
            <CardPopular
              icon={"🥛"}
              title={"Classic Milk Tea"}
              description={
                "The Original blend of black tea, milk, and sweetness that started"
              }
            />
            <CardPopular
              icon={"🍯"}
              title={"Honeydew Milk Tea"}
              description={
                "Refreshing melon flavor combined with creamy milk for a summer favorite"
              }
            />
            <CardPopular
              icon={"🍵"}
              title={"Matcha Milk Tea"}
              description={
                "Earth green tea powder blended with milk for an antioxidant boost."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
