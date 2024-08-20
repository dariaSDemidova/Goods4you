import React from 'react';
import { Helmet } from 'react-helmet';
import './Product.scss'
import StarRating from '../../components/StarRating/StarRating';

import shoesImage from '../../assets/img/white-shoes.jpg';

const Product: React.FC = () => {
    const initialRating = 4;

    return (
        <>
        <Helmet>
            <title>Essence Mascara Lash Princess | Goods4you</title>
            <meta name="description" content="Any products from famous brands with worldwide delivery" />
        </Helmet>
        <main className="product">
            <div className="product__container">
                <div className="product__gallery">
                    <div className="product__image">
                        <img src={shoesImage} alt="shoes" />
                    </div>
                    <div className="product__scroll">
                        <div className="product__scroll-images">
                            <img src={shoesImage} alt="shoes" className='product__active'/>
                            <img src={shoesImage} alt="shoes" />
                            <img src={shoesImage} alt="shoes" />
                            <img src={shoesImage} alt="shoes" />
                            <img src={shoesImage} alt="shoes" />
                            <img src={shoesImage} alt="shoes" />
                        </div>
                    </div>
                </div>
                <div className="product__info">
                    <div className="product__title">Essence Mascara Lash Princess</div>
                    <div className="product__details">
                        <StarRating initialRating={initialRating} />
                        <div className="product__category">electronics, selfie accessories</div>
                    </div>
                    <div className="product__stock">In Stock - Only 5 left!</div>
                    <div className="product__text">The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</div>
                    <div className="product__warrantly">1 month warranty</div>
                    <div className="product__delivery">Ships in 1 month</div>
                    <div className="product__buying">
                        <div className="product__prices">
                            <div className="product__price">
                                <div className="product__price-final">7.17$</div>
                                <div className="product__price-total">9.99$</div>
                            </div>
                            <div className="product__discount">
                                <div className="product__discount-title">Your discount:</div>
                                <div className="product__discount-amount">14.5%</div>
                            </div>
                        </div>
                        <button className="product__add-button">Add to cart</button>
                                    {/* <div className="product__control">
                                        <button className="product__button">
                                            <div className="product__button-minus"></div>
                                        </button>
                                        <div className="product__amount">1 item
                                        </div>
                                        <button className="product__button">
                                            <div className="product__button-plus">
                                                <div className="product__button-plus-vertical"></div>
                                                <div className="product__button-plus-horizontal"></div>
                                            </div>
                                        </button>
                                    </div> */}
                    </div>
                </div>
            </div>
        </main>
        </>
    );
};

export default Product;
