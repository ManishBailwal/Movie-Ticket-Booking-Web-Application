import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-[50vh] lg:h-[80vh] mt-10">
      <div
        className="animate-spin rounded-full h-32 w-32 border-b-2 border-t-2 border-white flex items-center justify-center

      "
      >
        <h1 className="text-xl font-bold  text-golden tracking-wide  ">
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default Spinner;
