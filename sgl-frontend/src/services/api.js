import axios from 'axios';

const getToken = async () => {
  return await localStorage.getItem('Token');
};

const getUserId = async () => {
  return await localStorage.getItem('user');
};

export const login = (username, password) => {
  return axios.post('https://sgl-backend-psi.vercel.app/api/user/login', {
    username,
    password,
  });
};

export const bigPosterMovie = async (data) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.post(
    'https://sgl-backend-psi.vercel.app/api/movie/addBigPosterMovie',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const smallPosterMovie = async (data) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.post(
    'https://sgl-backend-psi.vercel.app/api/movie/addSmallPosterMovie',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const nowPlayingMovie = async (data) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.post(
    'https://sgl-backend-psi.vercel.app/api/movie/addNowPlayingMovie',

    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const comingSoonMovie = async (data) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.post(
    'https://sgl-backend-psi.vercel.app/api/movie/addComingSoonMovie',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const allMovies = () => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/movie/getMovies');
};

export const deleteMovie = async (id) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.delete(
    `https://sgl-backend-psi.vercel.app/api/movie/deleteMovie/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const hardDeleteMovie = async (id) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.delete(
    `https://sgl-backend-psi.vercel.app/api/movie/hardDeleteMovie/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const createFeedback = (data) => {
  return axios.post(
    'https://sgl-backend-psi.vercel.app/api/feedback/createFeedback',
    data
  );
};

export const allFeedbacks = () => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/feedback/getFeedbacks');
};

export const createGallery = async (data) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.post('https://sgl-backend-psi.vercel.app/api/gallery/add', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + token + '',
      userId: userId,
    },
  });
};

export const allGalleries = () => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/gallery/getAll');
};

export const deleteGallery = async (id) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.delete(
    `https://sgl-backend-psi.vercel.app/api/gallery/delete/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const getMovieById = (id) => {
  return axios.get(
    `https://sgl-backend-psi.vercel.app/api/movie/getMovieById/${id}`
  );
};

export const createVoucher = async (data) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.post(
    'https://sgl-backend-psi.vercel.app/api/voucher/createVoucher',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const getVouchers = () => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/voucher/getAll');
};

export const getVoucher = (id) => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/voucher/get/' + id);
};

export const deleteVoucher = async (id) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.delete(
    'https://sgl-backend-psi.vercel.app/api/voucher/delete-voucher/' + id,
    {
      headers: {
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const disableVoucher = async (id) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.delete(
    'https://sgl-backend-psi.vercel.app/api/voucher/disable-voucher' + id,
    {
      headers: {
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const getStats = () => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/stats/getStats');
};

export const updateStats = async (data) => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/stats/updateStats');
};

export const enableOrDisableFeedback = async (id) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.get(
    'https://sgl-backend-psi.vercel.app/api/feedback/enableOrDisableFeedback/' + id,
    {
      headers: {
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const postMovieFeedback = async (id, data) => {
  return axios.post(
    'https://sgl-backend-psi.vercel.app/api/movie/addFeedback/' + id,
    data
  );
};

export const getAllMovieFeedbacks = async () => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/movie/getAllFeedbacks');
};

export const enableOrDisableMovieFeedback = async (id) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.get(
    'https://sgl-backend-psi.vercel.app/api/movie/enableOrDisableMovieFeedback/' +
      id,
    {
      headers: {
        Authorization: 'Bearer ' + token + '',
        userId: userId,
      },
    }
  );
};

export const addNews = async (data) => {
  return axios.post('https://sgl-backend-psi.vercel.app/api/news/addNews', data);
};

export const getAllNews = async () => {
  return axios.get('https://sgl-backend-psi.vercel.app/api/news/getNews');
};

export const updateMovie = async (id, data) => {
  const token = await getToken();
  const userId = await getUserId();
  return axios.put('https://sgl-backend-psi.vercel.app/api/movie/updateMovie/' + id, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + token + '',
      userId: userId,
    },
  });
};
