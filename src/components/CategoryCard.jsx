import React from 'react';
import { useState, useEffect } from 'react';
import img1 from '../assets/category_1.jpg';
import img2 from '../assets/category_2.jpg';
import img3 from '../assets/category_3.jpg';
import img4 from '../assets/category_4.jpg';
import img5 from '../assets/category_5.jpg';
import img6 from '../assets/category_6.jpg';

const CategoryCard = () => {
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		const products = [
			{ id: 1, name: 'Equipamentos', imageUrl: `${img1}` },
			{ id: 2, name: 'Esportes', imageUrl: `${img2}` },
			{ id: 3, name: 'Preservação', imageUrl: `${img3}` },
			{ id: 4, name: 'Inspire-se', imageUrl: `${img4}` },
			{ id: 5, name: 'Natureza', imageUrl: `${img5}` },
			{ id: 6, name: 'Viagens', imageUrl: `${img6}` },
		];

		setCategoryList(products);
	};

	return (
		<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				{categoryList.map((c) => (
					<div className="carousel-item active">
						<div className="cards-wrapper">
							<div key={c.id} className="card">
								<img className="card-img-top" src={c.imageUrl} alt="..." />
								<div className="card-body">
									<h6>{c.name}</h6>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev bg-secondary"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next bg-secondary"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default CategoryCard;

{
	/* <div
id="carouselExampleControls"
className="carousel slide"
data-bs-ride="carousel">
<div className="carousel-inner">
	<div className="carousel-item active">
		<div className="cards-wrapper">
			{categoryList.map((p) => (
				<div
					key={p.id}
					className="col-md-3 my-2 d-flex align-items-center justify-content-center">
					<div className="card">
						<img className="card-img-top" src={p.imageUrl} alt="..." />
						<div className="card-body">
							<h6>{p.name}</h6>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div> */
}
