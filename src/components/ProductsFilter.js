import React from 'react';
import { ShopConsumer } from '../context';

export default function ProductsFilter() {
	return (
		<ShopConsumer>
			{(value) => {
				const {
					minPrice,
					maxPrice,
					price,
					handleChange,
					filterProducts
				} = value;
				const buttons = ['全部商品', '刺繡', '布作', '針織', '木作'];
				const sorts = [
					'all',
					'embroidery',
					'cloth',
					'knitting',
					'wooden'
				];
				return (
					<div className='productsFilter'>
						{buttons.map((each, index) => {
							return (
								<input
									key={index}
									type='button'
									name={sorts[index]}
									value={each}
									onClick={filterProducts}
									className='handCraftSort'
								/>
							);
						})}

						<div className='priceRangeWrapper'>
							<label htmlFor='price'>商品價格 NT${price}</label>
							<input
								type='range'
								name='price'
								min={minPrice}
								max={maxPrice}
								id='price'
								value={price}
								onChange={handleChange}
								className='priceRange'
							/>
						</div>
					</div>
				);
			}}
		</ShopConsumer>
	);
}
