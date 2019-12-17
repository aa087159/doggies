import React from 'react';
import './Home.css';
import Carousel from '../../components/Carousel.js';
import Banner from '../../components/Banner.js';
import About from '../../components/About.js';

function useOnScreen(options) {
	const ref = React.useRef();
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setVisible(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options]);
	return [ref, visible];
}

export default function Home() {
	const [ref, visible] = useOnScreen({ rootMargin: '-100px' });
	return (
		<>
			<Carousel slidesSrc={'./img/HomeImgs'}>
				<Banner imgSrc='./img/HomeImgs/logo.png' />
			</Carousel>
			<About />
			<div
				className=''
				style={{
					height: '100vh',
					backgroundColor: visible ? 'pink' : '#000'
				}}
				ref={ref}
			></div>

			<div
				className=''
				style={{
					height: '100vh'
				}}
			></div>
		</>
	);
}
