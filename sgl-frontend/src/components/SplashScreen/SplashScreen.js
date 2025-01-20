import React from 'react';
import './SplashScreen.css';
const SplashScreen = () => {
  return (
    <div className="h-screen w-full z-50 flex items-center justify-center">
      <div className="pyramid-loader ">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
