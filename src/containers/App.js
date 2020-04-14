import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import TopNavbar from '../components/TopNavbar/TopNavbar';
import AddPage from '../components/AddPage/AddPage';
import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/SignUpPage/SignUpPage';
import HomePage from './HomePage';
import WishListPage from './WishListPage';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <main className='container'>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/wish-list' exact component={WishListPage} />
            <Route path='/add' exact component={AddPage} />
            <Route path='/login' exact component={LoginPage} />
            <Route path='/signup' exact component={SignUpPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
