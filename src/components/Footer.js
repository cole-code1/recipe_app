import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Recipe App &copy; 2024</p>
                <hr className="footer-divider" />
                <div className="social-icons">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={30} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
