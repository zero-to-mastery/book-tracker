import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import TopNavbar from '../components/TopNavbar/TopNavbar';
import AddPage from '../components/AddPage/AddPage';
import HomePage from './HomePage';
import WishListPage from './WishListPage';

class App extends Component {

    render() {
        return (
            <div>
                <TopNavbar/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/wish-list" exact component={WishListPage} />
                    <Route path="/add" exact component={AddPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
