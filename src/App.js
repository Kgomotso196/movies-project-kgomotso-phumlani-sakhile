import React from 'react';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import GenresPage from './pages/GenresPage';
import MoviesPage from './pages/MoviesPage';
import ActorsPage from './pages/ActorsPage';
import SearchPage from './pages/SearchPage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <h1>Latest Movies</h1>
      <HomePage />
      <Footer />
      <GenresPage />
      <MoviesPage />
      <ActorsPage />
      <SearchPage />
      <NavBar />
      <Router />

    </div>
  );
};

export default App;
