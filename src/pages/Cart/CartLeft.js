import React from 'react';
import CartColumn from './CartColumn';
import CartItems from './CartItems';

export default function CartLeft() {
	return (
		<div className='cart-left'>
			<CartColumn />
			<CartItems />
		</div>
	);
}
