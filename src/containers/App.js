import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import auth from "../services/auth.service";
import "./App.css";

import TopNavbar from "../components/TopNavbar/TopNavbar";
import AddPage from "../components/AddPage/AddPage";
import LoginPage from "../components/LoginPage/LoginPage";
import SignUpPage from "../components/SignUpPage/SignUpPage";
import HomePage from "./HomePage";
import WishListPage from "./WishListPage";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setCurrentUser(currentUser);
  }, []);

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

export default withRouter(App);
