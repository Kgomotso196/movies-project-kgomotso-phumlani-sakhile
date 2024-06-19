// Importing the axios library for making HTTP requests
import axios from 'axios';
// Importing the query-string library to stringify query parameters
import queryString from 'query-string';

// Importing the API configuration which contains baseUrl and apiKey
import apiConfig from './apiConfig';

// Creating an axios instance with a custom configuration
const axiosClient = axios.create({
    // Setting the base URL for all requests to the TMDb API
    baseURL: apiConfig.baseUrl,
    // Seting default headers for all requests
    headers: {
        'Content-Type': 'application/json'
    },
    // Sterilizing query parameters and include the API key in all requests
    paramsSerializer: params => queryString.stringify({
        ...params,  // Spreading operator to include all original parameters
        api_key: apiConfig.apiKey  // Adding the apiKey from the apiConfig
    })
});

// Adding a request interceptor to the axios instance
axiosClient.interceptors.request.use(async (config) => {
    // Currently, the interceptor does nothing and returns the config as is
    return config;
});

// Adding a response interceptor to the axios instance
axiosClient.interceptors.response.use((response) => {
    // If the response exists and contains data, I return the data
    if (response && response.data) {
        return response.data;
    }

    // If there's no data in the response, I return the response object itself
    return response;
}, (error) => {
    // If an error occurs, I throw the error to be handled by the calling code
    throw error;
});

// I export the configured axios instance for use in other parts of the application
export default axiosClient;
