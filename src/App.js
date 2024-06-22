import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MoviesPage from './Components/MoviesPage';
import SingleMoviePage from './Components/SingleMoviePage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Latest Movies</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<SingleMoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;