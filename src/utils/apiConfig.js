import axios from 'axios';

export const apiKey = 'fbba1ed0159fb33f8fd6bf07b679112f';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
