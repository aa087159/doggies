import React from 'react';
import Anime from 'react-anime';
import uuid from 'uuid';

export default function CurlySVG(props) {
	const Low =
		'M0,1064.449c0,0,310.478,127.536,669.898,127.536c418.931,0,523.188-127.536,920.29-134.782c328.935-6.002,498.812,100,498.812,100V1269H0V1064.449z';
	const high =
		'M0,0c0,0,330.768,0,690.188,0c418.931,0,486.89,0,884.058,0C1909.029,0,2089-0.023,2089-0.023V1269H0V0z';

	return (
		<>
			<svg
				key={uuid.v4()}
				width='100%'
				height='100%'
				preserveAspectRatio='none'
				viewBox='0 0 2089 1269'
			>
				<Anime
					easing='easeInSine'
					loop={false}
					autoplay={
						props.visible === undefined ||
						(props.visible !== undefined && props.visible)
							? true
							: false
					}
					duration={props.duration}
					d={[high, Low]}
				>
					<path fill='#fff' d={high}></path>
				</Anime>
			</svg>
		</>
	);
}
