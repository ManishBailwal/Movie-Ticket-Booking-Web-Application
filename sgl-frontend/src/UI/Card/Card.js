import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
const Card = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie._id}`}>
        <div className="card border-2 border-red rounded-md">
          <div className="content">
            <div
              className="back "
              style={{
                backgroundImage: `url(${movie.image})`,
              }}
            >
              <div
                className="back-content"
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundSize: 'cover',
                  objectFit: 'cover',
                }}
              >
                <strong>{movie.movieName}</strong>
              </div>
            </div>
            <div className="front">
              <div className="img">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
            </div>
            {/* <div className="front-content">
            <small className="badge">{}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>

                  </strong>
                </p>
              </div>
              <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
            </div>
          </div> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
