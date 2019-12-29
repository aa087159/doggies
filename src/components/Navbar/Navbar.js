import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import { ShopContext } from '../../context';
import styled from 'styled-components';

export class Navbar extends Component {
	state = {
		NavTexts: ['關於我們', '手做', '四隻腳', '聯絡我們'],
		ScrollTo: ['about', 'homeProducts', 'animals', 'contact'],
		NavIcon: [
			<i className='fas fa-home fa-2x'></i>,
			<i className='fas fa-dog fa-2x'></i>,
			<i className='fas fa-cat fa-2x'></i>,
			<i className='fas fa-phone fa-2x'></i>
		],
		IsNavScrollAppear: true,
		scrollOffset: [-150, -250, -190, 50]
	};

	static contextType = ShopContext;

	navVisible = React.createRef();

	componentDidMount() {
		window.addEventListener('scroll', (e) => this.handleScroll(e));
		this.navVisible.current.classList.add('visible');
	}

	handleScroll = (e) => {
		const window = e.currentTarget;

		if (this.prev > window.scrollY) {
			this.navVisible.current.classList.remove('scrollNavShow');
		} else if (this.prev < window.scrollY) {
			this.navVisible.current.classList.add('scrollNavShow');
		}
		this.prev = window.scrollY;
	};

	render() {
		const { NavOpenHandler, navOpen } = this.context;

		return (
			<>
				<nav className='navbar' ref={this.navVisible}>
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
									offset={this.state.scrollOffset[index]}
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
