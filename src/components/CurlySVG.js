import React, { Component } from 'react';
import Anime from 'react-anime';
import uuid from 'uuid';

export class CurlySVG extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return (
			<>
				<svg
					key={uuid.v4()}
					width='100%'
					height='100%'
					preserveAspectRatio='none'
					viewBox='0 0 2089 1269'
				>
					<Anime
						easing='easeInSine'
						loop={false}
						autoplay={
							this.props.visible === undefined ||
							(this.props.visible !== undefined &&
								!this.props.visible)
								? true
								: false
						}
						duration={this.props.duration}
						d={[this.props.high, this.props.low]}
					>
						<path fill='#fff' d={this.props.low}></path>
					</Anime>
				</svg>
			</>
		);
	}
}

export default CurlySVG;
