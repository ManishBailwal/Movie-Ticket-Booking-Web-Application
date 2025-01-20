import React from 'react';
import { Link } from 'react-router-dom';

const VoucherModal = ({ key, voucher, show, setShowModal }) => {
  function getId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }
  const videoId = getId(voucher.url);
  return (
    <div
    //  className= {`flex justify-center items-center absolute top-0 right-96 bottom-0 left-96 w-96`}
    // " flex justify-center items-center absolute top-0 right-96 bottom-0 left-96 w-96"
    //if multiple modals are open separate them by 96px
      className={`
        flex justify-center items-center absolute top-[${key+30}px] right-96 bottom-0 left-96 w-96
      `}
    >
      <div
        className="cardM "
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="cardM2">
          <div className="flex flex-col justify-between items-center h-96 "
          style={{
            background: `url(${voucher.url})`,
            backgroundSize: 'cover',
          }}
          >

            <h1 className="font-bold text-xl text-golden">{voucher.title}</h1>
            <div className="flex  m-2 items-center justify-center gap-2">
              <Link target="_blank"
                to={voucher.link}
                className="bg-red-500 text-red px-4 py-2 rounded-lg mt-4 border-2 border-red cursor-pointer hover:text-white hover:bg-red z-50"
              >
                View Offer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherModal;
