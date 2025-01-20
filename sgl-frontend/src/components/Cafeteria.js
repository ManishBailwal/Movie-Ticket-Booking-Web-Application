import React from 'react';
import images from '../constant/images';
const Cafeteria = () => {
  return (
    <div className="flex  bg-black p-4 gap-8 flex-col overflow-hidden">
      <h1 className="text-5xl text-center text-red overflow-hidden"
      data-aos="zoom-in"
      data-aos-duration="1500"
      >Cafeteria</h1>
      <div className='flex items-center w-full flex-col lg:flex-row overflow-hidden'>
        <img
          src={images.cafe}
          alt="cafeteria"
          className="border-2 border-white p-3 className rounded-lg overflow-hidden"
          data-aos="zoom-out-up"
        />
        <p className='text-white p-8 text-xl overflow-hidden'
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          What can be better to enjoy the best food during the movie interval.
          Get the best food according to your taste like burger, pizza, samosa,
          icecreams and many more.
        </p>
      </div>
      <div className="flex w-full justify-evenly flex-col items-center gap-10 lg:flex-row overflow-hidden">
        <img
            className="border-2 border-white p-3 w-[80%] rounded-lg  overflow-hidden"
                src={images.cafe2}
                alt="cafeteria"
                data-aos="flip-up"
                data-aos-duration="1500"
                />
        <img
            className="border-2 border-white p-3 w-[80%] rounded-lg  overflow-hidden"
                src={images.cafe3}
                alt="cafeteria"
                data-aos="flip-down"
                data-aos-duration="1500"
                />
        <img
            className="border-2 border-white p-3 w-[80%] rounded-lg  overflow-hidden"
                src={images.cafe4}
                alt="cafeteria"
                data-aos="flip-up"
                data-aos-duration="1500"

                />
        <img
            className="border-2 border-white p-3 w-[80%] rounded-lg  overflow-hidden"
                src={images.cafe5}
                alt="cafeteria"
                data-aos="flip-down"
                data-aos-duration="1500"
                />
        </div>
    </div>
  );
};

export default Cafeteria;
