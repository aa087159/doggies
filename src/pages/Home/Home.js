import React, { useEffect } from 'react';
import { ShopConsumer } from '../../context';
import './Home.css';
import Carousel from '../../components/Carousel.js';
import Banner from '../../components/Banner.js';
import CurlySVG from '../../components/CurlySVG.js';
import About from '../../components/About.js';

export default function Home(props) {
	const elem = document.getElementsByClassName('slick-thumb');
	const low =
		'M0,1064.449c0,0,310.478,127.536,669.898,127.536c418.931,0,523.188-127.536,920.29-134.782c328.935-6.002,498.812,100,498.812,100V1269H0V1064.449z';
	const high =
		'M0,0c0,0,330.768,0,690.188,0c418.931,0,486.89,0,884.058,0C1909.029,0,2089-0.023,2089-0.023V1269H0V0z';

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
							<CurlySVG duration='2000' low={low} high={high} />
						</Carousel>
						<About />
					</div>
				);
			}}
		</ShopConsumer>
	);
}
