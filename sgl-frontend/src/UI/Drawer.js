import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import images from '../constant/images';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { allMovies } from '../services/api';
import { useState, useEffect } from 'react';
export default function TemporaryDrawer() {
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
    useEffect(() => {}, [filteredMovies]);
    return (
      //make modal
      <div className="">
        {filteredMovies.map((movie, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2 bg-black"
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
                <button
                  className=" text-red font-bold text-xl px-1 py-1 rounded border-2 border-red
            hover:bg-red hover:text-white gap-2 m-2"
                >
                  Watch Trailer
                </button>
              </NavLink>
              <NavLink to={`${movie.link}`} target="_blank">
                <button
                  // className=" text-white bg-red font-bold text-xl  px-1 py-1 rounded border-2   m-2"
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

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,

        backgroundColor: 'black',
        position: 'relative',
      }}
      onClick={toggleDrawer(anchor, false)}
    >
      <div className="flex flex-col justify-center items-center bg-black">
        <div className="flex w-full justify-evenly items-center">
          <img src={images.logo} alt="Logo" border="0" className="w-30 h-20" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <NavLink
            to="/"
            className="text-white text-2xl p-2 hover:text-red hover:underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white text-2xl p-2 hover:text-red hover:underline"
          >
            About
          </NavLink>
          <NavLink
            to="/movies"
            className="text-white text-2xl p-2 hover:text-red hover:underline"
          >
            Movies
          </NavLink>
          <NavLink
            to="/gallery"
            className="text-white text-2xl p-2 hover:text-red hover:underline"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/businessmodel"
            className="text-white text-2xl p-2 hover:text-red hover:underline"
          >
            Business Model
          </NavLink>
          {/* <NavLink
            to="/voucher"
            className="text-white text-2xl p-2 hover:text-red hover:underline"
          >
            Offers
          </NavLink> */}
        </div>
      </div>
    </Box>
  );

  return (
    <div className="">
      <GiHamburgerMenu
        color="white"
        className="text-3xl"
        onClick={toggleDrawer('top', true)}
      />
      <Drawer
        anchor={'top'}
        open={state['top']}
        className="bg-black"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {list('top')}
        <div className=" bg-black">
          <div className="flex  justify-center items-center mb-5 mt-2 bg-black">
            <input
              autoFocus
              className=" flex bg-black text-white border-2 border-white rounded-lg p-1 w-4/5 h-10"
              type="text"
              id="search"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <BsSearch
              className=" flex text-white text-2xl ml-2 border-2 border-white h-10 w-10 p-2 rounded-lg"
              scale={20}
            />
          </div>
          <div className=" w-full overflow-y-auto">
            {search.length > 0 && filteredMovies.length > 0 ? (
              <FilteredMovies filteredMovies={filteredMovies} />
            ) : null}
          </div>
        </div>
      </Drawer>
    </div>
  );
}
