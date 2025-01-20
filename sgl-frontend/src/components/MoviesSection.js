import React, { useState, useEffect } from 'react';
import { allMovies } from '../services/api';
import Card from '../UI/Card/Card';
import Spinner from '../UI/Spinner';

const MoviesSection = ({ tag, title, reverse, useFlex }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await allMovies();
      setMovies(
        response.data.movies.filter(
          (movie) => movie.tag === tag && movie.isDisabled === false
        )
      );
      setLoading(false);
    };
    fetchMovies();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex flex-col bg-black text-white  items-center justify-center gap-10 w-full ">
          <Spinner />
        </div>
      ) : (
        <div className="flex my-10 bg-black text-white flex-col items-center justify-center gap-10 w-full p-2">
          <h1 className="text-5xl text-center text-red">{title}</h1>
          <div
            className={
              !useFlex
                ? ' flex flex-col lg:w-11/12 justify-center items-center gap-4  lg:flex-row no-scrollbar overflow-x-auto scrollbar-hide '
                : 'lg:grid flex flex-col  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-11/12  justify-center items-center'
            }
          >
            {reverse
              ? movies
                  .reverse()
                  .map((movie, i) => <Card key={i} movie={movie} />)
              : movies.map((movie, i) => <Card key={i} movie={movie} />)}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesSection;
