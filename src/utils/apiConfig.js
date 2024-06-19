// Defining a configuration object for The Movie Database (TMDb) API
const apiConfig = {
    // Base URL for the TMDb API
    baseUrl: 'https://api.themoviedb.org/3/',
    
    // Placeholder for the API key.
    apiKey: 'fbba1ed0159fb33f8fd6bf07b679112f',

    // Function to get the full URL for an original-sized image
    // Takes an image path and returns the full URL for the original image
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,

    // Function to get the full URL for a 500px wide image
    // Takes an image path and returns the full URL for the w500 image
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

// Export the apiConfig object as the default export of the module
export default apiConfig;
