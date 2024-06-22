import axios from 'axios';
import queryString from 'query-string';
import { apiKey } from './apiConfig';  // Use named import

const axiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',  // Set the base URL directly here
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({
        ...params,
        api_key: apiKey
    })
});

axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;