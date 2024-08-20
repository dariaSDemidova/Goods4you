import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { removeFromCart, updateCart } from '../../cartSlice';
import './Cart.scss';
import { Helmet } from 'react-helmet';

const Cart: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  
  const { items, totalQuantity, total, discountedTotal, error, status } = useSelector((state: RootState) => state.cart);

  const handleTitleClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    const product = items.find(item => item.id === productId);
    if (product) {
      const updatedProduct = { ...product, quantity };
      if (quantity > 0) {
        dispatch(updateCart(updatedProduct));
      } else {
        dispatch(removeFromCart(productId));
      }
    }
  };

  if (status === 'loading') return <div className='loading'>Loading...</div>;
  if (status === 'failed' || error) return <div className='error'>{error || 'Error'}</div>;

  const roundedTotal = parseFloat(total.toFixed(2));
  const roundedDiscountedTotal = parseFloat(discountedTotal.toFixed(2));

  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta name="description" content="Any products from famous brands with worldwide delivery" />
      </Helmet>

      <main className="cart">
        <div className="cart__container">
          <h1 className="cart__title">My cart</h1>
          {items.length === 0 ? (
            <div className="cart__not-found">No items</div>
          ) : (
            <div className="cart__content">
              <div className="cart__items">
                {items.map((item) => {
                  const discountedPrice = (item.price * (100 - item.discountPercentage)) / 100;
                  return (
                    <div key={item.id} className="cart__item">
                      <div className="cart__item-details">
                        <div className="cart__item-image">
                          <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="cart__item-text">
                          <h3
                            className="cart__item-title"
                            onClick={() => handleTitleClick(item.id)}
                          >
                            {item.title}
                          </h3>
                          <div className="cart__item-price">{discountedPrice.toFixed(2)} $</div>
                        </div>
                      </div>
                      <div className="cart__item-buttons">
                        <div className="cart__item-control">
                          <button 
                            className="cart__item-button" 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <div className="cart__item-button-minus"></div>
                          </button>
                          <div className="cart__item-amount">{item.quantity} items</div>
                          <button 
                            className="cart__item-button" 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <div className="cart__item-button-plus">
                              <div className="cart__item-button-plus-vertical"></div>
                              <div className="cart__item-button-plus-horizontal"></div>
                            </div>
                          </button>
                        </div>
                        <div 
                          className="cart__item-delete"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="cart__price-container">
                <div className="cart__total">
                  <div className="cart__count">
                    <div className="cart__count-title">Total count</div>
                    <div className="cart__count-items">{totalQuantity} items</div>
                  </div>
                  <div className="cart__discount">
                    <div className="cart__discount-title">Price without discount</div>
                    <div className="cart__discount-amount">{roundedTotal}$</div>
                  </div>
                </div>
                <div className="cart__price">
                  <div className="cart__price-title">Total price</div>
                  <div className="cart__price-amount">{roundedDiscountedTotal}$</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Cart;
