import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar/NavBar';
import GenresPage from './pages/GenresPage';
import ActorsPage from './pages/ActorsPage';
import SearchPage from './pages/SearchPage';
import MoviesPage from './Components/MoviesPage';
// import SingleMoviePage from './Components/SingleMoviePage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} component={HomePage} />
        <Route path="/genres/:id" component={GenresPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/actors" component={ActorsPage} />
        <Route path="/search" component={SearchPage} />
      </Routes>
    </Router>
  );
};

export default App;