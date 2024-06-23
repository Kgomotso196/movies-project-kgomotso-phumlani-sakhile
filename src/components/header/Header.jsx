// I import necessary modules from React and React Router
import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// I import the stylesheet for the header component
import './header.scss';

// I import the logo image to use in the header
import logo from '../../assets/tmovie.png';

// I define the navigation items for the header
const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

// I create a Header component using a functional component
const Header = () => {

    // I use the useLocation hook to get the current path
    const { pathname } = useLocation();

    // I create a ref to access the header DOM element
    const headerRef = useRef(null);

    // I find the active navigation item based on the current path
    const active = headerNav.findIndex(e => e.path === pathname);

    // I use the useEffect hook to add a scroll event listener
    useEffect(() => {
        // I define a function to shrink the header on scroll
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        // I add the scroll event listener to the window
        window.addEventListener('scroll', shrinkHeader);
        // I clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    // I return the JSX for the header component
    return (
        // I set the ref to the header div and apply the header class
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                {/* I create a logo section in the header */}
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">tMovies</Link>
                </div>
                {/* I create a navigation menu */}
                <ul className="header__nav">
                    {
                        // I map over the navigation items to create list items
                        headerNav.map((e, i) => (
                            // I set the key and apply the active class if the item is active
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

// I export the Header component as the default export of this module
export default Header;