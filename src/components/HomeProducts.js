import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HomeProducts extends Component {
	state = {
		homeProducts: ['刺繡', '布作', '針織', '木作'],
		imgUrls: [
			'img/HomeImgs/1.jpg',
			'img/HomeImgs/2.jpg',
			'img/HomeImgs/3.jpg',
			'img/HomeImgs/4.jpg'
		],
		texts: [
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, rem?',
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, rem?',
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, rem?',
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, rem?'
		]
	};
	render() {
		return (
			<div className='homeProducts' id='homeProducts'>
				{this.state.homeProducts.map((product, index) => {
					return (
						<div key={index}>
							<img src={this.state.imgUrls[index]} alt='' />
							<h1>{product}</h1>
							<p>{this.state.texts[index]}</p>
							<Link to='/products'>
								<button>more</button>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}

export default HomeProducts;
