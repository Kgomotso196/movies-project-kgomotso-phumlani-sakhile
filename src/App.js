import React from 'react';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import GenresPage from './pages/GenresPage';
import MoviesPage from './pages/MoviesPage';
import ActorsPage from './pages/ActorsPage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/genres/:id" component={GenresPage} />
        <Route path="/movies/:type" component={MoviesPage} />
        <Route path="/actors" component={ActorsPage} />
        <Route path="/search" component={SearchPage} />
      </Routes>
    </Router>
  );
};

export default App;
