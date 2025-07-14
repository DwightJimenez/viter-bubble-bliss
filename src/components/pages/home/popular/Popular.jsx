import React from "react";
import CardPopular from "../../../partials/CardPopular";

const Popular = () => {
  return (
    <>
      <section className='bg-white' id="types">
        <div className='container'>
          <h3 className='text-center'>
            Popular <span className='gradient-text'>Milk Tea</span> Types
          </h3>

          <div className='grid md:grid-cols-3 mt-8 gap-5'>
            <CardPopular
              bgCircle={"bg-pink-100"}
              icon={"🥛"}
              title={"Classic Milk Tea"}
              description={
                "The Original blend of black tea, milk, and sweetness that started"
              }
            />
            <CardPopular
              bgCircle={"bg-purple-100"}
              icon={"🍯"}
              title={"Honeydew Milk Tea"}
              description={
                "Refreshing melon flavor combined with creamy milk for a summer favorite"
              }
            />
            <CardPopular
            bgCircle={'bg-yellow-100'}
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
