import React, { useState, useEffect } from 'react';
import { allMovies } from '../services/api';
import MovieCard from '../UI/MovieCard/MovieCard';
import images from '../constant/images';
import Spinner from '../UI/Spinner';
import Footer from '../components/Footer';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await allMovies();
      setMovies(response.data.movies);
      setLoading(false);
    };
    fetchMovies();
  }, []);
  useEffect(() => {
    if (search) {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.movieName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);
  return (
    <>
    <div className="flex flex-col bg-black text-white  items-center justify-center gap-10 w-full ">
      {loading ? (
        <Spinner />
      ) : (
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
          <h1 className="text-5xl text-center text-red mt-2 underline">
            Movies
          </h1>
          <input
            placeholder="Search"
            className="search_input"
            name="text"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="grid lg:grid-cols-4 gap-4 p-10">
            {search.length > 0 ? (
              filteredMovies.length > 0 ? (
                filteredMovies.map((movie, i) => {
                  return <MovieCard movie={movie} />;
                })
              ) : (
                <h1 className="text-5xl text-center text-red mt-2 underline">
                  No Movies Found
                </h1>
              )
            ) : (
              movies.reverse().map((movie, i) => {
                return <MovieCard movie={movie} />;
              })
            )}
          </div>
        </div>
      )}
    </div>
      <Footer />
</>
  );
};

export default Movies;
