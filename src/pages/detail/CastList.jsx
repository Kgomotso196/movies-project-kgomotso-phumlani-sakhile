import React, { useState, useEffect } from 'react';

// Importing useParams to access route parameters
import { useParams } from 'react-router';

// Importing API functions and configuration from tmdbApi and apiConfig
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

// Functional component CastList
const CastList = props => {
    
    // Destructuring category from route parameters using useParams hook
    const { category } = useParams();

    // State to hold the list of cast members
    const [casts, setCasts] = useState([]);

    // useEffect hook to fetch data when component mounts or dependencies change
    useEffect(() => {
        // Async function to fetch credits for a specific category and item ID
        const getCredits = async () => {
            try {
                // Fetching credits data using tmdbApi based on category and props.id
                const res = await tmdbApi.credits(category, props.id);
                // Setting the state with first 5 cast members from the response
                setCasts(res.cast.slice(0, 5));
            } catch (error) {
                console.error('Error fetching credits:', error);
            }
        }
        // Calling the getCredits function when component mounts or dependencies change
        getCredits();
    }, [category, props.id]); // Dependencies array ensures useEffect runs when category or props.id changes

    // Rendering the list of cast members
    return (
        <div className="casts">
            {
                // Mapping through casts array and rendering each cast member
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        {/* Rendering cast member image */}
                        <div className="casts__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        {/* Rendering cast member name */}
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

// Exporting CastList as the default export of this module
export default CastList;
