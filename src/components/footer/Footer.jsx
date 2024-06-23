import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/pexels.jpg';
import logo from '../../assets/logo.png';

const Footer = () => {
    const teamMembers = [
        { name: 'Kgomotso Troos Nacane', github: 'https://github.com/Kgomotso196' },
        { name: 'Sakhile Motha', github: 'https://github.com/KhileM' },
        { name: 'Pumlani Kewana', github: 'https://github.com/Pumlanikewana' },
    ];

    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__menus">
                    {/* GitHub links for team members on the far left */}
                    <div className="footer__content__menu footer__content__team">
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Design Team:</p>
                        <ul className="github-list">
                            {teamMembers.map((member, index) => (
                                <li key={index}>
                                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub /> {member.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Credits list in the middle */}
                    <div className="footer__content__menu">
                        <Link to="/">Credits</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                    </div>
                    {/* FAQ list on the far right */}
                    <div className="footer__content__menu">
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy policy</Link>
                    </div>
                </div>
                {/* <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">MOasis</Link>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;
