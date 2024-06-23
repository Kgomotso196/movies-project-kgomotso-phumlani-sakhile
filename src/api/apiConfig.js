// Define a configuration object for interacting with the TMDB API
const apiConfig = {
    // Base URL for all API requests
    baseUrl: 'https://api.themoviedb.org/3/',
    
    // API key for authenticating requests
    apiKey: 'fbba1ed0159fb33f8fd6bf07b679112f',
    
    // Function to construct the full URL for original size images
    // Takes an image path as an argument and returns the complete URL
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    
    // Function to construct the full URL for images with a width of 500 pixels
    // Takes an image path as an argument and returns the complete URL
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

// Export the configuration object as the default export of this module
export default apiConfig;