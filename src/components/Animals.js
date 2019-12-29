import React, { Component } from 'react';
import Slider from 'react-slick';
import CurlySVG from './CurlySVG.js';
import PhotoGallery from './PhotoGallery';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

function BarWrapper(props) {
	return (
		<div>
			<div style={{ marginTop: 10 }}>
				<div
					style={{
						width: '60%',
						paddingRight: 10,
						paddingBottom: '10px'
					}}
				>
					{props.children}
				</div>
				<div
					style={{
						width: '55%',
						textAlign: 'center'
					}}
				>
					<p>{props.label}</p>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default class Animals extends Component {
	state = {
		visible: false,
		pets: [
			[
				'成成',
				'小店長',
				'雪納瑞',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id molestias nemo maxime! Ipsum consectetur temporibus corrupti eius optio minus.'
			],
			[
				'俠俠',
				'副小店長',
				'米克斯',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, aliquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id molestias nemo maxime! Ipsum consectetur temporibus corrupti eius optio minus.'
			]
		],
		progressValue: [
			['100', '30', '40', '80'],
			['80', '100', '80', '80']
		],
		progressLabel: ['貪吃力', '戰鬥力', '精力', '撒嬌力'],
		isRevealPics: true
	};
	ref = React.createRef();

	async componentDidMount() {
		const observer = new IntersectionObserver(
			([entry]) => {
				this.setState({ visible: entry.isIntersecting });
				if (entry.intersectionRatio > 0) {
					observer.unobserve(this.ref.current);
				}
			},
			{
				rootMargin: '-1px'
			}
		);

		if (this.ref.current) {
			observer.observe(this.ref.current);
		}
	}

	revealPicsHandler = () => {
		this.setState((prevState) => ({
			isRevealPics: !prevState.isRevealPics
		}));
	};

	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		const {
			visible,
			pets,
			progressValue,
			progressLabel,
			isRevealPics
		} = this.state;
		return (
			<DownDisappear isRevealPics={isRevealPics}>
				<div className='animals' ref={this.ref}>
					<h1 className='animalsTitle'>四隻腳</h1>
					<Slider {...settings}>
						{pets.map((pet, index) => {
							return (
								<div className='myAnimalGrid' key={index}>
									<div className='picBackGround'></div>
									<div className='description'>
										<h2>{`${pet[1]}-${pet[0]}`}</h2>
										<h4>{pet[2]}</h4>
										<p>{pet[3]}</p>
										<div className='progressBarWrapper'>
											{progressValue[index].map(
												(value, index) => {
													return (
														<BarWrapper
															label={
																progressLabel[
																	index
																]
															}
															key={index}
														>
															<CircularProgressbar
																value={value}
																text={`${value}%`}
															/>
														</BarWrapper>
													);
												}
											)}
										</div>
									</div>
								</div>
							);
						})}
					</Slider>
					<div className='hiddenPics'>
						<PhotoGallery />
					</div>
					<div
						className='petPicArrow'
						onClick={() => this.revealPicsHandler()}
					>
						<i className='fas fa-chevron-down fa-3x petPicIcon'></i>
					</div>
					<CurlySVG visible={visible} />
				</div>
			</DownDisappear>
		);
	}
}

const DownDisappear = styled.div`
	.slick-slider {
		transition: all 0.5s;
		transform: translateY(
			${(props) => (props.isRevealPics ? '0' : '10vh')}
		);
		opacity: ${(props) => (props.isRevealPics ? '1' : '0')};
		visibility: ${(props) => (props.isRevealPics ? 'visible' : 'hidden')};
	}
	.petPicArrow {
		transition: all 0.5s;
		transform: rotate(${(props) => (props.isRevealPics ? '0' : '540deg')});
	}
	.hiddenPics {
		transition: all 0.5s;
		visibility: ${(props) => (props.isRevealPics ? 'hidden' : 'visible')};
	}
`;
