// I import necessary modules from React, Swiper, and React Router
import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router';

// I import custom Button and Modal components
import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

// I import API configurations and methods
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

// I import the stylesheet for the hero slide component
import './hero-slide.scss';

// I create the HeroSlide component using a functional component
const HeroSlide = () => {

    // I enable the use of the Autoplay module in Swiper
    SwiperCore.use([Autoplay]);

    // I set up state to hold the list of movie items
    const [movieItems, setMovieItems] = useState([]);

    // I use the useEffect hook to fetch the list of popular movies when the component mounts
    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(1, 4));
                console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);

    // I return the JSX for the hero slide component
    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                // autoplay={{delay: 3000}}
            >
                {
                    // I map over the movie items to create Swiper slides
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                // I map over the movie items to create trailer modals
                movieItems.map((item, i) => <TrailerModal key={i} item={item} />)
            }
        </div>
    );
}

// I create the HeroSlideItem component to render each slide item
const HeroSlideItem = props => {

    // I use the useHistory hook to navigate programmatically
    let history = useHistory();

    const item = props.item;

    // I set the background image for the slide item
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    // I define a function to set the modal active and load the trailer
    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);

        const videos = await tmdbApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
    }

    // I return the JSX for the slide item
    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

// I create the TrailerModal component to render the trailer modal
const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    // I define a function to clear the iframe src when the modal closes
    const onClose = () => iframeRef.current.setAttribute('src', '');

    // I return the JSX for the modal
    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}

// I export the HeroSlide component as the default export of this module
export default HeroSlide;