import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaFilm,
} from 'react-icons/fa';
import images from '../constant/images';
const VistingCard = () => {
  const [hoverIcon, setHoverIcon] = useState('FaFilm');

  const handleHover = (icon) => {
    setHoverIcon(icon);
  };
  const handleHoverOut = () => {
    setHoverIcon(null);
  };

  const HoverComponent = () => {
    switch (hoverIcon) {
      case 'FaInstagram':
        return (
          <div className="flex flex-col items-center justify-center">
            <FaInstagram className="text-4xl text-white" />
            <p className="text-white">Instagram</p>
            <p className="text-white">This is our Instagram page</p>
            <Link
              target="_blank"
              to="https://www.instagram.com/sglminiplex/"
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Follow
            </Link>
          </div>
        );
      case 'FaFacebook':
        return (
          <div className="flex flex-col items-center justify-center gap-3">
            <FaFacebook className="text-4xl text-white" />
            {/* <p className="text-white">Facebook</p> */}
            <p className="text-white">This is our Facebook page</p>
            <Link
              target="_blank"
              to="https://www.facebook.com/sglminiplex/"
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Follow
            </Link>
          </div>
        );
      case 'FaEnvelope':
        return (
          <div className="flex flex-col items-center justify-center">
            <FaEnvelope className="text-4xl text-white" />
            <p className="text-white">Email</p>
            <p className="text-white">This is our Email</p>
            <Link
              target="_blank"
              to="mailto:
                "
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Email
            </Link>
          </div>
        );
      case 'FaEnvelopeOpenText':
        return (
          <div className="flex flex-col items-center justify-center">
            <FaEnvelopeOpenText className="text-4xl text-white" />
            <p className="text-white">Email</p>
            <p className="text-white">This is our Email</p>
            <Link
              target="_blank"
              to="mailto:admin@sglminiplex.com"
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Email
            </Link>
          </div>
        );
      case 'FaTwitter':
        return (
          <div className="flex flex-col items-center justify-center">
            <FaTwitter className="text-4xl text-white" />
            <p className="text-white">Twitter</p>
            <p className="text-white">This is our Twitter page</p>
            <Link
              target="_blank"
              to="https://twitter.com/MiniplexSgl"
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Follow
            </Link>
          </div>
        );
      case 'FaWhatsapp':
        return (
          <div className="flex flex-col items-center justify-center">
            <FaWhatsapp className="text-4xl text-white" />
            <p className="text-white">Whatsapp</p>
            <p className="text-white">This is our Whatsapp</p>
            <Link
              target="_blank"
              to="https://api.whatsapp.com/send?phone=8126000108"
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Whatsapp
            </Link>
          </div>
        );
      case 'FaPhone':
        return (
          <div className="flex flex-col items-center justify-center">
            <FaPhone className="text-4xl text-white" />
            <p className="text-white">Phone</p>
            <p className="text-white">This is our Phone</p>
            <Link
              target="_blank"
              to="tel:+91 1353564437"
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Call
            </Link>
          </div>
        );
      case 'FaMapMarkerAlt':
        return (
          <div className="flex flex-col items-center justify-center">
            <FaMapMarkerAlt className="text-4xl text-white" />
            <p className="text-white">Address</p>
            <p className="text-white">This is our Address</p>
            <Link
              target="_blank"
              to="https://www.google.com/maps/place/SGL+MINIPLEX/@29.6225923,78.3281761,17z/data=!4m14!1m7!3m6!1s0x390bdf5241532ffd:0xe4e9377619e46e8a!2sSGL+MINIPLEX!8m2!3d29.6225923!4d78.3303648!16s%2Fg%2F11sms0cm9t!3m5!1s0x390bdf5241532ffd:0xe4e9377619e46e8a!8m2!3d29.6225923!4d78.3303648!16s%2Fg%2F11sms0cm9t"
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Address
            </Link>
          </div>
        );
      case 'FaFilm':
        return (
          <div className="flex flex-col items-center justify-center">
            <FaFilm className="text-4xl text-white" />
            <p className="text-white">Franchise</p>
            <h2 className="text-white">We provide franchise</h2>
            <ul className="text-white text-center gap-10 flex flex-col">
              <li className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50">
                FRANCHISE OWN COMPANY OPERATED
              </li>
              <li className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50">
                MANAGEMENT CONTRACT
              </li>
              <li className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50">
                FRANCHISE OWN FRANCHISE OPERATED
              </li>
            </ul>
            <Link
              target="_blank"
              to="tel:+91 1353564437"
              className="bg-red-500 text-red px-4 py-2 font-bold rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
            >
              Call
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className=" bg-gray-900 bg-opacity-50 bg-fixed bg-no-repeat bg-center object-fill backdrop-blur"
      style={{
        backgroundImage: `url(${images.theater6})`,
        backgroundSize: 'cover',
        objectFit: 'cover',
        // filter: 'blur(8px)',
      }}
    >
      {/* <img src={images.theater6} alt="" /> */}

      <div
        id="main-content"
        className="flex flex-col items-center justify-center min-h-screen p-6 text-lg text-white bg-gradient-to-br shadow-2xl

"
        style={{
          webkitFilter: 'blur(0px)',
        }}
      >
        <div
          id="visitenkarte"
          className="flex flex-col h-auto max-w-full gap-8 p-6 m-6 bg-gray-900 border-8 border-blue shadow-4xl rounded-lg w-96 backdrop-blur-2xl bg-opacity-70

           bg-fixed bg-no-repeat bg-center object-fill bg-black
          "
        >
          <div
            id="header"
            className="flex flex-wrap gap-4 flex-col justify-center items-center"
          >
            <img
              id="portrait"
              src={images.logo}
              alt="Singer"
              x-data="{ bigPhoto: false }"
              className="p-2 w-42 rounded-full border-4 border-blue  cursor-pointer hover:shadow-2xl  hover:scale-125 transform transition-all duration-500 ease-in-out object-fit hover:w-40 hover:h-40"
            />
            <div
              id="info"
              className="flex flex-col flex-wrap justify-center text-center"
            >
              <h1 id="name" className="pb-2 text-3xl font-bold">
                SGL Miniplex
              </h1>
              <small
                id="profession"
                className="pt-2 text-lg italic border-t-4 border-blue"
              >
                Best Cinema Around You
              </small>
            </div>
          </div>
          <div id="tagline" className="text-center">
            <p>
              SGl Miniplex Movie Hall is a modern cinema chain that offers a
              unique movie-watching experience with its state-of-the-art sound
              and projection systems.
            </p>
          </div>
          <div id="social" x-data="{ tab: 'mail' }">
            <div
              id="social--collapsed"
              className=" gap-5 py-6 text-3xl text-blue border-t-4 border-blue place-items-center flex justify-center items-center flex-wrap"
            >
              <span title="Film">
                <FaFilm
                  onMouseOver={() => {
                    setHoverIcon('FaFilm');
                  }}
                />
              </span>
              <span title="YouTube">
                <FaFacebook
                  onMouseOver={() => {
                    setHoverIcon('FaFacebook');
                  }}
                />
              </span>
              <span title="Instagram">
                <FaInstagram
                  onMouseOver={() => {
                    setHoverIcon('FaInstagram');
                  }}
                />
              </span>
              <span title="Twitter">
                <FaTwitter
                  onMouseOver={() => {
                    setHoverIcon('FaTwitter');
                  }}
                />
              </span>

              <span title="SoundCloud">
                <FaEnvelope
                  onMouseOver={() => {
                    setHoverIcon('FaEnvelope');
                  }}
                />
              </span>
              <span title="WhatsApp">
                <FaWhatsapp
                  onMouseOver={() => {
                    setHoverIcon('FaWhatsapp');
                  }}
                />
              </span>
              <span title="Phone">
                <FaPhone
                  onMouseOver={() => {
                    setHoverIcon('FaPhone');
                  }}
                />
              </span>
              <span title="Address">
                <FaMapMarkerAlt
                  onMouseOver={() => {
                    setHoverIcon('FaMapMarkerAlt');
                  }}
                />
              </span>
            </div>
            {hoverIcon && (
              <div
                id="hover-component"
                className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-2xl"
              >
                <HoverComponent />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistingCard;
