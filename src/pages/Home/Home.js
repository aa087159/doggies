import React, { useEffect } from 'react';
import './Home.css';
import Carousel from '../../components/Carousel.js';
import Banner from '../../components/Banner.js';
import About from '../../components/About.js';
import Anime from 'react-anime';
import styled from 'styled-components';

export default function Home() {
	const Low =
		'M0,1064.449c0,0,310.478,127.536,669.898,127.536c418.931,0,523.188-127.536,920.29-134.782c328.935-6.002,498.812,100,498.812,100V1269H0V1064.449z';
	const high =
		'M0,0c0,0,330.768,0,690.188,0c418.931,0,486.89,0,884.058,0C1909.029,0,2089-0.023,2089-0.023V1269H0V0z';

	const SetTime = styled.div``;

	const elem = document.getElementsByClassName('slick-thumb');

	useEffect(() => {
		setTimeout(() => {
			elem[0].classList.add('visible');
		}, 0);
		return () => {
			elem[0].classList.remove('visible');
		};
	}, [elem[0]]);

	return (
		<SetTime>
			<Carousel slidesSrc={'./img/HomeImgs'}>
				<Banner imgSrc='./img/HomeImgs/logo.png' />
				<svg
					className='svgOne'
					width='100%'
					height='100%'
					preserveAspectRatio='none'
					viewBox='0 0 2089 1269'
				>
					<Anime
						easing='easeInOutQuad'
						direction='normal'
						loop={false}
						autoplay={true}
						duration={3000}
						delay={-1100}
						d={[{ value: high }, { value: Low }]}
					>
						<path fill='#fff' d={{ value: Low }}></path>
					</Anime>
				</svg>
			</Carousel>

			<About />
		</SetTime>
	);
}
