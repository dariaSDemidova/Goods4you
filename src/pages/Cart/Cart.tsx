import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import cartIcon from '../../assets/icons/cart.svg';
import shoesImage from '../../assets/img/white-shoes.jpg';
import './Cart.scss';

const Cart: React.FC = () => {
    const navigate = useNavigate();

    const handleTitleClick = (productId: number) => {
        navigate(`/product/${productId}`);
    };

    return (
        <>
            <Helmet>
                <title>My cart | Goods4you</title>
                <meta name="description" content="Any products from famous brands with worldwide delivery" />
            </Helmet>
            <main className="cart">
                <div className="cart__container">
                    <h1 className="cart__title">My cart</h1>
                    <div className="cart__content">
                        <div className="cart__items">
                            <div className="cart__item">
                                <div className="cart__item-details">
                                    <div className="cart__item-image">
                                        <img src={shoesImage} alt="shoes" />
                                    </div>
                                    <div className="cart__item-text">
                                        <h3
                                            className="cart__item-title"
                                            onClick={() => handleTitleClick(1)} 
                                        >
                                            Essence Mascara Lash Princess
                                        </h3>
                                        <div className="cart__item-price">110 $</div>
                                    </div>
                                </div>
                                <div className="cart__item-buttons">
                                    <div className="cart__item-control">
                                        <button className="cart__item-button">
                                            <div className="cart__item-button-minus"></div>
                                        </button>
                                        <div className="cart__item-amount">1 item</div>
                                        <button className="cart__item-button">
                                            <div className="cart__item-button-plus">
                                                <div className="cart__item-button-plus-vertical"></div>
                                                <div className="cart__item-button-plus-horizontal"></div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="cart__item-delete">Delete</div>
                                </div>
                            </div>

                            <div className="cart__item grey">
                                <div className="cart__item-details">
                                    <div className="cart__item-image">
                                        <img src={shoesImage} alt="shoes" />
                                    </div>
                                    <div className="cart__item-text">
                                        <h3
                                            className="cart__item-title"
                                            onClick={() => handleTitleClick(1)} 
                                        >
                                            Essence Mascara Lash Princess
                                        </h3>
                                        <div className="cart__item-price">110 $</div>
                                    </div>
                                </div>
                                <div className="cart__item-buttons">
                                    <div className="cart__item-control">
                                        <button className="cart__item-button">
                                            <div className="cart__item-button-minus"></div>
                                        </button>
                                        <div className="cart__item-amount">1 item</div>
                                        <button className="cart__item-button">
                                            <div className="cart__item-button-plus">
                                                <div className="cart__item-button-plus-vertical"></div>
                                                <div className="cart__item-button-plus-horizontal"></div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="cart__item-delete">Delete</div>
                                </div>
                            </div>

                            <div className="cart__item">
                                <div className="cart__item-details">
                                    <div className="cart__item-image">
                                        <img src={shoesImage} alt="shoes" />
                                    </div>
                                    <div className="cart__item-text">
                                        <h3
                                            className="cart__item-title"
                                            onClick={() => handleTitleClick(1)} 
                                        >
                                            Essence Mascara Lash Princess
                                        </h3>
                                        <div className="cart__item-price">110 $</div>
                                    </div>
                                </div>
                                <div className="cart__item-buttons">
                                    <div className="cart__item-control">
                                        <button  aria-label="decrease quantity" className="cart__item-button">
                                            <div className="cart__item-button-minus"></div>
                                        </button>
                                        <div className="cart__item-amount">5 items</div>
                                        <button  aria-label="increase quantity" className="cart__item-button">
                                            <div className="cart__item-button-plus">
                                                <div className="cart__item-button-plus-vertical"></div>
                                                <div className="cart__item-button-plus-horizontal"></div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="cart__item-delete">Delete</div>
                                </div>
                            </div>

                            <div className="cart__item">
                                <div className="cart__item-details transparent">
                                    <div className="cart__item-image">
                                        <img src={shoesImage} alt="shoes" />
                                    </div>
                                    <div className="cart__item-text">
                                        <h3
                                            className="cart__item-title"
                                            onClick={() => handleTitleClick(1)} 
                                        >
                                            Essence Mascara Lash Princess
                                        </h3>
                                        <div className="cart__item-price">110 $</div>
                                    </div>
                                </div>
                                <div className="cart__item-buttons">
                                    <button aria-label="delete" className="cart__item-button">
                                        <img src={cartIcon} alt="cart" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="cart__price-container">
                            <div className="cart__total">
                                <div className="cart__count">
                                    <div className="cart__count-title">Total count</div>
                                    <div className="cart__count-items">3 items</div>
                                </div>
                                <div className="cart__discount">
                                    <div className="cart__discount-title">Price without discount</div>
                                    <div className="cart__discount-amount">700$</div>
                                </div>
                            </div>
                            <div className="cart__price">
                                <div className="cart__price-title">Total price</div>
                                <div className="cart__price-amount">590$</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Cart;
