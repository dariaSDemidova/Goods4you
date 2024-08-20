import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Footer.scss'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link to="/" className="footer__logo">Goods4you</Link>
                <nav className="footer__menu">
                    <ul className="footer__menu-items">
                        <li className="footer__menu-item"><ScrollLink to="catalog" smooth={true} duration={500} className="footer__menu-link">Catalog</ScrollLink></li>
                        <li className="footer__menu-item"><ScrollLink to="faq" smooth={true} duration={500} className="footer__menu-link">FAQ</ScrollLink></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;