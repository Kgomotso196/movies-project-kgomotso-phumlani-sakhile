import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// I import the stylesheet for the movie list component
import './movie-list.scss';

// I import Swiper components for creating a carousel
import { SwiperSlide, Swiper } from 'swiper/react';

// I import Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

// I import the Button component for UI interaction
import Button from '../button/Button';

// I import necessary API functions and constants from tmdbApi
import tmdbApi, { category } from '../../api/tmdbApi';

// I import MovieCard component to render individual movie items
import MovieCard from '../movie-card/MovieCard';

// I create the MovieList component using a functional component
const MovieList = props => {

    // I set up state to hold the list of movie or TV show items
    const [items, setItems] = useState([]);

    // I fetch list of items based on category and type (upcoming, popular, etc.)
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            // Determine the API call based on props.type and props.category
            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                // If type is 'similar', fetch similar items based on props.category and props.id
                response = await tmdbApi.similar(props.category, props.id);
            }
            // Update state with fetched results
            setItems(response.results);
        }
        // Call the function to fetch data when component mounts
        getList();
    }, []);

    // I return JSX to render the MovieList component
    return (
        <div className="movie-list">
            {/* Render items in a Swiper carousel */}
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    // Map through items and render MovieCard component for each item
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            {/* Pass item and category props to MovieCard component */}
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

// PropTypes validation for category and type props
MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

// I export the MovieList component as the default export of this module
export default MovieList;
