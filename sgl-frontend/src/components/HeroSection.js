import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { allMovies } from '../services/api';
import Spinner from '../UI/Spinner';
const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-golden cursor-pointer"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-golden bg-golden"
        strokeWidth={2}
        d="M12 1l3.364 6.364L22 9.728l-5.455 5.454L16.09 23 12 17.636 7.91 23l1.636-7.818L2 9.728l6.636-.364L12 1z"
      />
    </svg>
  );
};
const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await allMovies();
      setMovies(
        response.data.movies.filter(
          (movie) =>
            (movie.tag === 'ComingSoon' || movie.tag === 'PlayingNow') &&
            movie.isDisabled === false
        )
      );
      setLoading(false);
    };
    fetchMovies();
  }, []);


  const calculateAverageRating = (feedback) => {
    let totalRating = 0;
    feedback.forEach((feedback) => {
      totalRating += feedback.rating;
    });
    return totalRating / feedback.length;
  };

  return loading ? (
    <div className="flex justify-center items-center w-full h-[50vh] lg:h-[80vh]">
      <Spinner />
    </div>
  ) : (
    movies.length > 0 && (
      <div className="bg-transparent w-full h-[50vh] lg:h-[80vh]">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoFocus={false}
          verticalSwipe={false}
          swipeable={false}
          transitionTime={1000}
          showIndicators={false}
          dynamicHeight={false}
          interval={3000}
          className="w-full h-[50vh] lg:h-[80vh] "
        >
          {movies.map((movie, i) => (
            <div
              key={movie._id}
              className={`flex  flex-col-reverse h-auto lg:flex-row  mt-2
            bg-[url(${movie.image})] bg-cover bg-center bg-no-repeat bg-fixed
          `}
            >
              <div className="flex items-center justify-center p-5 flex-col w-full ">
                <h1 className="text-5xl font-bold  text-golden tracking-wide mb-2 ">
                  {movie.movieName}
                </h1>
                <p className="text-2xl text-white p-5   rounded-3xl hover:border-red">
                  {movie.description}
                </p>
                <p className="text-5xl text-white p-2 mt-10">
                  Release Date:
                  <span className="text-red ml-2 font-semibold ">
                    {new Date(movie.releaseDate).toDateString()}
                    {new Date(movie.releaseDate).getTime() >
                    new Date().getTime()
                      ? '*'
                      : null}
                  </span>
                </p>
                { movie.feedback.length > 0 ? (
                  <>


                <p className="text-5xl text-white p-2">
                  Rating:
                  <span className="text-red ml-2 font-semibold ">
                    {movie.feedback.length > 0
                      ? calculateAverageRating(movie.feedback).toFixed(1)
                      : null}
                      /5
                  </span>
                </p>
                <p className="text-5xl text-white p-2 flex">
                {
                  [...Array(Math.floor(calculateAverageRating(movie.feedback))).keys()].map((i) => (
                    <Star key={i} />
                  ))
                }
                </p>
                </>
                ) : null}
              </div>
              <div className="flex w-full justify-center p-2">
                <div
                  className={`flex w-full  items-center justify-center  p-1 border-2 lg:w-4/5 ${
                    i % 2 == 0 ? 'border-white' : 'border-red'
                  }`}
                >
                  <img
                    src={movie.image}
                    alt="movie"
                    style={{height:`calc(100vh - 140px)`}}
                    className=" w-full object-contain p-2 "
                  />
                </div>
              </div>

            </div>
          ))}
        </Carousel>
      </div>
    )
  );
};

export default HeroSection;
