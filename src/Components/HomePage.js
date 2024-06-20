import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../utils/apiConfig';
import '../Components/HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchPopularMovies();
        console.log(movies)
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies.</div>;

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
