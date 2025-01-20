import React, { useRef } from 'react';
import Footer from '../components/Footer';
import images from '../constant/images';
import TestimonialCard from '../UI/TestimonialCard';
const ImageFirst = () => {
  return (
    <>
      <div className="bg-black flex justify-center items-center lg:h-full "></div>
      <div className="bg-black flex flex-col justify-center items-center lg:h-full w-full mt-4 lg:flex-row">
        <div className="bg-black flex justify-center items-center w-full lg:h-full lg:w-1/2 lg:p-10">
          <div className="bg-black flex justify-center items-center ">
            <img
              src={images.building}
              alt="theater"
              className=" border-2 border-white p-2 rounded-lg  "
              data-aos="flip-up"
              data-aos-duration="1500"
            />
          </div>
        </div>
        <div
          className="bg-black flex flex-col justify-center items-center lg:w-2/5 lg:flex-col"
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          <h1 className="text-5xl text-center text-white">
            Welcome To <span className="text-red">SGL Miniplex</span>
          </h1>
          <p className="text-lg  text-white p-5 text-center ">
          Welcome to the About Us page of our movie hall! We are thrilled to have you here and excited to share with you some information about who we are and what we stand for.
          </p>
          <p className="text-lg  text-white p-5 text-center ">
          Our movie hall has been in the entertainment industry for several years, and we take pride in being a hub for movie enthusiasts and a source of entertainment for families, friends, and couples. We understand that watching movies is not just a pastime but a way of bonding with loved ones, escaping reality, and creating unforgettable memories.
          </p>
          <p className="text-lg  text-white p-5 text-center ">
          We offer a wide range of movies, from the latest blockbuster releases to classics that will take you down memory lane. We also cater to different preferences, including action, drama, comedy, romance, and horror. Whatever your taste in movies, we have something for you.
          </p>
          <p className="text-lg  text-white p-5 text-center ">
          Our mission is to provide you with the best movie experience possible. We are committed to continuously improving our services and facilities to meet your needs and exceed your expectations. Your satisfaction is our top priority.
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

const About = () => {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
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
        <div className="bg-black flex justify-center items-center  ">
          <ImageFirst />
        </div>
        <div
          className="bg-black flex justify-center items-center lg:flex-col lg:p-32 flex-col "
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          <h1 className="text-5xl text-center text-white">
            Why Choose <span className="text-red">SGL Miniplex</span>
          </h1>
          <p className="text-xl  text-white p-5 text-center ">
            Are you looking for the perfect place to watch your favorite movies?
            Look no further than SGL Miniplex! Here are just a few reasons why
            you should choose us for your next movie night.
          </p>
          <div />
        </div>
        <div
          className="bg-black flex justify-center items-center lg:flex-col  lg:-mt-24 flex-col w-full gap-10 "
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          <h1 className="text-5xl text-center text-white">
            Our<span className="text-red"> Team</span>
          </h1>
          <TestimonialCard
            name1="Harish Kr. Sikka"
            designation1="Managing Director"
            image1={images.emp0}
            info1={
              "The Managing Director of SGL MiniPlex is a key leadership position within the company. This individual is responsible for overseeing all aspects of the company's operations, including strategic planning, financial management, and day-to-day operations. "
            }
            name2=" Ranjan Howladar"
            designation2="Production Manager"
            image2={images.emp6}
            info2={
              'As a production manager, my primary objective is to ensure that our manufacturing process runs efficiently and effectively. I oversee the production team and work with other departments to ensure that we meet our production targets while staying within budget.'
            }

            name3=" Abhay Shrivastava"
            designation3="Finance"
            image3={images.emp7}
            info3={
              "As a finance manager, my role is crucial in ensuring the financial stability and success of the company. I am responsible for overseeing and managing the financial activities of the organization, including budgeting, forecasting, and financial reporting."
            }
            showLast
          />
          <TestimonialCard

            name1="Akash Dubey"
            designation1="Finance"
            image1={images.emp1}
            info1={
              "As a finance manager, I am responsible for managing the financial operations of the company, including budgeting, forecasting, and financial reporting. My main goal is to ensure that the company's financial resources are allocated effectively and efficiently."
            }
            name2="Sachin Kumar"
            designation2=" Sales & Marketing"
            image2={images.emp4}
            info2={
              'As a sales and marketer, my role is to create and execute marketing strategies that generate leads and ultimately drive revenue for the company. '
            }

          />
          {/* <TestimonialCard
            
            name3="Anju Thakur"
            designation3="PR / HR"
            image3={images.emp2}
            info3={
              "As a PR and HR professional, my role is to ensure that my organization is communicating effectively with both internal and external stakeholders. PR is responsible for managing the company's reputation and communicating with the public, media, and stakeholders."
            }
            showLast={false}
          /> */}
          {/* <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col  justify-center items-center w-full gap-10 p-5">
              <img
                src={images.emp0}
                alt=""
                className=" border-2 border-dotted border-white p-2 object-cover w-media"
              />
              <div className="flex flex-col justify-center items-center w-full gap-10 ">
                <h1 className="text-5xl text-center text-white">
                  Harish Kr. Sikka
                </h1>
                <h3 className='text-red font-bold text-3xl'>
                CEO
              </h3>
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 ">
            <div className="flex flex-col hover:text-white">
              <img
                src={images.emp6}
                alt=""
                className=" border-2 border-dotted border-white p-2 object-fill w-64  h-64   "
              />
              <h1 className="text-white text-center hover:text-white p-1 text-2xl">
                Ranjan Howladar
              </h1>
              <span className="text-red text-center font-bold">
                Execution Officer
              </span>
            </div>

            <div className="flex flex-col hover:text-white">
              <img
                src={images.emp2}
                alt=""
                className=" border-2 border-dotted border-white p-2 object-fill w-64  h-64   "
              />
              <h1 className="text-white text-center hover:text-white p-1 text-2xl">
                Anju Thakur
              </h1>
              <span className="text-red text-center font-bold">PR / HR</span>
            </div>

            <div className="flex flex-col hover:text-white">
              <img
                src={images.emp7}
                alt=""
                className=" border-2 border-dotted border-white p-2 object-fill w-64  h-64   "
              />
              <h1 className="text-white text-center hover:text-white p-1 text-2xl">
                Abhay Shrivastava
              </h1>
              <span className="text-red text-center font-bold">Finance</span>
            </div>

            <div className="flex flex-col hover:text-white">
              <img
                src={images.emp1}
                alt=""
                className=" border-2 border-dotted border-white p-2 object-fill w-64  h-64  hover:text-white"
              />
              <h1 className="text-white text-center hover:text-white p-1 text-2xl">
                Akash Dubey
              </h1>
              <span className="text-red text-center font-bold">Finance</span>
            </div>
          </div> */}
          {/* <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 ">
            <div className="flex flex-col hover:text-white">
              <img
                src={images.emp3}
                alt=""
                className=" border-2 border-dotted border-white p-2 object-fill w-64  h-64  "
              />
              <h1 className="text-white text-center hover:text-white p-1 text-2xl">
                Naman Joshi
              </h1>
              <span className="text-red text-center font-bold">
                Digital Marketer
              </span>
            </div>
            <div className="flex flex-col hover:text-white">
              <img
                src={images.emp5}
                alt=""
                className=" border-2 border-dotted border-white p-2 object-fill w-64  h-64  hover:text-white"
              />
              <h1 className="text-white text-center hover:text-white p-1 text-2xl">
                Krishna Rawat
              </h1>
              <span className="text-red text-center font-bold">
                Digital Marketer
              </span>
            </div>

            <div className='flex flex-col hover:text-white'>
            <img src={images.emp8} alt="" className=' border-2 border-dotted border-white p-2 object-fill w-64  h-64   ' />
            <h1 className="text-white text-center hover:text-white p-1 text-2xl">Abhay Shrivastava</h1>
             <span className="text-red text-center font-bold">Finance</span>
            </div>
            <div className='flex flex-col hover:text-white'>
            <img src={images.emp3} alt="" className=' border-2 border-dotted border-white p-2 object-fill w-64  h-64  ' />
            <h1 className="text-white text-center hover:text-white p-5 text-2xl">Naman Joshi</h1>
            </div>
            <div className='flex flex-col hover:text-white'>
            <img src={images.emp4} alt="" className=' border-2 border-dotted border-white p-2 object-fill w-64  h-64  ' />
            <h1 className="text-white text-center hover:text-white p-5 text-2xl">Sachin Kumar</h1>
            </div>
            <div className="flex flex-col hover:text-white">
              <img
                src={images.emp4}
                alt=""
                className=" border-2 border-dotted border-white p-2 object-fill w-64  h-64  "
              />
              <h1 className="text-white text-center hover:text-white p-1 text-2xl">
                Sachin Kumar
              </h1>
              <span className="text-red text-center font-bold">
                Sales & Marketing
              </span>
            </div>
          </div> */}
          <div />
        </div>
        <div
          className="bg-black flex justify-center items-center lg:flex-col lg:px-32 mt-8 flex-col w-full gap-10  "
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          <h1 className="text-5xl text-center text-white">
            Mission & {'  '}
            <span className="text-red">Views</span>
          </h1>
          <div className="flex lg:flex-row justify-center w-full sm:flex-col sm:items-center xss:flex-col xss:items-center md:flex-col md:items-center ">
            <div className="w-96 h-250 m-4 p-4 rounded-lg border border-white  ">
              <h1 className="text-2xl text-center text-white  ">
                Mission
              </h1>
              <p className="text-lg  text-white p-5 text-center ">
                Our goal is to create a community of film and entertainment
                enthusiasts who can come together to enjoy and appreciate the
                art of storytelling on the big screen.
              </p>
            </div>
            <div
              className="border w-96 h-250 m-4 p-4 bg-blur rounded-lg  border-white "
              data-aos="flip-down"
              data-aos-duration="1500"
            >
              <h1 className="text-2xl text-center text-white ">
                Vision
              </h1>
              <p className="text-lg  text-white p-5 text-center ">
                SGL Miniplex is not just a movie theater, but a community space
                where people can gather, relax, and escape into the magic of
                cinema.  SGL Miniplex Vision is innovative.
              </p>
            </div>
          </div>
          <div />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
