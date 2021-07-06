import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ history }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    const formData = { ...data, [name]: value };
    setData(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    async function login(email, password) {
      await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          history.push("/");
        })
        .catch((error) => {
          console.error(error);
          setError({ isFailed: true, message: error.message });
        });
    }

    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login</h2>
      <input onChange={handleChange} className="" type="email" name="email" id="email-address" placeholder="Email" />
      <input
        onChange={handleChange}
        className=""
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      {error.isFailed ? <pre className="alert alert-danger">Wrong Email/Password</pre> : <pre></pre>}
      <button>Sign In</button>
    </form>
  );
};

export default LoginPage;
