import React, { Component } from 'react';
const ShopContext = React.createContext();

class ShopProvider extends Component {
	state = {
		navOpen: false
	};

	NavOpenHandler = () => {
		this.setState({ navOpen: !this.state.navOpen });
	};

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	closeNavModal = () => {
		this.setState({ navOpen: false });
	};

	render() {
		return (
			<ShopContext.Provider
				value={{
					...this.state,
					NavOpenHandler: this.NavOpenHandler,
					closeNavModal: this.closeNavModal
				}}
			>
				{this.props.children}
			</ShopContext.Provider>
		);
	}
}

const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer, ShopContext };
