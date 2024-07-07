import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Hero.scss';

const Hero: React.FC = () => {
    return (
        <section className='hero'>
            <div className="hero__container">
                <h1 className="hero__background">Goods4you</h1>
                <h2 className="hero__title">Any products from famous brands <br/> with worldwide delivery</h2>
                <div className="hero__text">We sell smartphones, laptops, clothes, shoes <br/> and many other products at low prices</div>
                <button className="hero__button"><ScrollLink to="catalog" smooth={true} duration={500}>Go to shopping</ScrollLink></button>
            </div>
        </section>
    );
};

export default Hero;
