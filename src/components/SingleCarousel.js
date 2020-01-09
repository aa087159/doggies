import React, { Component } from 'react';
import Slider from 'react-slick';
import { ShopConsumer } from '../context';

export class SingleCarousel extends Component {
	render() {
		return (
			<ShopConsumer>
				{(value) => {
					const { imgs } = this.props;

					const settings = {
						customPaging: function(i) {
							return (
								<a href='/'>
									<img src={`${imgs[i + 1]}`} alt='/' />
								</a>
							);
						},
						dots: true,
						dotsClass: 'slick-dots slick-thumb',
						infinite: true,
						speed: 500,
						slidesToShow: 1,
						slidesToScroll: 1
					};

					return (
						<div className='singleCarousel'>
							<Slider {...settings}>
								{imgs.map((img, index) => {
									return (
										<div
											key={index}
											className='singleCarouselImg'
										>
											<img src={img} alt='/' />
										</div>
									);
								})}
							</Slider>
						</div>
					);
				}}
			</ShopConsumer>
		);
	}
}

export default SingleCarousel;
