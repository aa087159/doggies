import React, { useEffect } from 'react';
import { ShopConsumer } from '../../context';
import './Home.css';
import Carousel from '../../components/Carousel.js';
import Banner from '../../components/Banner.js';
import CurlySVG from '../../components/CurlySVG.js';
import About from '../../components/About.js';

export default function Home(props) {
	const elem = document.getElementsByClassName('slick-thumb');

	useEffect(() => {
		elem[0].classList.add('visible');
	});

	return (
		<ShopConsumer>
			{(value) => {
				return (
					<div>
						<Carousel slidesSrc={'./img/HomeImgs'}>
							<Banner imgSrc='./img/HomeImgs/logo.png' />
							<CurlySVG duration='2000' />
						</Carousel>
						<About />
					</div>
				);
			}}
		</ShopConsumer>
	);
}
