import React, { useState } from "react";
import SignUpService from "../../services/signUp.service";
import { AlteredTextField } from "./AlteredTextField/AlteredTextField";

const SignUpPage = ({ history }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      /* alert("Password doesn't match")*/
      setError({
        errors: {
          confirmPassword: "Password doesn't match",
        },
      });
    } else {
      const response = await SignUpService.request(JSON.stringify({ name, email, password }));
      if (response.error) {
        setError({
          ...response.body.details,
        });
      }
      history.push("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Sign Up</h2>
      <AlteredTextField
        id="name"
        type="text"
        label="Name"
        onChange={handleChange}
        value={data.name}
        error={error.name}
      />
      <AlteredTextField
        id="email"
        type="email"
        label="E-mail"
        onChange={handleChange}
        value={data.email}
        error={error.email}
      />
      <AlteredTextField
        id="password"
        type="password"
        label="Password"
        onChange={handleChange}
        value={data.password}
        error={error.password}
      />
      <AlteredTextField
        id="confirmPassword"
        type="password"
        label="Confirm password"
        onChange={handleChange}
        value={data.confirmPassword}
        error={error.confirmPassword}
      />
      <button>Register</button>
    </form>
  );
};

export default SignUpPage;
