import React, { useState, useEffect } from 'react';
import images from '../constant/images';
import Footer from '../components/Footer';
import { allGalleries } from '../services/api';
import Spinner from '../UI/Spinner';
const ImageFirst = () => {
  return (
    <>
      <div className="bg-black flex justify-center items-center lg:h-full ">
        <h1 className="text-5xl text-center text-white">
          Gallery <span className="text-red">Of SGL</span>
        </h1>
      </div>
    </>
  );
};

const ImagePopup = ({ image, close }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center"
      onClick={close}
    >
      <div className="relative  w-full h-full flex justify-center items-center">
        <img src={image} alt="" className="object-fill lg:w-4/5 lg:h-4/5 " />
        <span
          className="absolute top-0 right-0 text-3xl text-white cursor-pointer"
          onClick={close}
        >
          &times;
        </span>
      </div>
    </div>
  );
};

const About = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const arr = [];
  for (let i = 1; i <= 22; i++) {
    arr.push({ url: images['theater' + i], isImage: true });
  }
  useEffect(() => {
    allGalleries().then((res) => {
      // setGalleries((prev) => [...prev, ...res.data.gallery, ...arr]);
      //create SET
      const set = new Set([...res.data.gallery, ...arr]);
      //create array from set
      const array = [...set];
      setGalleries(array);

      setLoading(false);
    });
  }, []);

  return (
    <>
    {
      popup && <ImagePopup image={popup} close={() => setPopup(false)} />
    }
      <div className=" bg-black flex justify-center items-center  lg:h-full flex-col p-5 gap-5 h-auto">
        {loading ? (
          <div className="flex flex-col bg-black text-white  items-center justify-center gap-10 w-full ">
            <Spinner />
          </div>
        ) : (
          <div className=" bg-black flex justify-center items-center  lg:h-full flex-col p-5 gap-5 h-auto">
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
            <ImageFirst />
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 ">
              <div
                className={`flex flex-col justify-center items-center gap-5   lg:grid lg:grid-cols-3   lg:gap-5`}
              >
                {galleries.map((gallery) => {
                  function getId(url) {
                    const regExp =
                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                    const match = url.match(regExp);

                    return match && match[2].length === 11 ? match[2] : null;
                  }
                  const videoId = getId(gallery.url);
                  return (
                    <div
                      className={`flex flex-col justify-center items-center gap-5 `}
                      key={gallery._id}
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      onClick={() => setPopup(gallery.url)}
                    >
                      {gallery.isImage ? (
                        <img src={gallery.url} alt="" className="cursor-pointer w-80 h-80 p-1 hover:shadow-2xl hover:border-transparent hover:scale-110 transform transition-all duration-500 ease-in-out" />
                      ) : (
                        <iframe
                          className="border-2 border-white p-2 rounded-lg w-80 h-80"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title="YouTube video player"
                          frameborder="1"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default About;
