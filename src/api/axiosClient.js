// I import the axios library for making HTTP requests
import axios from 'axios';

// I import the queryString library for serializing query parameters
import queryString from 'query-string';

// I import the API configuration that I defined earlier
import apiConfig from './apiConfig';

// I create an instance of axios with some custom settings
const axiosClient = axios.create({
    // I set the base URL for all requests to the API's base URL
    baseURL: apiConfig.baseUrl,
    
    // I set the Content-Type header to application/json for all requests
    headers: {
        'Content-Type': 'application/json'
    },
    
    // I define a function to serialize query parameters
    // I include the API key in every request by adding it to the params object
    paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig.apiKey })
});

// I add a request interceptor to my axios instance
// This interceptor simply forwards the request configuration without modifying it
axiosClient.interceptors.request.use(async (config) => config);

// I add a response interceptor to my axios instance
// This interceptor checks if the response contains data and returns it
// If there's no data, it returns the entire response
// If an error occurs, it throws the error
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

// I export the configured axios instance as the default export of this module
export default axiosClient;
