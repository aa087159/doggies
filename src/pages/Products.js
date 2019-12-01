import React from 'react';
import './Home/Home.css';
import Carousel from '../components/Carousel.js';
import Banner from '../components/Banner.js';

export default function Home() {
	return (
		<section className='section-a'>
			<Carousel slidesSrc={'./img/ProductsMain'}>
				<Banner imgSrc='./img/ProductsMain/logo.png' />
			</Carousel>
		</section>
	);
}
