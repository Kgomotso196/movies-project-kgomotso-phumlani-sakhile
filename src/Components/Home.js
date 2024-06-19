import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching latest movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="home-container">
      {selectedMovie ? (
        <div className="movie-details">
          <button onClick={handleBackClick} className="back-button">Back</button>
          <h1>{selectedMovie.title}</h1>
          <p>{selectedMovie.overview}</p>
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>Rating: {selectedMovie.vote_average}</p>
          {/* Add more movie details as needed */}
        </div>
      ) : (
        <div>
          <h1>Latest Movies</h1>
          <ul className="movie-list">
            {movies.map(movie => (
              <li key={movie.id} onClick={() => handleMovieClick(movie.id)} className="movie-item">
                {movie.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
