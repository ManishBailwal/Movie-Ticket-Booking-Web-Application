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
          <span className="text-red">Dehradun</span> RajPur Road Dehradun,Uttarakhand,248001
          <a href="tel:+91 8126000108"> +91 6397308332</a>
          <a href="mailto:admin@sglminiplex.com">contact@bookflix.com</a>
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
          
        </div>
        <div
          className="w-full text-white justify-center items-center text-center mt-2 flex flex-col p-4"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <span className="text-red font-bold">Dehradun</span> Raipur Road, Dehradun,
          Uttarakhand,248001
          <a href="tel:+91 1353564454"> +91 135-356-4454</a>
          <a href="tel:+91 8126000107"> +91 812-600-01007</a>
          <a href="mailto:admin@sglminiplex.com">info@bookflix.com</a>
          <div className="flex gap-2 mt-2">
            <Link
              target="_blank"
              to="https://www.facebook.com"
              className="hover:text-red cursor-pointer"
            >
              <AiOutlineFacebook
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/">
              <AiOutlineInstagram
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
            <Link target="_blank" to="https://twitter.com/">
              <AiOutlineTwitter
                size={30}
                className="hover:text-red cursor-pointer"
              />
            </Link>
          </div>
          
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
