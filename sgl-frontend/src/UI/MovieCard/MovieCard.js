import React from 'react';
import './MovieCard.css';
import images from '../../constant/images';
import { Link, useNavigate } from 'react-router-dom';
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cardM"
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="cardM2">
        <div className="flex flex-col justify-between items-center">
          <img
            className="w-full h-80 rounded-t-2xl object-fit "
            src={movie.image}
            alt=""
            onClick={() => navigate(`/movie/${movie._id}`)}
          />

          <h1 className="font-bold text-xl text-white">{movie.movieName}</h1>
          <div className="flex  m-2 items-center justify-center gap-2">
            <Link
              target="_blank"
              to={movie.trailer}
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Watch Trailer
            </Link>
            {!movie.isDisabled && movie.link ? (
              <Link
                target="_blank"
                to={movie.link}
                className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
              >
                Book Now
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
