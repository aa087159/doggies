import React from 'react';
import './Home.css';
import Carousel from '../../components/Carousel.js';
import Banner from '../../components/Banner.js';
import About from '../../components/About.js';

export default function Home() {
	return (
		<>
			<Carousel slidesSrc={'./img/HomeImgs'}>
				<Banner imgSrc='./img/HomeImgs/logo.png' />
			</Carousel>
			<About />
		</>
	);
}
