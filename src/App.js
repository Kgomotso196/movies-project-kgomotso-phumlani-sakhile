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
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} component={HomePage} />
        <Route path="/genres/:id" component={GenresPage} />
        <Route path="/movies/:type" component={MoviesPage} />
        <Route path="/actors" component={ActorsPage} />
        <Route path="/search" component={SearchPage} />
      </Routes> 
      <Footer />
    </Router>
    

  );
};

export default App;