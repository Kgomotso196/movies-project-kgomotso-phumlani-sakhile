import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import Video from './Video'; // Importing Video component

const VideoList = props => {

    const { category } = useParams(); // Extracting category from route parameters

    const [videos, setVideos] = useState([]); // State to hold video list

    useEffect(() => {
        const getVideos = async () => {
            try {
                // Fetching videos using tmdbApi based on category and props.id
                const res = await tmdbApi.getVideos(category, props.id);
                // Slicing the results to display only the first 5 videos
                setVideos(res.results.slice(0, 5));
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }
        getVideos(); // Calling getVideos function when component mounts or category/props.id change
    }, [category, props.id]); // Dependency array ensures useEffect runs when category or props.id change

    return (
        <>
            {
                // Mapping through videos state to render each Video component
                videos.map((item, i) => (
                    <Video key={i} item={item}/> // Rendering Video component with key and item props
                ))
            }
        </>
    );
}


import React, { useEffect, useRef } from 'react';

const Video = props => {

    const item = props.item; // Destructuring item from props

    const iframeRef = useRef(null); // Ref for accessing the iframe DOM element

    useEffect(() => {
        // Setting the height of the iframe based on its width to maintain aspect ratio
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []); // useEffect runs once when component mounts due to empty dependency array

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2> {/* Rendering video title */}
            </div>
            {/* Embedding YouTube video using iframe */}
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`} // Embedding YouTube video using item's key
                ref={iframeRef} // Assigning ref to access iframe DOM element
                width="100%" // Setting iframe width to 100% of its container
                title="video" // Title attribute for iframe
            ></iframe>
        </div>
    )
}

export default Video;