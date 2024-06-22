import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../utils/tmdbApi';
import '../Components/SingleMoviePage.css';

const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movie = await tmdbApi.detail('movie', id);
        setMovie(movie);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie details.</div>;

  return (
    <div className="movie-detail-container">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default SingleMoviePage;