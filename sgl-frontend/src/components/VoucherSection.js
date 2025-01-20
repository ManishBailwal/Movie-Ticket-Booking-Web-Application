import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom';

import Confetti from 'react-confetti';
import { getVouchers } from '../services/api';

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getVouchers();
      setMovies(response.data.vouchers);
    };
    fetchMovies();
  }, []);
  return (
    movies.length > 0 && (
      <div className="my-10 bg-transparent w-full h-[50vh] lg:h-[80vh]">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoFocus={false}
          verticalSwipe={false}
          swipeable={false}
          showIndicators={false}
          dynamicHeight={false}
          interval={2000}
          className="w-full h-[50vh] lg:h-[80vh] "
        >
          {movies.map((movie, i) => {
            function getId(url) {
              const regExp =
                /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
              const match = url.match(regExp);

              return match && match[2].length === 11 ? match[2] : null;
            }
            const videoId = getId(movie.url);
            return (
              <div>
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  numberOfPieces={window.innerWidth / 2}
                  //             drawShape={ctx => {
                  // ctx.beginPath()
                  // for(let i = 0; i < 22; i++) {
                  //   const angle = 0.35 * i
                  //   const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                  //   const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                  //   ctx.lineTo(x, y)
                  // }
                  // ctx.stroke()
                  // ctx.closePath()
                  // }}
                  gravity={0.01}
                />

                <h1 className="text-5xl text-center text-white mt-10  gap-10">
                  <span className="text-red">Today's </span> Offer
                </h1>
                <div
                  key={movie._id}
                  className={`flex  flex-col-reverse lg:flex-row-reverse  mt-2
            bg-[url(${movie.image})] bg-cover bg-center bg-no-repeat bg-fixed border-separate border-2 border-golden
          `}
                >
                  <div className="flex items-center justify-center p-5 flex-col w-full ">
                    <h1 className="text-3xl font-bold  text-golden tracking-wide mb-10 ">
                      {movie.title}
                    </h1>
                    <p className="text-xl text-white p-5   rounded-3xl hover:border-red">
                      {movie.description}
                    </p>
                    <p className="text-3xl text-white p-2 mt-10">
                      Valid Till:
                      <span className="text-red ml-2 font-semibold ">
                        {new Date(movie.to).toDateString()}
                      </span>
                    </p>
                    <NavLink
                      to={movie.link}
                      className="text-xl  text-white p-3 mt-10 hover:text-red border-2 border-red rounded-3xl"
                    >
                      View More
                    </NavLink>
                  </div>
                  <div className="flex w-full justify-center p-2">
                    <div
                      className={`flex w-full h-[50vh] items-center justify-center  p-1 border-2 lg:w-2/5 ${
                        i % 2 === 0 ? 'border-white' : 'border-red'
                      }`}
                    >
                      {movie.isImage ? (
                        <img
                          src={movie.url}
                          alt="movie"
                          className="h-full w-full object-cover p-2 "
                        />
                      ) : (
                        <iframe
                          className="border-2 border-white p-2 rounded-lg w-80 h-80"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title="YouTube video player"
                          frameborder="1"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    )
  );
};

export default HeroSection;