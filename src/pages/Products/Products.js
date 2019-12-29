import React from 'react';
import './Products.css';
import Carousel from '../../components/Carousel.js';
import Banner from '../../components/Banner.js';
import CurlySVG from '../../components/CurlySVG.js';

export default function Home() {
	return (
		<>
			<Carousel slidesSrc={'./img/ProductsMain'}>
				<Banner imgSrc='./img/ProductsMain/logo.png' />
				<CurlySVG />
			</Carousel>
		</>
	);
}
