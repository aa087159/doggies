import React, { Component } from 'react';
import { ShopConsumer } from '../../context';

export class CartItems extends Component {
	render() {
		return (
			<ShopConsumer>
				{(value) => {
					const { products } = value;
					let tempProducts = products.filter((product) => {
						return product.inCart;
					});

					tempProducts.map((item, index) => {
						const {
							productName,
							singleProductUrl,
							price,
							count,
							total,
							images
						} = item;
						console.log(productName);
						return (
							<div className='cart-item' key={index}>
								<div className='cart-item-description'>
									<img src={images[0]} alt='' />
									<p>{productName}</p>
								</div>

								<p>{price}</p>
								<p>{count}</p>
								<i className='far fa-trash-alt trash'></i>
								<p>{total}</p>
							</div>
						);
					});
				}}
			</ShopConsumer>
		);
	}
}

export default CartItems;
