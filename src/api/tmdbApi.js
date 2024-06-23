// I import the configured axios client from the axiosClient module
import axiosClient from "./axiosClient";

// I define a category object to differentiate between movies and TV shows
export const category = {
    movie: 'movie',
    tv: 'tv'
}

// I define an object to specify different types of movie lists
export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

// I define an object to specify different types of TV show lists
export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

// I create an object tmdbApi to organize various API request functions
const tmdbApi = {
    // I define a function to get a list of movies based on type and additional parameters
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    // I define a function to get a list of TV shows based on type and additional parameters
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    // I define a function to get videos related to a specific movie or TV show by ID
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, { params: {} });
    },
    // I define a function to search for movies or TV shows based on category and search parameters
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    // I define a function to get detailed information about a specific movie or TV show by ID
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    // I define a function to get the credits for a specific movie or TV show by ID
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, { params: {} });
    },
    // I define a function to get a list of similar movies or TV shows based on a specific ID
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, { params: {} });
    },
}

// I export the tmdbApi object as the default export of this module
export default tmdbApi;