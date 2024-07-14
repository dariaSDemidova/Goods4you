import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Cart.scss';

interface CartItem {
  id: number;
  productId: number;
  quantity: number;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  title: string;
}

interface Cart {
  id: number;
  userId: number;
  totalProducts: number;
  total: number;
  discountedTotal: number;
  products: CartItem[];
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const userId = 5; 

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (data.carts && data.carts.length > 0) {
          setCart(data.carts[0]);
        } else {
          setCart(null);
          setError('No items');
        }
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
        setError('Failed to fetch cart');
      });
  }, [userId]);

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
          {error || !cart ? (
            <div className="cart__not-found">{error || 'No items'}</div>
          ) : (
            <div className="cart__content">
              <div className="cart__items">
                {cart.products.map((item, index) => {
                  const discountedPrice = (item.price * (100 - item.discountPercentage)) / 100;
                  return (
                    <div key={item.id} className={`cart__item ${index % 2 === 0 ? '' : 'grey'}`}>
                      <div className="cart__item-details">
                        <div className="cart__item-image">
                          <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="cart__item-text">
                          <h3
                            className="cart__item-title"
                            onClick={() => handleTitleClick(item.productId)}
                          >
                            {item.title}
                          </h3>
                          <div className="cart__item-price">{discountedPrice.toFixed(2)} $</div>
                        </div>
                      </div>
                      <div className="cart__item-buttons">
                        <div className="cart__item-control">
                          <button className="cart__item-button">
                            <div className="cart__item-button-minus"></div>
                          </button>
                          <div className="cart__item-amount">{item.quantity} items</div>
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
                  );
                })}
              </div>

              <div className="cart__price-container">
                <div className="cart__total">
                  <div className="cart__count">
                    <div className="cart__count-title">Total count</div>
                    <div className="cart__count-items">{cart.totalProducts} items</div>
                  </div>
                  <div className="cart__discount">
                    <div className="cart__discount-title">Price without discount</div>
                    <div className="cart__discount-amount">{cart.total}$</div>
                  </div>
                </div>
                <div className="cart__price">
                  <div className="cart__price-title">Total price</div>
                  <div className="cart__price-amount">{cart.discountedTotal}$</div>
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
