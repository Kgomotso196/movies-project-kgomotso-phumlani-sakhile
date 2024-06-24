import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';

import './movie-grid.scss';

import MovieCard from '../movie-card/MovieCard';
import Button, { OutlineButton } from '../button/Button';
import Input from '../input/Input'

import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

// MovieGrid component definition
const MovieGrid = props => {
    // State for storing list of items (movies or TV shows)
    const [items, setItems] = useState([]);
    // State for managing current page number
    const [page, setPage] = useState(1);
    // State for storing total number of pages available
    const [totalPage, setTotalPage] = useState(0);
    // Get the 'keyword' parameter from the URL
    const { keyword } = useParams();

    // useEffect hook to fetch data when the component mounts or when 'props.category' or 'keyword' changes
    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                // If no keyword, fetch the default list based on category
                const params = {};
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {params});
                }
            } else {
                // If keyword is present, perform a search
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, {params});
            }
            // Set the items and total pages based on the response
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    // Function to load more items when "Load more" button is clicked
    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            // Fetch next page of the default list
            const params = {
                page: page + 1
            };
            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, {params});
            }
        } else {
            // Fetch next page of the search results
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        }
        // Append new items to the existing list and update the page number
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
            </div>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    );
}

// MovieSearch component definition
const MovieSearch = props => {
    // Get history object for navigation
    const history = useHistory();
    // State for managing the search keyword
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    // Function to navigate to the search results page
    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    // useEffect hook to add event listener for 'Enter' key press
    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )
}

// Export MovieGrid component as default
export default MovieGrid;
