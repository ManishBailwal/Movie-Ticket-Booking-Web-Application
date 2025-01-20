import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { getStats } from '../services/api';
const Counter = ({ icon, text, show,runTill }) => {
  return (
    <CountUp
      start={0}
      end={runTill}
      duration={2}
      separator=" "
      decimals={1}
      decimal="."
      delay={0}
      // scrollSpyOnce={true}
      enableScrollSpy={true}
      className="text-4xl font-bold text-white "
    >
      {({ countUpRef }) => (
        <div className="flex items-center justify-center rounded-xl ">
          <div className=" rounded-md w-300 border-2 border-red p-5 gap-2 flex flex-col-reverse text-white text-center hover:border-8 hover:border-white hover:text-blue">
            <h1 className="text-2xl font-bold  ">{text}</h1>
            <i className={`fa ${icon} text-4xl`}></i>

            {show && (
              <span
                className="text-2xl font-bold"
                ref={countUpRef}
              ></span>
            )}
          </div>
        </div>
      )}
    </CountUp>
  );
};

const CompleteHook = () => {
  const [stats, setStats] = useState({
    totalVisitors: 0,
    totalTicketsSold: 0,
    totalRating: 0,
  });
  useEffect(() => {
    const fetchStats = async () => {
      const response = await getStats();
      console.log(response.data.stats[0]);
      setStats(response.data.stats[0]);
    };
    fetchStats();
  }, []);
  return (
    <div className="flex w-full justify-around flex-col items-center p-4 tracking-wider ">
      <h1 className="text-5xl  p-10 text-red text-center">Visitor Counter</h1>
      <div className="md:w-2/3 flex flex-col justify-between  md:flex-row gap-4">
        {/* <Counter icon={'fa-ticket'} text={'Tickets Sold'} show

          runTill={parseInt(stats.totalTicketsSold)}
        /> */}
        <Counter show icon={'fa-group'} text={'Visitors'}
          runTill={stats.totalVisitors}
         />
        <Counter show icon={'fa-star'} text={'Rating'}
          runTill={stats.totalRating}
         />
      </div>
    </div>
  );
};

export default CompleteHook;
