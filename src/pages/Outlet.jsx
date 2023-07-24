import React from 'react';
import Carousel from '../components/Carousel'
import BannerBottom from '../components/BannerBottom';
import ProductCard from '../components/ProductCard';

const Outlet = () => {
	return (
		<div>
			<BannerBottom />
			<ProductCard />
		</div>
	);
};

export default Outlet;
