import React from 'react';
import ProductThumbNail from './ProductThumbNail';
import { ShopConsumer } from '../context';

export default function ProductsList({ products }) {
	if (products.length === 0) {
		return (
			<div className='emptySearch'>
				<h3>很抱歉! 沒有符合篩選條件的選項</h3>
			</div>
		);
	}
	return (
		<ShopConsumer>
			{(value) => {
				return (
					<section className='productList'>
						<div className='productListCenter'>
							{products.map((item) => {
								return (
									<ProductThumbNail
										key={item.id}
										product={item}
										value={value}
									/>
								);
							})}
						</div>
					</section>
				);
			}}
		</ShopConsumer>
	);
}
