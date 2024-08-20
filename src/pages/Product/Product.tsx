import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Product.scss';
import { Product as ProductType } from '../../product';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          setProduct(data);
          setSelectedImage(data.images.length > 0 ? data.images[0] : data.thumbnail);
        } else {
          setProduct(null);
        }
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="product__not-found">
        <Helmet>
          <title>Product Not Found | Goods4you</title>
        </Helmet>
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
  const roundedRating = Math.round(product.rating);

  return (
    <>
      <Helmet>
        <title>{product.title} | Goods4you</title>
        <meta name="description" content="Any products from famous brands with worldwide delivery" />
      </Helmet>
      <main className="product">
        <div className="product__container">
          <div className="product__gallery">
            <div className="product__image">
              <img src={selectedImage || product.thumbnail} alt={product.title} />
            </div>
            {product.images.length > 1 && (
              <div className="product__scroll">
                <div className="product__scroll-images">
                  {product.images.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={product.title}
                      className={selectedImage === image ? 'product__active' : ''}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="product__info">
            <div className="product__title">{product.title}</div>
            <div className="product__details">
              <div className="star-rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < roundedRating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
              <div className="product__category">{product.category}</div>
            </div>
            <div className="product__stock">{product.stock > 0 ? `In Stock - ${product.stock} left!` : 'Out of Stock'}</div>
            <div className="product__text">{product.description}</div>
            {product.warrantyInformation && (
              <div className="product__warranty">{product.warrantyInformation}</div>
            )}
            {product.shippingInformation && (
              <div className="product__delivery">{product.shippingInformation}</div>
            )}
            <div className="product__buying">
              <div className="product__prices">
                <div className="product__price">
                  <div className="product__price-final">{discountedPrice} $</div>
                  <div className="product__price-total">{product.price} $</div>
                </div>
                <div className="product__discount">
                  <div className="product__discount-title">Your discount:</div>
                  <div className="product__discount-amount">{product.discountPercentage}%</div>
                </div>
              </div>
              <button className="product__add-button">Add to cart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;

