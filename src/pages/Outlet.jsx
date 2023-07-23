import React from 'react';
import Carousel from '../components/Carousel'
import BottomBanner from '../components/BottomBanner';
import ProductCard from '../components/ProductCard';

const Outlet = () => {
	return (
		<div>
			<BottomBanner />
			<ProductCard />
		</div>
	);
};

export default Outlet;
