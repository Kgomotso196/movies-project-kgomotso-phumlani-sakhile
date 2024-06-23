import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// Importing API functions and configuration from tmdbApi and apiConfig
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

// Importing styles for the component
import './detail.scss';

// Importing child components
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';

const Detail = () => {

    // Extracting category and id from route parameters using useParams hook
    const { category, id } = useParams();

    // State to hold the details of the selected item (movie or TV show)
    const [item, setItem] = useState(null);

    // useEffect hook to fetch item details when component mounts or dependencies change
    useEffect(() => {
        // Async function to fetch item details based on category and id
        const getDetail = async () => {
            try {
                // Fetching item details using tmdbApi based on category and id
                const response = await tmdbApi.detail(category, id, {params: {}});
                // Setting the state with the fetched item details
                setItem(response);
                // Scroll to the top of the page when details are loaded
                window.scrollTo(0, 0);
            } catch (error) {
                console.error('Error fetching detail:', error);
            }
        }
        // Calling getDetail function when component mounts or dependencies change
        getDetail();
    }, [category, id]); // Dependencies array ensures useEffect runs when category or id changes

    // Rendering JSX based on the state of item
    return (
        <>
            {
                // Conditional rendering: Render if item is not null
                item && (
                    <>
                        {/* Banner section with background image */}
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        {/* Movie content section */}
                        <div className="mb-3 movie-content container">
                            {/* Poster section */}
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            {/* Information section */}
                            <div className="movie-content__info">
                                {/* Title */}
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                {/* Genres */}
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                {/* Overview */}
                                <p className="overview">{item.overview}</p>
                                {/* Cast section */}
                                <div className="cast">
                                    {/* Section header */}
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    {/* Render CastList component with item ID */}
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        {/* Container for additional sections */}
                        <div className="container">
                            {/* Video list section */}
                            <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div>
                            {/* Similar movies/TV shows section */}
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                {/* Render MovieList component with category, type, and item ID */}
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

// Exporting Detail as the default export of this module
export default Detail;