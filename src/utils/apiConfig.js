// src/utils.js
import axios from 'axios';

const apiKey = 'fbba1ed0159fb33f8fd6bf07b679112f';

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchLatestMovies = async () => {
  try {
    const response = await tmdbApi.get(`/movie/now_playing?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return [];
  }
};

export const fetchMovieTrailer = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}/videos?api_key=${apiKey}`);
    const trailers = response.data.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
    return trailers.length > 0 ? trailers[0].key : null;
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    return null;
  }
};
