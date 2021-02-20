import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import auth from '../services/auth.service';
import './App.css';

import TopNavbar from '../components/TopNavbar/TopNavbar';
import AddPage from '../components/AddPage/AddPage';
import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/SignUpPage/SignUpPage';
import HomePage from './HomePage';
import WishListPage from './WishListPage';
import Logout from '../components/Logout';

class App extends Component {
	state = {
		currentUser: null,
	};

	componentDidMount() {
		const currentUser = auth.getCurrentUser();

		this.setState({ currentUser });
	}
	render() {
		return (
			<div>
				<TopNavbar user={this.state.currentUser} />
				<main className='container'>
					<Switch>
						<Route path='/' exact component={HomePage} />
						<Route path='/wish-list' exact component={WishListPage} />
						<Route path='/add' exact component={AddPage} />
						<Route path='/signup' exact component={SignUpPage} />
						<Route path='/login' exact component={LoginPage} />
						<Route path='logout' component={Logout} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
