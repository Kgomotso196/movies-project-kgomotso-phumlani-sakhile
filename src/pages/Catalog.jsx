import React from 'react';

import { useParams } from 'react-router'; // Importing useParams from react-router to access route parameters

import PageHeader from '../components/page-header/PageHeader'; // Importing PageHeader component

import { category as cate } from '../api/tmdbApi'; // Importing category as cate from tmdbApi
import MovieGrid from '../components/movie-grid/MovieGrid'; // Importing MovieGrid component

const Catalog = () => {

    const { category } = useParams(); // Extracting category from route parameters

    return (
        <>
            <PageHeader>
                {/* Conditional rendering based on category parameter */}
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    {/* Rendering MovieGrid component with category prop */}
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;