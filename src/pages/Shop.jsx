import React from 'react';
import ProductCard from '../components/ProductCard';

export const Shop = () => {
	return (
		<div className="container d-flex flex-column align-items-center justify-content-center p-5">
			<h1>Shop</h1>
			<div>
				<ProductCard />
			</div>
		</div>
	);
};
