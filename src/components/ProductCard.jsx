import React from 'react';
import { useState, useEffect } from 'react';

const ProductCard = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = () => {

		const products = [
			{	id: 1, name: 'Jaqueta Puffer Fur Seal', price: '599,00', imageUrl: '../src/assets/product_1.jpg',},
			{ id: 2, name: 'Jaqueta Impermeável Darwin',	price: '699,00',	imageUrl: '../src/assets/product_2.jpg',},
			{ id: 3, name: 'Colete Puffer Hermit Crab', price: '379,00', imageUrl: '../src/assets/product_3.jpg',},
			{ id: 4, name: 'Jaqueta Corta Vento Nazca', price: '369,00', imageUrl: '../src/assets/product_4.jpg',},
			{ id: 5, name: 'Mochila Pelican', price: '369,00', imageUrl: '../src/assets/product_5.jpg',},
			{ id: 6, name: 'Mochila Albatross', price: '279,00', imageUrl: '../src/assets/product_6.jpg',},
			{ id: 7, name: 'Garrafa Cascade 710ml', price: '149,00', imageUrl: '../src/assets/product_7.jpg',},
			{ id: 8, name: 'Copo Cave de 350ml ', price: '99,00', imageUrl: '../src/assets/product_8.jpg',},
		];

		setProductList(products);
	};

	return (
<section id="grid-area" className="container d-block  justify-content-center my-5">
			<div className="container">
				<div className="row">
					{productList.map((p) => (
						<div key={p.id}className="col-md-3 my-2 d-flex align-items-stretch">
							<div className="card">
								<img className="card-img-top" src={p.imageUrl} alt="..." />
								<div className="card-body">
									<h6>{p.name}</h6>
									<h6>R${p.price}</h6>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductCard;
