// Importing the configured axios client for making HTTP requests
import axiosClient from "./axiosClient";

// Defining an object to categorize different types of media (movies and TV shows)
export const category = {
    movie: 'movie',  // I categorize movies
    tv: 'tv'         // I categorize TV shows
}

// Defining an object to categorize different types of movie lists
export const movieType = {
    upcoming: 'upcoming',    // I categorize upcoming movies
    popular: 'popular',      // I categorize popular movies
    top_rated: 'top_rated'   // I categorize top-rated movies
}

// Defining an object to categorize different types of TV show lists
export const tvType = {
    popular: 'popular',      // I categorize popular TV shows
    top_rated: 'top_rated',  // I categorize top-rated TV shows
    on_the_air: 'on_the_air' // I categorize TV shows that are currently on the air
}

// Creating an object to interact with The Movie Database (TMDb) API
const tmdbApi = {
    // Getting a list of movies based on the specified type and parameters
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];  // constructing the URL for the movie type
        return axiosClient.get(url, params);     // making a GET request to the API
    },
    // Getting a list of TV shows based on the specified type and parameters
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];        // constructing the URL for the TV show type
        return axiosClient.get(url, params);     // making a GET request to the API
    },
    // Getting the videos related to a specific movie or TV show
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';  // constructing the URL for the videos
        return axiosClient.get(url, {params: {}});         // making a GET request to the API
    },
    // searching for movies or TV shows based on the category and parameters
    search: (cate, params) => {
        const url = 'search/' + category[cate];  // constructing the URL for the search
        return axiosClient.get(url, params);     // making a GET request to the API
    },
    // getting the details of a specific movie or TV show
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;   // constructing the URL for the details
        return axiosClient.get(url, params);     // making a GET request to the API
    },
    // Getting the credits (cast and crew) of a specific movie or TV show
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';  // constructing the URL for the credits
        return axiosClient.get(url, {params: {}});          // making a GET request to the API
    },
    // Getting similar movies or TV shows to a specific one
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';  // constructing the URL for similar content
        return axiosClient.get(url, {params: {}});          // making a GET request to the API
    },
}

// exporting the tmdbApi object as the default export for use in other parts of the application
export default tmdbApi;