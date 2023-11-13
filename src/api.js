import axios from 'axios';

const options = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDU0NDY1MjVlYzhkODg3M2I1NGNlMzlkMTkxNmIyNCIsInN1YiI6IjY1NGZkYmIxZWE4NGM3MDExY2Q2ZWMxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CHpitEU01fQy31cfmeOhuWZ7DYDgqVg81PtP2Qkepuk',
  },
};

export const fetchTrendingMovies = async () => {
  const result = await axios
    .request({
      ...options,
      url: 'https://api.themoviedb.org/3/trending/all/day',
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return result;
};

export const fetchMovieDetails = async id => {
  const result = await axios
    .request({
      ...options,
      url: `https://api.themoviedb.org/3/movie/${id}`,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return result;
};

export const fetchMovieCast = async id => {
  const result = axios
    .request({
      ...options,
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return result;
};

export const fetchMovieReviews = async id => {
  const result = axios
    .request({
      ...options,
      url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return result;
};

export const fetchMoviesByQuery = async query => {
  const result = axios
    .request({
      ...options,
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: query,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });

  return result;
};
