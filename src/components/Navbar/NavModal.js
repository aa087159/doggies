import React, { Component } from 'react';
import { ShopContext } from '../../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export class NavModal extends Component {
	static contextType = ShopContext;
	render() {
		const { navOpen, closeNavModal } = this.context;
		const linkNames = [
			'首頁',
			'刺繡',
			'布作',
			'針織',
			'木作',
			'四隻腳',
			'關於我們'
		];
		const links = [
			'/',
			'/products',
			'/products',
			'/products',
			'/products',
			'/products',
			'/products'
		];

		return (
			<StyledNavModal navOpen={navOpen}>
				<ul className='navModal'>
					{linkNames.map((link, index) => {
						return (
							<Link
								to={links[index]}
								onClick={() => closeNavModal()}
								key={index}
							>
								<li>{link}</li>
							</Link>
						);
					})}
				</ul>
			</StyledNavModal>
		);
	}
}

const StyledNavModal = styled.div`
	visibility: ${(props) => (props.navOpen ? 'visible' : 'hidden')};
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	.navModal {
		transform: scale(${(props) => (props.navOpen ? '1' : '0')});
		transition-duration: ${(props) => (props.navOpen ? '0.75s' : '0.5s')};
		a {
			opacity: ${(props) => (props.navOpen ? '1' : '0')};
			transition: opacity 0.2s;
		}
	}
`;

export default NavModal;
