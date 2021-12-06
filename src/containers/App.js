import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import auth from "../services/auth.service";
import "./App.css";

<<<<<<< HEAD
import TopNavbar from '../components/TopNavbar/TopNavbar';
import AddPage from '../components/AddPage/AddPage';
import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/SignUpPage/SignUpPage';
import HomePage from './HomePage';
import WishListPage from './WishListPage';
import Logout from '../components/Logout';
=======
import TopNavbar from "../components/TopNavbar/TopNavbar";
import AddPage from "../components/AddPage/AddPage";
import LoginPage from "../components/LoginPage/LoginPage";
import SignUpPage from "../components/SignUpPage/SignUpPage";
import HomePage from "./HomePage";
import WishListPage from "./WishListPage";
>>>>>>> 20d4ce90cce26bc5a7f5eae0f65a93b45b7c9c79

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setCurrentUser(currentUser);
  }, []);

<<<<<<< HEAD
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
=======
  return (
    <div>
      <TopNavbar user={currentUser} />
      <main className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/wish-list" exact component={WishListPage} />
          <Route path="/add" exact component={AddPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
        </Switch>
      </main>
    </div>
  );
};
>>>>>>> 20d4ce90cce26bc5a7f5eae0f65a93b45b7c9c79

export default withRouter(App);
