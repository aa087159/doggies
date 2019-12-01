import React, { Component } from 'react';
import { FaDog, FaPhone, FaCat, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import { ShopContext } from '../../context';
import styled from 'styled-components';

export class Navbar extends Component {
	state = {
		NavTexts: ['關於我們', '手做', '四隻腳', '聯絡我們'],
		ScrollTo: ['section-b', 'section-c', 'section-d', 'section-e'],
		NavIcon: [
			<FaHome size='28' />,
			<FaDog size='28' />,
			<FaCat size='28' />,
			<FaPhone size='28' />
		]
	};

	static contextType = ShopContext;

	render() {
		const { NavOpenHandler, navOpen } = this.context;
		return (
			<>
				<nav className='navbar'>
					<ul>
						<li>
							<Link to='/'>
								<img
									className='navLogo'
									src='./img/HomeImgs/NavLogo.png'
									alt='img'
								/>
							</Link>
						</li>
						<div></div>
						{this.state.NavTexts.map((navLink, index) => {
							return (
								<ScrollLink
									activeClass='activer'
									to={this.state.ScrollTo[index]}
									spy={true}
									smooth='easeInQuad'
									offset={0}
									duration={500}
									key={index}
								>
									{this.state.NavIcon[index]}
									<p className=''>
										{this.state.NavTexts[index]}
									</p>
								</ScrollLink>
							);
						})}
						<div></div>
						<div></div>
					</ul>
				</nav>
				<StyledHamburger
					className='hamburger'
					navOpen={navOpen}
					onClick={NavOpenHandler}
				>
					<div></div>
				</StyledHamburger>
			</>
		);
	}
}

const StyledHamburger = styled.div`
	& > div {
		transform: rotate(${(props) => (props.navOpen ? '225deg' : '0')});
	}

	& > div::before {
		top: ${(props) => (props.navOpen ? '0' : '-10px')};
		transform: rotate(${(props) => (props.navOpen ? '90deg' : '0')});
	}
	& > div::after {
		top: ${(props) => (props.navOpen ? '0' : '10px')};
		transform: rotate(${(props) => (props.navOpen ? '90deg' : '0')});
	}
`;

export default Navbar;
