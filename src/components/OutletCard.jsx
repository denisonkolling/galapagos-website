import React from 'react';
import { useState, useEffect } from 'react';
import img1 from '../assets/outlet_1.jpg';
import img2 from '../assets/outlet_2.jpg';
import img3 from '../assets/outlet_3.jpg';
import img4 from '../assets/outlet_4.jpg';
import img5 from '../assets/outlet_5.jpg';
import img6 from '../assets/outlet_6.jpg';
import img7 from '../assets/outlet_7.jpg';
import img8 from '../assets/outlet_8.jpg';

const ProductCard = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = () => {

		const products = [
			{	id: 1, name: 'Camiseta Best View - Preta', price: '71,40', imageUrl: `${img1}`,},
			{ id: 2, name: 'Camiseta Best View - Azul Marinho',	price: '71,40',	imageUrl: `${img2}`,},
			{ id: 3, name: 'Camiseta Go For It - Amarelo Mango', price: '71,40', imageUrl: `${img3}`,},
			{ id: 4, name: 'Camiseta Go For It - Off White', price: '71,40', imageUrl: `${img4}`,},
			{ id: 5, name: 'Boné Aba Curva Yosemite', price: '79,20', imageUrl: `${img5}`,},
			{ id: 6, name: 'Boné Camuflado Woodland', price: '79,20', imageUrl: `${img6}`,},
			{ id: 7, name: 'Mochila Penguin - Bege', price: '179,40', imageUrl: `${img7}`,},
			{ id: 8, name: 'Mochila Penguin - Coral', price: '179,40', imageUrl: `${img8}`,},
		];

		setProductList(products);
	};

	return (
<section id="grid-area" className="container my-5">
			<div className="container">
				<div className="row">
					{productList.map((p) => (
						<div key={p.id}className="col-md-3 my-2 d-flex align-items-center justify-content-center">
							<div className="card">
								<img className="card-img-top" src={p.imageUrl} alt="..." />
								<div className="card-body">
									<h6>{p.name}</h6>
									<h6>R$ {p.price}</h6>
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
