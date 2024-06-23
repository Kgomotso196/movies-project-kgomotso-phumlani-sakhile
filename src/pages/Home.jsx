import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

import { OutlineButton } from '../components/button/Button'; // Importing OutlineButton component
import HeroSlide from '../components/hero-slide/HeroSlide'; // Importing HeroSlide component
import MovieList from '../components/movie-list/MovieList'; // Importing MovieList component

import { category, movieType, tvType } from '../api/tmdbApi'; // Importing category, movieType, and tvType from tmdbApi

const Home = () => {
    return (
        <>
            {/* Rendering the HeroSlide component */}
            <HeroSlide/>

            <div className="container">
                {/* Section for Trending Movies */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        {/* Link to navigate to the /movie route */}
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    {/* Rendering MovieList component for trending movies */}
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                {/* Section for Top Rated Movies */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        {/* Link to navigate to the /movie route */}
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    {/* Rendering MovieList component for top rated movies */}
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                {/* Section for Trending TV Series */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        {/* Link to navigate to the /tv route */}
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    {/* Rendering MovieList component for trending TV series */}
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                {/* Section for Top Rated TV Series */}
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        {/* Link to navigate to the /tv route */}
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    {/* Rendering MovieList component for top rated TV series */}
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;
