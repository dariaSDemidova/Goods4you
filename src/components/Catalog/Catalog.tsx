import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data';
import cartIcon from '../../assets/icons/cart.svg';
import './Catalog.scss';

const Catalog: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
        const target = e.target as HTMLElement;

        if (target.closest('button')) {
            return;
        }

        navigate(`/product/${id}`);
    };

    return (
        <section className="catalog" id="catalog">
            <div className="catalog__container">
                <h2 className="catalog__title">Catalog</h2>
                <input
                    type="text"
                    placeholder="Search by title"
                    className="catalog__search"
                />
                <div className="catalog__items">
                    {products.map(product => (
                        <div
                            key={product.id}
                            className="catalog__item"
                            onClick={(e) => handleCardClick(e, product.id)}
                        >
                            <div className="catalog__item-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="catalog__item-details">
                                <div className="catalog__item-text">
                                    <h3 className="catalog__item-title">
                                        {product.title}
                                    </h3>
                                    <div className="catalog__item-price">{product.price} $</div>
                                </div>
                                {product.hasTwoButtons ? (
                                    <div className="catalog__item-control">
                                        <button aria-label="decrease quantity" className="catalog__item-button">
                                            <div className="catalog__item-button-minus"></div>
                                        </button>
                                        <div className="catalog__item-amount">1 item</div>
                                        <button aria-label="increase quantity" className="catalog__item-button">
                                            <div className="catalog__item-button-plus">
                                                <div className="catalog__item-button-plus-vertical"></div>
                                                <div className="catalog__item-button-plus-horizontal"></div>
                                            </div>
                                        </button>
                                    </div>
                                ) : (
                                    <button aria-label="delete" className="catalog__item-button">
                                        <img src={cartIcon} alt="cart" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="catalog__button">Show more</button>
            </div>
        </section>
    );
};

export default Catalog;
