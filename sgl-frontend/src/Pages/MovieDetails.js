import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/api';
import { Link } from 'react-router-dom';
import Spinner from '../UI/Spinner';
import Footer from '../components/Footer';
import MovieFeedback from '../components/MovieFeedback';
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  let response;
  useEffect(() => {
    const getMovie = async () => {
      response = await getMovieById(id);
      setMovie(response.data.movie);
      setFeedbacks(response.data.movie.feedback);
      setLoading(false);
    };
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex flex-col bg-black text-white  items-center justify-center gap-10 w-full ">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  ">
          <div className="flex flex-col items-center justify-center ">
            <img
              className="w-96 h-[500px] object-cover mt-4 "
              src={movie.image}
              alt={movie.movieName}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white mt-4">
              {movie.movieName}
            </h1>
            <h1 className="text-4xl font-bold text-white mt-4">
              {new Date(movie.releaseDate).toDateString()}
            </h1>
            <div className="flex  m-2 items-center justify-center gap-2">
              <Link
                target="_blank"
                to={movie.trailer}
                className="bg-red-500 text-red px-4 py-2 rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
              >
                Watch Trailer
              </Link>
              {!movie.isDisabled
              && movie.link
              ? (
                <Link
                  target="_blank"
                  to={movie.link}
                  className="bg-red-500 text-red px-4 py-2 rounded-lg mt-4 border-2 border-red "
                >
                  Book Now
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      )}
      <MovieFeedback feedbacks={feedbacks} movieId={id} />
      <Footer />
    </>
  );
};

export default MovieDetails;
