import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchProductsQuery } from '../../product';
import cartIcon from '../../assets/icons/cart.svg';
import debounce from 'lodash/debounce';
import './Catalog.scss';
import Loading from '../Loading/Loading';

export interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  hasTwoButtons?: boolean;
}

const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 12;
  const skip = (page - 1) * limit;

  const { data, error, isLoading } = useSearchProductsQuery({ q: searchTerm, limit, skip });

  useEffect(() => {
    if (data) {
      console.log(data.products);
      if (page === 1) {
        setProducts(data.products);
      } else {
        setProducts(prevProducts => {
          const newProducts = data.products.filter(
            newProduct => !prevProducts.some(prevProduct => prevProduct.id === newProduct.id)
          );
          return [...prevProducts, ...newProducts];
        });
      }
      setTotalProducts(data.total);
    }
  }, [data, page]);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
    const target = e.target as HTMLElement;
    if (target.closest('button')) {
      return;
    }
    navigate(`/product/${id}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setPage(1);
  };

  const debouncedHandleSearchChange = debounce(handleSearchChange, 300);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  if (isLoading && page === 1) return <div className='loading'><Loading/></div>;
  if (error) return <div className='error'>Error</div>;

  return (
    <section className="catalog" id="catalog">
      <div className="catalog__container">
        <h2 className="catalog__title">Catalog</h2>
        <input
          type="text"
          placeholder="Search by title"
          className="catalog__search"
          defaultValue={searchTerm}
          onChange={debouncedHandleSearchChange}
        />
        <div className="catalog__items">
          {products.map((product: Product) => {
            const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
            return (
              <div
                key={product.id}
                className="catalog__item"
                onClick={(e) => handleCardClick(e, product.id)}
              >
                <div className="catalog__item-image">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="catalog__item-details">
                  <div className="catalog__item-text">
                    <h3 className="catalog__item-title">{product.title}</h3>
                    <div className="catalog__item-price">{discountedPrice} $</div>
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
            );
          })}
        </div>
        {products.length < totalProducts && (
          <button className="catalog__button" onClick={handleShowMore}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default Catalog;