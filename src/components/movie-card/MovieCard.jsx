import React from 'react';

// I import the stylesheet for the movie card component
import './movie-card.scss';

// I import Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

// I import the Button component
import Button from '../button/Button';

// I import category and apiConfig from TMDB API
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

// I create the MovieCard component using a functional component
const MovieCard = props => {

    // I destructure the item prop
    const { item } = props;

    // I construct the link to navigate to the movie or TV show detail page
    const link = '/' + category[props.category] + '/' + item.id;

    // I set the background image for the movie card
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    // I return JSX to render the movie card
    return (
        <Link to={link}>
            {/* I create a div with a background image */}
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                {/* I render a Button component */}
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            {/* I render the title of the movie or TV show */}
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

// I export the MovieCard component as the default export of this module
export default MovieCard;
