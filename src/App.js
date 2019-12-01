import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import NavModal from './components/Navbar/NavModal';
import { ShopProvider } from './context';

function App() {
	return (
		<ShopProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/products' exact component={Products} />
					<Route
						path='/products/:id'
						exact
						component={SingleProduct}
					/>
					<Route component={Error} />
				</Switch>
				<NavModal />
			</Router>
		</ShopProvider>
	);
}

export default App;
