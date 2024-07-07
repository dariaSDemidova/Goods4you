import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../../components/Hero/Hero';
import Catalog from '../../components/Catalog/Catalog';
import FAQ from '../../components/FAQ/FAQ';

const Home: React.FC = () => {
        return (
                <>
                        <Helmet>
                                <title>Catalog | Goods4you</title>
                                <meta name="description" content="Any products from famous brands with worldwide delivery" />
                        </Helmet>
                        <main>
                                <Hero />
                                <Catalog />
                                <FAQ />
                        </main>
                </>
        );
};

export default Home;
