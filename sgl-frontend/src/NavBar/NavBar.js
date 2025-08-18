import React, { useState, useEffect } from 'react';
import images from '../constant/images';
import Drawer from '../UI/Drawer';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { allMovies } from '../services/api';

const NavBar = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await allMovies();
      setMovies(response.data.movies);
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
  const FilteredMovies = ({ filteredMovies }) => {
    useEffect(() => {
    }, [filteredMovies]);
    return (
      //make modal
      <div className="lg:grid  lg:grid-cols-4 flex flex-col p-10 items-center justify-center gap-2 z-50 bg-black w-full h-1/2 absolute top-20 left-1/2 transform -translate-x-1/2 lg:overflow-x-auto lg:flex-row">
        {filteredMovies.map((movie, i) => (
          <div
            key={i}
            className="grid flex-col items-center justify-center gap-2 grid-cols-1"
          >
            <img
              src={movie.image}
              alt={movie.movieName}
              className="h-60 w-40 rounded-lg"
            />
            <h2 className="text-white font-bold text-xl  hover:text-red hover:underline">
              {movie.movieName}
            </h2>
            <div className="flex">
            <NavLink to={`${movie.trailer}`} target="_blank">
              <button  className=" text-red font-bold text-xl  px-1 py-1 rounded border-2 border-red
            hover:bg-red hover:text-white gap-2 m-2">
                Watch Trailer
              </button>
            </NavLink>
            <NavLink to={`${movie.link}`} target="_blank">
              <button 
               className=" bg-red font-bold text-xl  px-1 py-1 rounded border-2 border-red  text-white m-2"
              >
                Book Now
              </button>
            </NavLink>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="flex justify-between bg-black border-b-2 border-gray px-3 ">
      {search.length > 0 && filteredMovies.length > 0 && (
        <FilteredMovies filteredMovies={filteredMovies} />
      )}
      <div className="flex lg:w-1/5 md:w-1/6 sm:justify-start xs:w-full justify-center items-center">
        <div className="flex items-center justify-around w-full">
        <NavLink to="/">
          <img
  src={images.logo}
  alt="BookFlix Logo"
  className="h-20 w-auto transform scale-125 transition-all duration-300"
/>
          </NavLink>
          
        </div>
      </div>
      <div className=" relative flex w-3/4 justify-end  items-center ">
        <input
          className="hidden lg:flex lg:bg-black lg:text-white lg:border lg:border-white lg:rounded-3xl lg:p-1 lg:w-1/3 lg:h-10"
          type="text"
          
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="absolute left-2 top-7 text-white flex flex-row justify-center items-center gap-2">
          
        <BsSearch
          className=" hidden lg:flex text-white text-2xl  border-white h-4 w-4 rounded-lg"
          scale={20}
        />
        <p>Search..........</p>
        </div>

        <div className="hidden xl:flex items-center justify-around w-2/3 ">
          <h2 className="text-white font-bold text-xl  hover:text-red hover:underline">
            <NavLink to="/">Home</NavLink>
          </h2>
          <h2 className="text-white font-bold text-xl  hover:text-red hover:underline">
            <NavLink to="/about">About</NavLink>
          </h2>
          <h2 className="text-white font-bold text-xl  hover:text-red hover:underline">
            <NavLink to="/movies">Movies</NavLink>
          </h2>
          <h2 className="text-white font-bold text-xl  hover:text-red hover:underline">
            <NavLink to="/gallery">Gallery</NavLink>
          </h2>
          <h2 className="text-white font-bold text-xl  hover:text-red hover:underline">
            <NavLink to="/businessmodel">Business Model</NavLink>
          </h2>
          {/* <h2 className="text-white font-bold text-xl  hover:text-red hover:underline">
            <NavLink to="/voucher">Offers</NavLink>
          </h2> */}
          <NavLink to="https://in.bookmyshow.com/explore/home/dehradun"
            target="_blank"
          >
          <button
               className=" bg-red font-bold text-xl  px-1 py-1 rounded border-2 border-red  text-white m-2"

          >
            Book Now
          </button>
          </NavLink>
        </div>
        <div className="flex xl:hidden items-center justify-around w-2/3 sm:w-1/3 xs:w-1/2">
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
