import React from 'react';
import Carousel from '../components/Carousel'
import BannerBottom from '../components/BannerBottom';
import ProductCard from '../components/ProductCard';



const Home = () => {
	return (
		<div>
			<Carousel />
			<BannerBottom />
			<ProductCard />
		</div>
	);
};

export default Home;
