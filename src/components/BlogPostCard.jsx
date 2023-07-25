import React from 'react';
import { useState, useEffect } from 'react';
import img1 from '../assets/blogpost_1.jpg';
import img2 from '../assets/blogpost_2.jpg';
import img3 from '../assets/blogpost_3.jpg';
import img4 from '../assets/blogpost_4.jpg';

const BlogPostCard = () => {
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		const posts = [
			{
				id: 1,
				date: '12/04/2023',
				title: 'Coleção Inverno 23',
				category: 'NATUREZA, VIAGENS, INSPIRE-SE',
				text: 'Quantos capítulos compõem a sua história? Assim como a natureza, somos únicos e mutáveis, essencialmente feitos de trechos e de estações...',
				imageUrl: `${img1}`,
			},
			{
				id: 2,
				date: '17/01/2023',
				title: 'Afinal, produtos ecos são mais caros ou têm mais valor?',
				category: 'PRESERVAÇÃO',
				text: 'Nas prateleiras dos supermercados, em shoppings e até mesmo nas redes sociais, cada vez mais marcas, produtos e empresas sustentáveis buscam...',
				imageUrl: `${img2}`,
			},
			{
				id: 3,
				date: '23/12/2022',
				title: 'Paradise Found: um convite para encontrar o seu paraíso',
				category: 'NATUREZA, VIAGENS, INSPIRE-SE',
				text: 'Individual ou coletivo, com muitas ondas ou montanhas, a verdade é que ainda que seja definido pelo Dicionário Michaelis como "lugar extremamente agradável que encanta pela beleza“. PARAÍSO pode ser muito mais do que isso....',
				imageUrl: `${img3}`,
			},
			{
				id: 4,
				date: '16/12/2022',
				title: 'Ilha de Bali: os maiores picos de surf e aventuras',
				category: 'VIAGENS, INSPIRE-SE',
				text: 'Em rotinas cada vez mais agitadas e tecnológicas, um recanto sagrado com clima tropical, natureza selvagem e praias paradisíacas poderia ser a definição de um sonho...',
				imageUrl: `${img4}`,
			},
		];

		setPostList(posts);
	};

	return (
		<div>
			<div className='container'>
				{postList.map((post) => (
					<div className='d-flex  justify-content-center m-4'>
						<img src={post.imageUrl} width="300" alt="" />
						<div className='m-4 '>
							<h6>{post.category}</h6>
							<span>{post.date}</span>
							<h5>{post.title}</h5>
							<p>{post.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogPostCard;
