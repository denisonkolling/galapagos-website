import React from 'react';
import img from '../assets/desktop_history.jpg';
import CarouselCards from '../components/CarouselCards';
import CategoryCard from '../components/CategoryCard';
import BlogPostCard from '../components/BlogPostCard';

const History = () => {
	return (
		<div className="">
      <div
      className='container d-flex align-items-center justify-content-center p-5'>
        <h1>Histórias que inspiram</h1>
      </div>
			<div>
				<img src={img} className="d-block w-100" alt="..." />
			</div>
			<div>
				{/* <CategoryCard /> */}
				<BlogPostCard />
			</div>
		</div>
	);
};

export default History;
