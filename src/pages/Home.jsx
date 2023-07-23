import React from 'react';
import Carousel from '../components/Carousel'
import BottomBanner from '../components/BottomBanner';
import ProductCard from '../components/ProductCard';


const Home = () => {
	return (
		<div>
			<Carousel />
			<BottomBanner />
			<ProductCard />
		</div>
	);
};

export default Home;
