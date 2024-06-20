import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo.jpg';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Logo" style={{ height: '70px', width: 'auto' }}/></Link>
      </div>
      <div className="navbar-links">
        <div className="dropdown">
          <button className="dropbtn">Genres</button>
          <div className="dropdown-content">
            <Link to="/genres/1">Genre 1</Link>
            <Link to="/genres/2">Genre 2</Link>
            <Link to="/genres/3">Genre 3</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Movies</button>
          <div className="dropdown-content">
            <Link to="/movies/top-rated">Top Rated</Link>
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/latest">Latest</Link>
            <Link to="/movies/now-playing">Now Playing</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
          </div>
        </div>
        <Link to="/actors">Actors</Link>
      </div>
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies or actors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default NavBar;

