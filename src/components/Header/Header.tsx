import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.scss';
import cartIcon from '../../assets/icons/cart.svg';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">Goods4you</Link>
                <div className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`header__menu ${menuOpen ? 'header__menu-open' : ''}`}>
                    <ul className="header__menu-items">
                        <li className="header__menu-item">
                            <ScrollLink to="catalog" smooth={true} duration={500} className="header__menu-link" onClick={toggleMenu}>Catalog</ScrollLink>
                        </li>
                        <li className="header__menu-item">
                            <ScrollLink to="faq" smooth={true} duration={500} className="header__menu-link" onClick={toggleMenu}>FAQ</ScrollLink>
                        </li>
                        <li className="header__menu-item header__cart">
                            <Link to="/cart" className="header__menu-link" onClick={toggleMenu}>Cart</Link>
                            <div className="header__cart-icon">
                                <img src={cartIcon} alt="cart" />
                                <div className="header__cart-count">1</div>
                            </div>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link" onClick={toggleMenu}>Johnson Smith</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
