import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { getMovieById } from '../services/api';
import BasicModal from '../UI/MovieFeedbackModal/MovieFeedbackModal';
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
        className="text-golden"
        strokeWidth={2}
        d="M12 1l3.364 6.364L22 9.728l-5.455 5.454L16.09 23 12 17.636 7.91 23l1.636-7.818L2 9.728l6.636-.364L12 1z"
      />
    </svg>
  );
};
const Feedback = (props) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await getMovieById(props.movieId);
      setFeedbacks(
        response.data.movie.feedback.filter(
          (feedback) => feedback.isDisabled === false
        )
      );
    };
    fetchFeedbacks();
  }, []);

  return (
    <div
      className="flex bg-black text-white flex-col items-center justify-center gap-5 mt-10"
      data-aos="fade-up-right"
      data-aos-duration="1500"
    >
      <h1 className="text-5xl text-center text-red">Movie Feedbacks</h1>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoFocus={false}
        swipeable={false}
        verticalSwipe={false}
        showIndicators={false}
        dynamicHeight={false}
        transitionTime={1000}
        interval={3000}
        className="w-full h-[50vh] lg:h-[80vh] "
      >
        {feedbacks.map((feedback, i) => (
          <div key={i}>
            <h1 className="text-2xl text-center z-10">{feedback.feedback}</h1>
            <h3 className="text-2xl text-center z-10">- {feedback.name}</h3>
            <div className="flex items-center justify-center gap-5 z-10">
              {[...Array(feedback.rating)].map((star, i) => {
                return <Star key={i} />;
              })}
            </div>
          </div>
        ))}
      </Carousel>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl text-center  p-3 ">
          How was your experience with the movie?
        </h1>
        <button className="bg-red-500 text-white  rounded-lg mt-4 border-2 border-red hover:text-red hover:border-white ">
          {showModal ? (
            <BasicModal
              setShowModal={setShowModal}
              showModal={showModal}
              movieId={props.movieId}
            />
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 text-white  rounded-lg  p-4 border-2 border-red hover:text-red hover:border-white "
            >
              Give Feedback
            </button>
          )}
        </button>
      </div>
    </div>
  );
};

export default Feedback;
