// I import React to use its functionality for creating components
import React from 'react';

// I import the stylesheet for the footer component
import './footer.scss';

// I import the Link component from react-router-dom to create navigational links
import { Link } from 'react-router-dom';

// I import background and logo images to use in the footer
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

// I create a Footer component using a functional component
const Footer = () => {
    return (
        // I return a div with a background image and several nested elements
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            {/* I create a container div for the footer content */}
            <div className="footer__content container">
                
                {/* I create a logo section in the footer */}
                <div className="footer__content__logo">
                    <div className="logo">
                        {/* I add the logo image */}
                        <img src={logo} alt="" />
                        {/* I create a link to the home page */}
                        <Link to="/">tMovies</Link>
                    </div>
                </div>
                
                {/* I create a section for footer menus */}
                <div className="footer__content__menus">
                    {/* I create the first menu with several links */}
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    {/* I create the second menu with several links */}
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy policy</Link>
                    </div>
                    {/* I create the third menu with several links */}
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// I export the Footer component as the default export of this module
export default Footer;
