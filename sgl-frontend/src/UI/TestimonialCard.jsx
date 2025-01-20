import React from 'react';
import images from '../constant/images';

const TestimonialCard = ({
  name1,
  name2,
  name3,
  designation1,
  designation2,
  designation3,
  image1,
  image2,
  image3,
  info1,
  info2,
  info3,
  showLast,
}) => {
  return (
    <div class="container   text-white">
      <section class="text-gray-800 text-center">
        <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          <div class="mb-12 md:mb-0">
            <div class="flex justify-center mb-6">
              <img src={image1} class="rounded-full shadow-lg w-48 h-48" />
            </div>
            <h5 class="text-lg font-bold mb-4">{name1}</h5>
            <h6 class="text-blue-600 mb-4 text-red font-bold">
              {designation1}
            </h6>
            <p class="mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                class="w-6 pr-2 inline-block"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              {info1}
            </p>
          </div>
          <div class="mb-12 md:mb-0">
            <div class="flex justify-center mb-6">
              <img src={image2} class="rounded-full shadow-lg w-48 h-48" />
            </div>
            <h5 class="text-lg font-bold mb-4">{name2}</h5>
            <h6 class="text-blue-600 mb-4 text-red font-bold">
              {designation2}
            </h6>
            <p class="mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                class="w-6 pr-2 inline-block"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              {info2}
            </p>
          </div>
      {showLast &&  (  <div class="mb-0">
            <div class="flex justify-center mb-6">
              <img src={image3} class="rounded-full shadow-lg w-48 h-48" />
            </div>
            <h5 class="text-lg font-bold mb-4">{name3}</h5>
            <h6 class="text-blue-600 mb-4 text-red font-bold">
              {designation3}
            </h6>
            <p class="mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                class="w-6 pr-2 inline-block"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              {info3}
            </p>
          </div>
        )}
        </div>
      </section>
    </div>
  );
};

export default TestimonialCard;
