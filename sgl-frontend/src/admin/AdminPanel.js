import React from 'react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {
  bigPosterMovie,
  createGallery,
  nowPlayingMovie,
  comingSoonMovie,
  allMovies,
  allGalleries,
  deleteMovie,
  hardDeleteMovie,
  deleteGallery,
  getVouchers,
  deleteVoucher,
  getAllMovieFeedbacks,
  createVoucher,
  allFeedbacks,
  enableOrDisableFeedback,
  enableOrDisableMovieFeedback,
  addNews,
  updateMovie,
} from '../services/api';
const AdminPanel = () => {
  const [modal, setModal] = useState(false);
  const [galleryModal, setGalleryModal] = useState(false);
  const [voucherModal, setVoucherModal] = useState(false);
  const [newsModal, setNewsModal] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [Galleries, setGalleries] = useState([]);
  const [Vouchers, setVouchers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [allMovieFeedbacks, setAllMovieFeedbacks] = useState([]);
  useEffect(() => {
    try {
      const getMovies = async () => {
        const { data } = await allMovies();
        setMovies(data.movies);
      };
      getMovies();
    } catch (err) {
      toast.error('Something went wrong');
    }
  }, []);
  useEffect(() => {
    try {
      const getGalleries = async () => {
        const { data } = await allGalleries();
        setGalleries(data.gallery);
      };
      getGalleries();
    } catch (err) {
      toast.error('Something went wrong');
    }
  }, []);
  useEffect(() => {
    try {
      const getAllVouchers = async () => {
        const { data } = await getVouchers();
        setVouchers(data.vouchers);
      };
      getAllVouchers();
    } catch (e) {
      toast.error('Something went wrong');
    }
  }, []);
  useEffect(() => {
    try {
      const getAllFeedbacks = async () => {
        const response = await allFeedbacks();
        setFeedbacks(response.data.feedback);
      };
      getAllFeedbacks();
    } catch (e) {
      toast.error('Something went wrong');
    }
  }, []);

  useEffect(() => {
    try {
      const getAllMovieFeedbacks_ = async () => {
        const response = await getAllMovieFeedbacks();
        setAllMovieFeedbacks(response.data.feedbacks);
      };
      getAllMovieFeedbacks_();
    } catch (e) {
      toast.error('Something went wrong');
    }
  }, []);

  const MovieFeedBack = ({ movie }) => {
    if (movie.feedback.length > 0)
      return (
        <div className="flex flex-col gap-5 text-center w-full ">
          <div className="flex flex-col lg:grip-cols-2 gap-5 lg:grid">
            <h1 className="text-3xl font-bold text-white">{movie.movieName}</h1>
            {movie.feedback.map((fb, i) => (
              <FeedBackCard feedback={fb} key={i} isMovieFeedback={true} />
            ))}
          </div>
        </div>
      );
    else return null;
  };

  const GalleryModal = () => {
    const [Image, setImage] = useState('');
    const [isImage, setIsImage] = useState('true');
    const addToGallery = async (e) => {
      e.preventDefault();
      if (!Image) return toast.error('Please select an image or video');
      if (!isImage) return toast.error('Please select an image or video');
      const formData = new FormData();
      formData.append('url', Image);
      formData.append('isImage', isImage);
      try {
        const data = await createGallery(formData);
        toast.success('Image added to gallery');
        setGalleryModal(false);
      } catch (err) {
        toast.error('Something went wrong');
      }
    };
    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto text-white gap-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 gap-10 lg:mt-60">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity gap-10 mt-96"
            aria-hidden="true"
          ></div>

          <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mt-96 border-2 border-white bg-black">
            <div className="p-10 ">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left gap-10">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Add To Gallery
                  </h3>
                  <form className="form2" onSubmit={addToGallery}>
                    <select
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setIsImage(e.target.value);
                      }}
                    >
                      <option value="true">Image</option>
                      <option value="false">Video</option>
                    </select>
                    {isImage == 'true' ? (
                      <input
                        type="file"
                        placeholder="Image"
                        className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder="Video URL"
                        className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500 "
                        onChange={(e) => {
                          setImage(e.target.value);
                        }}
                      />
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={addToGallery}
              >
                Add To Gallery
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setGalleryModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const NewsModal = () => {
    const [Image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [isImage, setIsImage] = useState('true');
    const addToNews = async (e) => {
      e.preventDefault();
      if (!Image) return toast.error('Please enter url');
      if (!title) return toast.error('Please enter a title');
      // if(!description) return toast.error('Please enter a description');
      // if (!isImage) return toast.error('Please select an image or video');
      // const formData = new FormData();
      // formData.append('url', Image);
      // formData.append('title', title);
      // formData.append('description', description);
      // formData.append('isImage', isImage);
      try {
        const data = await addNews({ url: Image, title, description });
        toast.success('News added!');
        setNewsModal(false);
      } catch (err) {
        toast.error('Something went wrong');
      }
    };
    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto text-white gap-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 gap-10 lg:mt-60">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity gap-10 mt-96"
            aria-hidden="true"
          ></div>

          <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mt-96 border-2 border-white bg-black">
            <div className="p-10 ">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left gap-10">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Add News
                  </h3>
                  <form className="form2" onSubmit={addToNews}>
                    <input
                      type="text"
                      placeholder="Video URL"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500 "
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Title"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500 "
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={addToNews}
              >
                Add News
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setNewsModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const VoucherModal = () => {
    const [Image, setImage] = useState('');
    const [isImage, setIsImage] = useState('true');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [link, setLink] = useState('');
    const addToVoucher = async (e) => {
      e.preventDefault();
      //if its less than today
      if (new Date(fromDate) > new Date(toDate)) {
        toast.error('From date cannot be greater than to date');
        return;
      }
      if (!Image) {
        toast.error('Please select an image');
        return;
      }
      if (!title || !description || !fromDate || !toDate) {
        toast.error('Please fill all the fields');
        return;
      }
      const formData = new FormData();
      formData.append('image', Image);
      formData.append('isImage', isImage);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('from', fromDate);
      formData.append('to', toDate);
      formData.append('link', link);
      try {
        await createVoucher(formData);
        toast.success('Voucher Created');
        setVoucherModal(false);
      } catch (err) {
        toast.error('Something went wrong');
      }
    };
    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto text-white gap-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 gap-10 lg:mt-60">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity gap-10 mt-96"
            aria-hidden="true"
          ></div>

          <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mt-96 border-2 border-white bg-black">
            <div className="p-10 ">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left gap-10">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Add Vouchers
                  </h3>
                  <form className="form2" onSubmit={addToVoucher}>
                    <input
                      type="text"
                      placeholder="Title"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Link"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                    />
                    <input
                      type="date"
                      placeholder="Date"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setFromDate(e.target.value);
                      }}
                    />
                    <input
                      type="date"
                      placeholder="Date"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setToDate(e.target.value);
                      }}
                    />
                    <select
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setIsImage(e.target.value);
                      }}
                    >
                      <option value="true">Image</option>
                      <option value="false">Video</option>
                    </select>
                    {isImage == 'true' ? (
                      <input
                        type="file"
                        placeholder="Image"
                        className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder="Video URL"
                        className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500 "
                        onChange={(e) => {
                          setImage(e.target.value);
                        }}
                      />
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={addToVoucher}
              >
                Add Voucher
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setVoucherModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const GalleryCard = ({ gallery }) => {
    const handleDelete = async () => {
      try {
        const { data } = await deleteGallery(gallery._id);
        toast.success(data.message);
        const { data: newData } = await allGalleries();
        setGalleries(newData.gallery);
      } catch (err) {
        toast.error('Something went wrong');
      }
    };
    function getId(url) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    }
    const videoId = getId(gallery.url);

    return (
      <div className="flex flex-col items-center justify-center border-2 gap-5 border-gray-400 rounded-md p-2 text-white ">
        <div className={`${gallery.isImage ? 'w-60' : 'w-auto'} `}>
          {gallery.isImage ? (
            <img
              src={gallery.url}
              alt="movie"
              className="w-[80px] h-[80px] rounded-md object-cover  "
            />
          ) : (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>
        <button
          className="bg-red-500 text-red rounded-md p-2 border-2 border-red"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
    );
  };
  const VoucherCard = ({ voucher }) => {
    const handleDelete = async () => {
      try {
        const { data } = await deleteVoucher(voucher._id);
        toast.success(data.message);
        const { data: newData } = await getVouchers();
        setVouchers(newData.vouchers);
      } catch (err) {
        toast.error('Something went wrong');
      }
    };
    function getId(url) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    }
    const videoId = getId(voucher.url);

    return (
      <div className="flex flex-col items-center justify-center border-2 gap-5 border-gray-400 rounded-md p-2 text-white ">
        <div className={`${voucher.isImage ? 'w-60' : 'w-auto'} `}>
          {voucher.isImage ? (
            <img
              src={voucher.url}
              alt="movie"
              className="w-[80px] h-[80px] rounded-md object-cover  "
            />
          ) : (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>

        <h1 className="text-xl font-bold">{voucher.title}</h1>

        <h1 className="text-xl font-bold">{voucher.description}</h1>

        <h1 className="text-xl font-bold">
          {new Date(voucher.from).toDateString()}
        </h1>

        <h1 className="text-xl font-bold">
          {new Date(voucher.to).toDateString()}
        </h1>
        <Link
          target="_blank"
          className="bg-red-500 text-red rounded-md p-2 border-2 border-red"
          to={voucher.link}
        >
          See Offer
        </Link>
        <button
          className="bg-red-500 text-red rounded-md p-2 border-2 border-red"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
    );
  };
  const MovieCard = ({ movie }) => {
    const handleDelete = async () => {
      try {
        const { data } = await deleteMovie(movie._id);
        // toast.success(data.message);
        const { data: newData } = await allMovies();
        setMovies(newData.movies);
      } catch (err) {
        toast.error('Something went wrong');
      }
    };
    const hardDelete = async () => {
      try {
        const { data } = await hardDeleteMovie(movie._id);
        toast.success(data.message);
        const { data: newData } = await allMovies();
        setMovies(newData.movies);
      } catch (err) {
        toast.error('Something went wrong');
      }
    };
    return (
      <div className="flex flex-col items-center justify-center border-2 gap-5 border-gray-400 rounded-md p-2 text-white ">
        <div className="w-64 h-96">
          <img
            src={movie.image}
            alt="movie"
            className="w-[80px] h-[80px] rounded-md object-cover  "
          />
        </div>
        <div className="flex flex-col items-center justify-center text-white ">
          <h1 className="text-lg  text-white ">{movie.movieName}</h1>
          <h1 className="text-lg  text-white ">
            {new Date(movie.releaseDate).toDateString()}
          </h1>
          <h1 className="text-lg  text-white ">{movie.tag}</h1>
        </div>
        <div className="flex w-full items-center justify-around text-white">
          <button
            className={`${
              !movie.isDisabled ? 'text-white bg-gray' : 'text-red  border-red'
            } rounded-md p-2 border-2`}
            onClick={() => {
              handleDelete();
            }}
          >
            {movie.isDisabled ? 'Disabled' : 'Enabled'}
          </button>
          <button
            className="text-red border-red rounded-md p-2 border-2"
            onClick={() => {
              setEditMovie(movie);
              setShowEditMovieModal(true);
            }}
          >
            Edit
          </button>
          <button
            className="text-red border-red rounded-md p-2 border-2"
            onClick={() => {
              hardDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  const [showEditMovieModal, setShowEditMovieModal] = useState(false);
  const [editMovie, setEditMovie] = useState({});
  const EditMovieModal = () => {
    const [MovieName, setMovieName] = useState(editMovie.movieName);
    const [Description, setDescription] = useState(editMovie.description);
    const [MinTicket, setMinTicket] = useState(editMovie.minTicket);
    const [Image, setImage] = useState('');
    const [ReleaseDate, setReleaseDate] = useState(editMovie.releaseDate);
    const [BookMyShowLink, setBookMyShowLink] = useState(editMovie.link);
    const [Trailer, setTrailer] = useState(editMovie.trailer);
    const [Tag, setTag] = useState(editMovie.tag);
    const handleUpdateMovie = async () => {
      try {
        const data = new FormData();
        data.append('movieName', MovieName);
        data.append('description', Description);
        data.append('minTicket', MinTicket);
        data.append('image', Image);
        data.append('releaseDate', ReleaseDate);
        data.append('link', BookMyShowLink);
        data.append('trailer', Trailer);
        data.append('tag', Tag);

        const date = new Date(ReleaseDate);
        if (date == 'Invalid Date') {
          toast.error('Release Date should be a valid date');
          return;
        }
        await updateMovie(editMovie._id, data);
        setModal(false);
        const { data: newData } = await allMovies();
        setMovies(newData.movies);
        setShowEditMovieModal(false);
        toast.success('Movie Updated Successfully');
        // window.location.reload();
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
        setModal(false);
      }
    };

    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto text-white gap-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen lg:pt-4 px-4 pb-20 text-center sm:block sm:p-0 gap-10 lg:mt-60 sm:mt-2">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity gap-10 mt-96"
            aria-hidden="true"
          ></div>

          <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mt-96 border-2 border-white bg-black">
            <div className="p-10 ">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left gap-10">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Add Movie
                  </h3>
                  <form className="form2">
                    <input
                      type="text"
                      placeholder="Movie Name"
                      className="w-full border-2 border-red p-2 rounded-lg outline-none focus:border-indigo-500 text-black "
                      onChange={(e) => {
                        setMovieName(e.target.value);
                      }}
                      value={MovieName}
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      className="input"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      value={Description}
                    />
                    <input
                      type={ReleaseDate ? 'text' : 'date'}
                      value={ReleaseDate.split('T')[0]}
                      onFocus={(e) => {
                        e.target.type = 'date';
                      }}
                      onBlur={(e) => {
                        e.target.type = 'text';
                      }}
                      placeholder="Release Date"
                      className="input"
                      onChange={(e) => {
                        setReleaseDate(e.target.value);
                      }}
                    />
                    <select
                      className="input w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setTag(e.target.value);
                      }}
                      value={Tag}
                    >
                      <option value="">Select Movie Type</option>
                      <option value="BigMovie">Big Movie</option>
                      <option value="PlayingNow">Playing Now</option>
                      <option value="ComingSoon">Coming Soon</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Book My Show Link"
                      className="input"
                      value={BookMyShowLink}
                      onChange={(e) => {
                        setBookMyShowLink(e.target.value);
                      }}
                    />

                    <input
                      type="number"
                      placeholder="Minimum Ticket Price"
                      className="input"
                      value={MinTicket}
                      onChange={(e) => {
                        setMinTicket(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Trailer Link"
                      className="input"
                      value={Trailer}
                      onChange={(e) => {
                        setTrailer(e.target.value);
                      }}
                    />
                    <input
                      type="file"
                      placeholder="Image"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm border-2 border-white"
                onClick={() => handleUpdateMovie()}
              >
                Update Movie
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setShowEditMovieModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Modal = () => {
    const [MovieName, setMovieName] = useState('');
    const [Description, setDescription] = useState('');
    const [MinTicket, setMinTicket] = useState('');
    const [Image, setImage] = useState('');
    const [ReleaseDate, setReleaseDate] = useState('');
    const [BookMyShowLink, setBookMyShowLink] = useState('');
    const [Trailer, setTrailer] = useState('');
    const [Tag, setTag] = useState('');
    const handleSaveMovie = async () => {
      try {
        if (
          !MovieName ||
          !Description ||
          !MinTicket ||
          !ReleaseDate ||
          !Trailer ||
          !Tag
        ) {
          toast.error('Please fill all the fields');
          return;
        }
        if (!Image) {
          toast.error('Please upload an image');
          return;
        }
        const data = new FormData();
        data.append('movieName', MovieName);
        data.append('description', Description);
        data.append('minTicket', MinTicket);
        data.append('image', Image);
        data.append('releaseDate', ReleaseDate);
        data.append('link', BookMyShowLink);
        data.append('trailer', Trailer);
        data.append('tag', Tag);
        const date = new Date(ReleaseDate);
        if (date == 'Invalid Date') {
          toast.error('Release Date should be a valid date');
          return;
        }

        if (Tag === 'BigMovie') {
          await bigPosterMovie(data);
        } else if (Tag === 'PlayingNow') {
          await nowPlayingMovie(data);
        } else if (Tag === 'ComingSoon') {
          await comingSoonMovie(data);
        }
        toast.success('Movie Added Successfully');
        setModal(false);
        window.location.reload();
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
        setModal(false);
      }
    };

    return (
      <div
        className="fixed z-10 inset-0 overflow-y-auto text-white gap-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen lg:pt-4 px-4 pb-20 text-center sm:block sm:p-0 gap-10 lg:mt-60 sm:mt-2">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity gap-10 mt-96"
            aria-hidden="true"
          ></div>

          <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mt-96 border-2 border-white bg-black">
            <div className="p-10 ">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left gap-10">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Add Movie
                  </h3>
                  <form className="form2">
                    <input
                      type="text"
                      placeholder="Movie Name"
                      className="w-full border-2 border-red p-2 rounded-lg outline-none focus:border-indigo-500 text-black "
                      onChange={(e) => {
                        setMovieName(e.target.value);
                      }}
                      value={MovieName}
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      className="input"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      value={Description}
                    />
                    <input
                      type="text"
                      onFocus={(e) => {
                        e.target.type = 'date';
                      }}
                      onBlur={(e) => {
                        e.target.type = 'text';
                      }}
                      placeholder="Release Date"
                      className="input"
                      onChange={(e) => {
                        setReleaseDate(e.target.value);
                      }}
                    />
                    <select
                      className="input w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setTag(e.target.value);
                      }}
                      value={Tag}
                    >
                      <option value="">Select Movie Type</option>
                      <option value="BigMovie">Big Movie</option>
                      <option value="PlayingNow">Playing Now</option>
                      <option value="ComingSoon">Coming Soon</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Book My Show Link"
                      className="input"
                      onChange={(e) => {
                        setBookMyShowLink(e.target.value);
                      }}
                    />

                    <input
                      type="number"
                      placeholder="Minimum Ticket Price"
                      className="input"
                      onChange={(e) => {
                        setMinTicket(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Trailer Link"
                      className="input"
                      onChange={(e) => {
                        setTrailer(e.target.value);
                      }}
                    />
                    <input
                      type="file"
                      placeholder="Image"
                      className="flex justify-center items-center w-full border-2 border-neonRed   bg-gray p-2 rounded-lg outline-none focus:border-indigo-500  "
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm border-2 border-white"
                onClick={() => handleSaveMovie()}
              >
                Add Movie
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Star = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-golden cursor-pointer"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-golden"
          strokeWidth={2}
          d="M12 1l3.364 6.364L22 9.728l-5.455 5.454L16.09 23 12 17.636 7.91 23l1.636-7.818L2 9.728l6.636-.364L12 1z"
        />
      </svg>
    );
  };

  const FeedBackCard = ({ feedback, isMovieFeedback }) => {
    const handleFeedbackEnableOrDisable = async (id) => {
      try {
        // const res = await enableOrDisableFeedback(id);
        if (isMovieFeedback) {
          const res = await enableOrDisableMovieFeedback(id);
          const response = await getAllMovieFeedbacks();
          setAllMovieFeedbacks(response.data.feedbacks);
          console.log(feedback.isDisabled);
        } else {
          const res = await enableOrDisableFeedback(id);
          const response = await allFeedbacks();
          setFeedbacks(response.data.feedback);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div className=" border-2 border-red p-4 flex flex-col gap-2 items-center justify-center w-full">
        <h1 className="text-2xl text-center z-10 text-white">
          {feedback.feedback}
        </h1>
        <h3 className="text-2xl text-center z-10 text-white">
          - {feedback.name}
        </h3>
        <div className="flex items-center justify-center gap-5 z-10 text-white">
          {[...Array(feedback.rating)].map((star, i) => {
            return <Star key={i} />;
          })}
        </div>
        <button
          className={`${
            !feedback.isDisabled ? 'text-white bg-gray' : 'text-red  border-red'
          } rounded-md p-2 border-2`}
          onClick={() => {
            handleFeedbackEnableOrDisable(feedback._id);
          }}
        >
          {feedback.isDisabled ? 'Disabled' : 'Enabled'}
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5 p-5 justify-center">
      <div className="flex lg:flex-row flex-col  gap-5 p-5 justify-center">
        {modal && <Modal />}
        {galleryModal && <GalleryModal />}
        {voucherModal && <VoucherModal />}
        {newsModal && <NewsModal />}
        {showEditMovieModal && <EditMovieModal />}
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded border-red border-2 hover:border-white hover:text-red"
          onClick={() => {
            setModal(true);
          }}
          id="Movie"
        >
          Add Movie
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded border-red border-2 hover:border-white hover:text-red"
          onClick={() => {
            setGalleryModal(true);
          }}
          id="Movie"
        >
          Add To Gallery
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded border-red border-2 hover:border-white hover:text-red"
          onClick={() => {
            setVoucherModal(true);
          }}
          id="Movie"
        >
          Add Vouchers
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded border-red border-2 hover:border-white hover:text-red"
          onClick={() => {
            setNewsModal(true);
          }}
          id="Movie"
        >
          Add News
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded border-red border-2 hover:border-white hover:text-red"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          id="Movie"
        >
          Logout
        </button>
      </div>
      <h1 className="text-3xl font-bold text-center text-white">Movies</h1>
      <div className="flex gap-5 p-5  flex-wrap items-center justify-center ">
        {Movies.map((index, i) => {
          return <MovieCard key={i} movie={index} />;
        })}
      </div>
      <h1 className="text-3xl font-bold text-center text-white">Gallery</h1>
      <div className="flex gap-5 p-5  flex-wrap items-center justify-center ">
        {Galleries.map((index, i) => {
          return <GalleryCard key={i} gallery={index} />;
        })}
      </div>
      <h1 className="text-3xl font-bold text-center text-white">Vouchers</h1>
      <div className="flex gap-5 p-5  flex-wrap items-center justify-center">
        {Vouchers.map((index, i) => {
          return <VoucherCard key={i} voucher={index} />;
        })}
      </div>
      <h1 className="text-3xl font-bold text-center text-white">FeedBacks</h1>
      <div className="flex gap-5 p-5 flex-wrap lg:grid lg:grid-cols-3">
        {feedbacks.map((index, i) => {
          return <FeedBackCard key={i} feedback={index} />;
        })}
      </div>
      <h1 className="text-3xl font-bold text-center text-white">
        Movies Feedback
      </h1>
      <div className="flex gap-5 p-5 flex-wrap flex-col w-full">
        {allMovieFeedbacks.map((movie, i) => {
          return <MovieFeedBack key={i} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default AdminPanel;
