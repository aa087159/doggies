import React, { Component } from 'react';
import { ShopContext } from '../../context';
import { Link } from 'react-router-dom';
import './SingleProduct.css';
import SingleCarousel from '../../components/SingleCarousel';

export class SingleProduct extends Component {
	state = {
		singleProductURL: this.props.match.params.singleProductURL,
	};

	static contextType = ShopContext;

	render() {
		const {
			getSingleProduct,
			ToFavoritesOrCartHandler,
			Favorites,
			countChange,
			cart,
		} = this.context;

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
			images,
			inFavorites,
			inCart,
			singleProductUrl,
			count,
			handCraftSort,
		} = singleProduct;

		return (
			<div className='singleProductPage'>
				<SingleCarousel imgs={images} />
				<div className='description'>
					<div className='section-a'>
						<div className='name'>
							<h1>{productName}</h1>
							<i
								className={`${
									inFavorites ? 'fas' : 'far'
								} fa-heart fa-2x`}
								style={{
									color: inFavorites ? '#e65100' : '#000',
								}}
								onClick={() =>
									ToFavoritesOrCartHandler(
										singleProductUrl,
										Favorites,
										'inFavorites'
									)
								}
							></i>
							<p>{inCart ? '已加到購物車' : '未加到購物車'}</p>
						</div>
						<div className='productmaterial'>
							<p>{handCraftSort}</p>/<p>{material}</p>
						</div>

						<h2>NT${price}</h2>
						<hr />
					</div>
					<div className='section-b'>
						<div className='color'>
							<label htmlFor='color'>顏色</label>
							<select id='color'>
								{color.length > 0 ? (
									color.map((each, index) => {
										return (
											<option
												value={each[index]}
												key={index}
												className='option'
											>
												{each}
											</option>
										);
									})
								) : (
									<option value='none'>none</option>
								)}
							</select>
						</div>

						<div className='quantity'>
							<label htmlFor='quantity'>數量</label>
							<input
								type='number'
								id='quantity'
								name='number'
								min={0}
								value={count}
								onChange={
									inCart
										? (e) => {
												e.preventDefault();
										  }
										: (e) =>
												countChange(e, singleProductUrl)
								}
							/>
						</div>

						<div className='addToCart'>
							<input
								type='button'
								value={inCart ? '移出購物車' : '加到購物車'}
								onClick={() =>
									ToFavoritesOrCartHandler(
										singleProductUrl,
										cart,
										'inCart'
									)
								}
							/>
						</div>
						<hr />
					</div>

					<div className='section-c'>
						<h1>小故事</h1>
						<p>{description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleProduct;
