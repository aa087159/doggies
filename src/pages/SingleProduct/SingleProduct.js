import React, { Component } from 'react';
import { ShopContext } from '../../context';
import { Link } from 'react-router-dom';
import './SingleProduct.css';
import SingleCarousel from '../../components/SingleCarousel';

export class SingleProduct extends Component {
	state = {
		singleProductURL: this.props.match.params.singleProductURL
	};

	static contextType = ShopContext;

	render() {
		const { getSingleProduct } = this.context;
		const singleProduct = getSingleProduct(this.state.singleProductURL);
		if (!singleProduct) {
			return (
				<div className='error'>
					<h3>no such product...</h3>
					<Link to='/products' className='btn-primary'>
						back to products
					</Link>
				</div>
			);
		}
		const {
			productName,
			price,
			description,
			material,
			color,
			images
		} = singleProduct;
		return (
			<div className='singleProductPage'>
				<SingleCarousel imgs={images} />
				<div className='description'>
					<h1>{productName}</h1>
					<h2>{price}</h2>
					<h2>{material}</h2>
					<h2>
						{color
							? color.map((tint) => {
									return tint;
							  })
							: null}
					</h2>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

export default SingleProduct;
