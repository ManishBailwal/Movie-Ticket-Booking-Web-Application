import React from 'react';
import Footer from '../components/Footer';
import images from '../constant/images';
import { Link } from 'react-router-dom';
const ImageFirst = () => {
  return (
    <>
      <div className="bg-black flex justify-center items-center lg:h-full "></div>
      <div className="bg-black flex flex-col justify-center items-center lg:h-full w-full mt-4 lg:flex-row">
        <div
          className="bg-black flex flex-col justify-center items-center lg:w-full lg:flex-col"
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          <h1 className="text-5xl text-center text-white">
            OUR <span className="text-red">BUSINESS MODEL</span>
          </h1>
          <p className="text-lg  text-white p-5 text-center ">
            Your premier destination for quality movie entertainment. We are a
            state-of-the-art movie theater located in the heart of the city,
            offering a comfortable and luxurious cinematic experience to our
            valued customers.
          </p>
          <p className="text-lg  text-white p-5 text-center ">
            Our mission is to provide our customers with a world-className
            entertainment experience that they will cherish for years to come.
            From the latest blockbuster movies to the best in independent
            cinema, we have it all. We are committed to providing a diverse
            range of movies that cater to all tastes and preferences.
          </p>
          <p className="text-lg  text-white p-5 text-center ">
            At SGL Miniplex, we pride ourselves on providing our customers with
            the highest quality audio and visual experience possible. Our
            theater is equipped with the latest technology, including Dolby
            Atmos sound systems and 4K digital projectors, ensuring that every
            movie is presented with stunning clarity and breathtaking sound
            quality.
          </p>
          <p className="text-lg  text-white p-5 text-center ">
            At SGL Miniplex, we believe that movies have the power to inspire,
            entertain, and connect people from all walks of life. We are
            dedicated to bringing the magic of cinema to our community, and we
            look forward to welcoming you to our theater for your next
            movie-going adventure.
          </p>
        </div>
      </div>
    </>
  );
};

