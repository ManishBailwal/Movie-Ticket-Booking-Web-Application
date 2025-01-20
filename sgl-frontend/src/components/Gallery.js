import React from 'react';
import images from '../constant/images';
const Gallery = () => {
  return (
    <div className="flex bg-black text-white flex-col items-center justify-center gap-10 overflow-hidden ">
      <h1 className="text-5xl text-center text-red">Gallery</h1>
      <div
        className="flex flex-col w-full justify-evenly gap-4 p-4 lg:flex-row lg:w-96 "
        data-aos="fade-up-right"
        data-aos-duration="1500"
      >
        <img
          src={images.theater1}
          alt="theater"
          className="border-2 border-white p-3 className rounded-lg "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <img
          src={images.theater2}
          alt="theater"
          className="border-2 border-white p-3 className rounded-lg "
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <img
          src={images.theater3}
          alt="theater"
          className="border-2 border-white p-3 className rounded-lg "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <img
          src={images.theater4}
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          alt="theater"
          className="border-2 border-white p-3 className rounded-lg "
        />
      </div>
    </div>
  );
};

export default Gallery;
