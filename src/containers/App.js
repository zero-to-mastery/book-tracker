import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/wish-list" element={<WishListPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
