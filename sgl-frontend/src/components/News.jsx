import React, { useEffect, useState } from 'react';
import { getAllNews } from '../services/api';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await getAllNews();
      console.log(response.data.news);
      setNews(response.data.news);
    };
    fetchNews();
  }, []);
  function getId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  return (
    <div className="bg-transparent w-full h-[50vh] lg:h-[80vh] mt-10 flex flex-col gap-10 border-2 border-golden">
      <h1 className="text-5xl text-center text-white mt-10  gap-10">
        <span className="text-red">SGL Miniplex</span> News
      </h1>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        className="w-full h-[50vh] lg:h-[80vh]"
      >
        {news.map((n) => {
          const videoId = getId(n.url);
          return (
            <div className='flex flex-col items-center justify-center'>
              <iframe
                className="w-full h-200"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className=" text-white text-4xl  w-250">{n.title}</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default News;
