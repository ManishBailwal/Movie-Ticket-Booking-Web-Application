import React, { useState, useEffect } from 'react';
import { getVouchers } from '../services/api';
import MovieCard from '../UI/MovieCard/MovieCard';
import images from '../constant/images';
const Movies = () => {
  const [vouchers, setVouchers] = useState([]);
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full">
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
        <img
          src={images.aboutheader}
          alt="about"
          className="w-full opacity-100 p-2 brightness-200 contrast-200 saturate-200"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </div>
      <h1 className="text-5xl text-center text-red mt-2 underline">Offers</h1>

      <div className="grid lg:grid-cols-4 gap-4 p-10">
        {vouchers.map((movie, i) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
