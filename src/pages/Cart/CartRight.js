import React from 'react';
import { ShopConsumer } from '../../context';
import Paypal from './Paypal';

export default function CartRight({ history }) {
	return (
		<ShopConsumer>
			{(value) => {
				const { clearCart, total } = value;

				return (
					<div className='cart-right'>
						<div className='price'>
							<p>總價</p>
							<p>NT${total}</p>
						</div>

						<div className='paypal'>
							<button onClick={clearCart}>清空購物車</button>
							<Paypal
								total={total}
								clearCart={clearCart}
								history={history}
							/>
						</div>
					</div>
				);
			}}
		</ShopConsumer>
	);
}
