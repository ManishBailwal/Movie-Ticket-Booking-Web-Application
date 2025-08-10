import React from 'react';
import images from '../constant/images';
const About = () => {
  return (
    <div className=" bg-black flex justify-center items-center  lg:h-full flex-col p-5 gap-5 overflow-hidden">
      <div className="bg-black flex justify-center items-center lg:h-full overflow-hidden ">
        <h1 className="text-5xl text-center text-white">
          About <span className="text-red">BookFlix</span>
        </h1>
      </div>
      <div className="bg-black flex flex-col justify-center items-center lg:h-full w-full mt-4 lg:flex-row overflow-hidden ">
        <div className="bg-black flex justify-center items-center w-full lg:h-full lg:w-1/2">
          <p className="text-xl  text-white p-5 text-center">
            BookFlix Private Limited is a visionary and a highly successful
            entertainment group established in 2012. Now bringing to you "SGL
            Miniplex" theatre with multiple screens and with a sturdy aim to
            empower the 2 E's of cinema- Entertainment & Employment. SGL
            Miniplex primarily aim at revolutionizing the viewer's experience by
            providing digitally beamed films in Full High Definition resolution,
            Ultra-modern digital sound and 3-D compatible technology with ala
            mode hardware & software..
          </p>
        </div>
        <div className="bg-black flex justify-center items-center lg:w-2/5 ">
          <img
            src={images.theater30}
            alt="theater"
            className=" border-2 border-white p-2 rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
