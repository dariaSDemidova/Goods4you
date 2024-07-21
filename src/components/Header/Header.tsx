import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../../cartSlice';
import { fetchCurrentUser, selectCurrentUser, selectToken } from '../../authSlice';
import { AppDispatch, RootState } from '../../store';
import './Header.scss';
import cartIcon from '../../assets/icons/cart.svg';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { totalQuantity, status: cartStatus } = useSelector((state: RootState) => state.cart);
    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectToken);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else if (!user) {
            dispatch(fetchCurrentUser());
        }
    }, [dispatch, navigate, token, user]);

    useEffect(() => {
        if (cartStatus === 'idle') {
            dispatch(fetchCartItems());
        }
    }, [cartStatus, dispatch]);

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
                                {totalQuantity > 0 && (
                                    <div className="header__cart-count">{totalQuantity}</div>
                                )}
                            </div>
                        </li>
                        {user ? (
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link" onClick={toggleMenu}>{`${user.firstName} ${user.lastName}`}</a>
                            </li>
                        ) : (
                            <li className="header__menu-item">
                                <Link to="/login" className="header__menu-link" onClick={toggleMenu}>Login</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

