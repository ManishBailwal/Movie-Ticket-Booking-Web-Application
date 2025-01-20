import React, { useState } from 'react';

const Star = ({ fill = 'none',setRating,setHover,i }) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 cursor-pointer text-golden"
        fill={fill}
        viewBox="0 0 24 24"
        stroke="currentColor"
        onMouseEnter={() => setHover(i)}
        onMouseLeave={() => setHover(null)}
        onClick={() => setRating(i)}
        >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 1l3.364 6.364L22 9.728l-5.455 5.454L16.09 23 12 17.636 7.91 23l1.636-7.818L2 9.728l6.636-.364L12 1z"
        />
    </svg>

  );
};

const Rating = ({setStarRating}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const arr = [1, 2, 3, 4, 5];
  setStarRating(rating+1)
  return (
    <div className="flex items-center mb-5">
      {arr.map((star, i) => {
        return <Star

        setRating={setRating}
        setHover={setHover}
        key={i}
        fill={rating >= i || hover > i ? 'yellow' : 'none'}
        i={i}
        />;
      })}
    </div>
  );
};

export default Rating;
