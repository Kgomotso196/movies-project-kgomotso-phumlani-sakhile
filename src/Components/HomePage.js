import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLatestMovies } from '../utils/apiConfig';
import '../Components/HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchLatestMovies();
        console.log(movies);
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
    <div>
      <h2>Welcome to the Movies App</h2>
      <Link to="/movies">Go to Movies</Link>
      <div className="movies-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;