const TextFirst = () => {
  return (
    <>
      <div className="bg-black flex justify-center items-center lg:h-full ">
        <h1 className="text-5xl text-center text-white">
          About <span className="text-red">SGL Miniplex Private Limited</span>
        </h1>
      </div>
      <div className="bg-black flex flex-col justify-center items-center lg:h-full w-full mt-4 lg:flex-row">
        <div className="bg-black flex justify-center items-center w-full lg:h-full lg:w-1/2">
          <p className="text-xl  text-white p-5 text-center ">
            SGL Miniplex Private Limited is a visionary and a highly successful
            entertainment group established in 2012. Now bringing to you "SGL
            Miniplex" theatre with multiple screens and with a sturdy aim to
            empower the 2 E's of cinema- Entertainment & Employment. SGL
            Miniplex primarily aim at revolutionizing the viewer's experience by
            providing digitally beamed films in Full High Definition resolution,
            Ultra-modern digital sound and 3-D compatible technology with ala
            mode hardware & software..
          </p>
        </div>
        <div className="bg-black flex justify-center items-center w-full ">
          <div className="bg-black flex justify-center items-center border-2 border-white ">
            <img
              src={images.theater2}
              alt="theater"
              className=" border-2 border-white p-2 rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Part = () => {
  return (
    <div className="flex flex-col  items-start lg:p-10">
      <h1 className="p-4 text-5xl text-white tracking-widest underline sm:mt-10">
        FRANCHISE OWN COMPANY OPERATED
      </h1>
      {/* <div className="flex lg:flex-row flex-col  items-start p-10 -mt-10">
        <h2 className="text-red text-3xl underline">Investment :</h2>
        <p className="text-white text-2xl px-4 pt-1">
          {`By Company N.A.  and   By Franchisee 100%.`}
        </p>
      </div>
      <div className="flex  lg:flex-row flex-col items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Operation :</h2>
        <p className="text-white text-2xl px-4 pt-1">{`By Company`}</p>
      </div>
      <div className="flex lg:flex-row flex-col  items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Fees :</h2>
        <p className="text-white text-2xl px-4 pt-1">{`Not Applicable`}</p>
      </div>
      <div className="flex lg:flex-col flex-col  items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Investment Including:-</h2>
        <p className="text-white text-2xl px-4 pt-1">
          FoyInvestment Includes: All Architect Fees & Interior Designer Fees,
          Planning & Drawings, Air Conditioner (Duct/Cassette Unit), Loungers
          Sofa Push Recliner Chairs, All Kinds Of Electrical Works Inside The
          Auditorium, Surround Sound Systeml, 5 Layer Acoustics, Screen
          Structure Fabrication, Floor Carpet & Wall Fabric, Tv Screens (B.o., &
          F&b).
        </p>
        <p className="text-white text-2xl px-4 pt-1">
          P.O.S. Computers Along With Licensed Software, Server With Ups, IT
          server, Inverter, Phase changer, Computers Hd Laser Projector, V-Sat
          Equipments, F&B Machinery, Signage's & Cctv, Hoarding, Ticketing And
          F&b Printer, Swipe Machine, Initial Tickets, Promotional Offers And &
          Social Media, Support For F&B Set-up, Including plant and machinery,
          Support For Licensing Process & Documentation, Training & Orientation
          Module, Experienced A Round Support System.
        </p>
      </div> */}
    </div>
  );
};
const Part2 = () => {
  return (
    <div className="flex flex-col  items-start lg:p-10 lg:-mt-20">
      <h1 className=" p-4 text-5xl text-white tracking-widest underline">
        FRANCHISE OWN FRANCHISE OPERATED
      </h1>
      {/* <div className="flex lg:flex-row flex-col  items-start p-10 -mt-10">
        <h2 className="text-red text-3xl underline">Investment :</h2>
        <p className="text-white text-2xl px-4 pt-1">
          {`By Company N.A.  and   By Franchisee 100%.`}
        </p>
      </div>
      <div className="flex  lg:flex-row flex-col items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Operation :</h2>
        <p className="text-white text-2xl px-4 pt-1">{`By Company`}</p>
      </div>
      <div className="flex lg:flex-row flex-col  items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Fees :</h2>
        <p className="text-white text-2xl px-4 pt-1">
          {`Applicable* `} Fees and Revenue Sharing on Business
        </p>
      </div> */}
    </div>
  );
};
const Part3 = () => {
  return (
    <div className="flex flex-col  items-start lg:p-10 lg:-mt-20 ">
      <h1 className="text-5xl p-4 underline tracking-widest text-white ">
        Management Contract
      </h1>
      {/* <div className="flex lg:flex-row flex-col  items-start p-10 -mt-10">
        <h2 className="text-red text-3xl underline">Investment :</h2>
        <p className="text-white text-2xl px-4 pt-1">
          {`By Company N.A.  and   By Franchisee 100%.`}
        </p>
      </div>
      <div className="flex lg:flex-row flex-col  items-start p-10 lg:-mt-20 -mt-20">
        <h2 className="text-red text-3xl underline">Operation :</h2>
        <p className="text-white text-2xl px-4 pt-1">{`By Company`}</p>
      </div>
      <div className="flex lg:flex-row flex-col  items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Operational Expenses :</h2>
        <p className="text-white text-2xl px-4 pt-1">{`BY FRANCHISE 100%`}</p>
      </div>
      <div className="flex lg:flex-row flex-col  items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Fees :</h2>
        <p className="text-white text-2xl px-4 pt-1">
          {`Applicable* `} Fees and Revenue Sharing
        </p>
      </div>
      <div className="flex lg:flex-col flex-col  items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Support For :</h2>
        <p className="text-white text-2xl px-4 pt-1">
          All Architect Fees & Interior Designer Fees, Planning, F&B Set-up.
          Support For Licensing Process & Documentation, Training & Orientation
          Module, Experienced A Round Support System.
        </p>
      </div>
      <div className="flex lg:flex-col flex-col  items-start p-10 -mt-20">
        <h2 className="text-red text-3xl underline">Terms :</h2>
        <p className="text-white text-2xl px-4 pt-1">
          •Investment Excludes: Civil Work, Washrooms (Fully Operational, Elect
          Connection, Power Backup Work, Water Supply, Plumbing Work, Base
          Structure for Seats, All NOC from local authority,(i.e. Fire,
          Municipal, NH, Electricity, Police etc.)
        </p>
        <p className="text-white text-2xl px-4 pt-1">
          •Cost of Cinema/Multiplex approx Rs. 100000/- per seat (all including)
        </p>
        <p className="text-white text-2xl px-4 pt-1">
          •Approx height required 16ft min. Auditorium size required approx 1500
          sq. Ft. each Auditorium.
        </p>
        <p className="text-white text-2xl px-4 pt-1">
          •After the contact completed: Company handover auditorium to owner in
          Running, Operational and Maintain condition.*
        </p>
        <p className="text-white text-2xl px-4 pt-1">
          •Contract time Minimum 12 year
        </p>
        <p className="text-white text-2xl px-4 pt-1">
          •Registered agreement expenses 50:50 for both the party
        </p>
      </div> */}
    </div>
  );
};

const Card = ({ text }) => {
  return (

    <div className="flex flex-col items-center justify-center border-2 border-white lg:w-1/3 text-center p-5 hover:cursor-pointer">
    <Link to="https://api.whatsapp.com/send?phone=8126000108&text=Hi%20I%20want%20to%20know%20more%20about%20your%20services" target="_blank">
          <h1 className="text-3xl text-white hover:text-red">{text}</h1>
    </Link>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="  flex justify-center items-center  lg:h-full flex-col gap-5 overflow-hidden">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
          <img
            src={images.aboutheader}
            alt="about"
            className="w-full opacity-100 p-2 brightness-200 contrast-200 saturate-200"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
        <div className="bg-black flex flex-col   lg:h-full w-full mt-4 lg:flex-row">
          <div
            className="bg-black flex flex-col   lg:w-full lg:flex-col"
            data-aos="flip-down"
            data-aos-duration="1500"
          >
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl text-center text-white">
                OUR <span className="text-red">BUSINESS MODEL</span>
              </h1>
            </div>
            {/* <Part />
          <Part2 />
          <Part3 /> */}
            <ul
              className="list-disc text-white flex flex-col lg:flex-row w-full mt-10"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              {/* <li className=" p-4 text-4xl text-white tracking-wide underline hover:text-red" >FRANCHISE OWN COMPANY OPERATED</li>
          <li className=" p-4 text-4xl text-white tracking-wide underline hover:text-red">FRANCHISE OWN FRANCHISE OPERATED</li>
          <li className=" text-4xl p-4 underline tracking-wide text-white hover:text-red">Management Contract</li> */}
              <Card text={'FRANCHISE OWN COMPANY OPERATED'} />
              <Card text={'MANAGEMENT CONTRACT'} />
              <Card text={'FRANCHISE OWN FRANCHISE OPERATED'} />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
