import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
const Footer = () => {
  let currentYear=new Date();
  currentYear=currentYear.getFullYear();
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex  items-center justify-center gap-10 bg-black text-white mt-6">
        <h1 className="text-5xl text-center text-red">Location</h1>
      </div>
      <div className="flex flex-col w-full lg:flex-row lg:mt-6">
        <div className="w-full text-white justify-center items-center text-center mt-2 flex flex-col p-4">
          <span className="text-red">Najibabad</span> Baba Complex,
          Najibabad,Uttar Pradesh,246732
          <a href="tel:+91 8126000108"> +91 8126000108</a>
          <a href="mailto:admin@sglminiplex.com">admin@sglminiplex.com</a>
          <div className="flex gap-2 mt-2">
            <Link
              target="_blank"
              to="https://www.facebook.com/sglminiplex"
              className="hover:text-red cursor-pointer"
            >
              <AiOutlineFacebook
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/sglminiplex/">
              <AiOutlineInstagram
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
            <Link target="_blank" to="https://twitter.com/MiniplexSgl">
              <AiOutlineTwitter
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
          </div>
          <Link
            target="_blank"
            to="https://www.google.com/maps/place/SGL+MINIPLEX/@29.6225923,78.3281761,17z/data=!4m14!1m7!3m6!1s0x390bdf5241532ffd:0xe4e9377619e46e8a!2sSGL+MINIPLEX!8m2!3d29.6225923!4d78.3303648!16s%2Fg%2F11sms0cm9t!3m5!1s0x390bdf5241532ffd:0xe4e9377619e46e8a!8m2!3d29.6225923!4d78.3303648!16s%2Fg%2F11sms0cm9t"
            className="bg-red text-white p-2 rounded-lg mt-2 w-1/2"
          >
            Get Direction
          </Link>
        </div>
        <div
          className="w-full text-white justify-center items-center text-center mt-2 flex flex-col p-4"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <span className="text-red font-bold">Dehradun</span> Kartikay Tower, GMS Road,
          Dehradun,248001
          <a href="tel:+91 1353564437"> +91 135-356-4437</a>
          <a href="tel:+91 8126000108"> +91 812-600-0108</a>
          <a href="mailto:admin@sglminiplex.com">admin@sglminiplex.com</a>
          <div className="flex gap-2 mt-2">
            <Link
              target="_blank"
              to="https://www.facebook.com/sglminiplex"
              className="hover:text-red cursor-pointer"
            >
              <AiOutlineFacebook
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/sglminiplex/">
              <AiOutlineInstagram
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
            <Link target="_blank" to="https://twitter.com/MiniplexSgl">
              <AiOutlineTwitter
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
          </div>
          <Link
            target="_blank"
            to="https://www.google.com/maps/place/Sikka+%26+Associates/@30.3158768,78.0089409,17z/data=!4m14!1m7!3m6!1s0x390929933032bd9d:0xdd0a737a68ce3585!2sSikka+%26+Associates!8m2!3d30.3158768!4d78.0111296!16s%2Fg%2F1pt_m11zs!3m5!1s0x390929933032bd9d:0xdd0a737a68ce3585!8m2!3d30.3158768!4d78.0111296!16s%2Fg%2F1pt_m11zs"
            className="bg-red text-white p-2 rounded-lg mt-2 w-1/2"
          >
            Get Direction
          </Link>
        </div>
      </div>
      <h1 className="text-white text-center mt-2">
        Copyright &copy; {currentYear} All rights reserved 
     </h1>
     <h1 className="text-white text-center mt-2">
         Developed by <Link to="http://arterns.in/"
        target="_blank"
          className="text-white underline"
        >Arterns Technologies Pvt Ltd</Link>
     </h1>

    </div>
  );
};

export default Footer;
