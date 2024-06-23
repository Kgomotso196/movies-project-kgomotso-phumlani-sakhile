import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';

// I import the stylesheet for the movie grid component
import './movie-grid.scss';

// I import the MovieCard component for rendering movie items
import MovieCard from '../movie-card/MovieCard';

// I import Button and OutlineButton components for UI interaction
import Button, { OutlineButton } from '../button/Button';

// I import Input component for handling search input
import Input from '../input/Input';

// I import necessary API functions and constants from tmdbApi
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

// I create the MovieGrid component using a functional component
const MovieGrid = props => {

    // I set up state to hold the list of movie or TV show items
    const [items, setItems] = useState([]);

    // I set up state for pagination
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    // I use useParams to get the keyword from the URL
    const { keyword } = useParams();

    // I fetch initial list of items based on category and keyword
    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                // If no keyword, fetch default list based on category
                const params = {};
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {params});
                }
            } else {
                // If keyword exists, perform search based on category and keyword
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, {params});
            }
            // Update state with fetched results and total pages
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    // Function to load more items when "Load more" button is clicked
    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            // If no keyword, fetch next page of default list
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
            // If keyword exists, fetch next page of search results
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        }
        // Concatenate new items with existing items and update pagination state
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    // I return JSX to render the MovieGrid component
    return (
        <>
            {/* Movie search component */}
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
            </div>
            {/* List of movie or TV show items */}
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
                }
            </div>
            {/* "Load more" button if there are more pages to load */}
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

// I create the MovieSearch component to handle search input and navigation
const MovieSearch = props => {

    // I use useHistory to navigate programmatically
    const history = useHistory();

    // I set up state to hold the search keyword
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    // Function to navigate to search results page
    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    // Effect to listen for Enter key press and trigger search
    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    // I return JSX to render the MovieSearch component
    return (
        <div className="movie-search">
            {/* Input for entering search keyword */}
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            {/* Button to trigger search */}
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )
}

// I export the MovieGrid component as the default export of this module
export default MovieGrid;
