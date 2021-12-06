import React, { Component } from "react";
import SignUpService from "../../services/signUp.service";
import { AlteredTextField } from "./AlteredTextField/AlteredTextField";
import { formFields } from "./SignUpFormFields";

class SignUpPage extends Component {
  state = {
    data: { name: "", email: "", password: "", confirmPassword: "" },
    errors: {},
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        data: {
          ...prevState.data,
          [name]: value,
        },
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = this.state.data;

    if (password !== confirmPassword) {
<<<<<<< HEAD
      /* alert("Password doesn't match")*/
=======
>>>>>>> 20d4ce90cce26bc5a7f5eae0f65a93b45b7c9c79
      this.setState({
        errors: {
          confirmPassword: "Password doesn't match",
        },
      });
    } else {
      const response = await SignUpService.request(JSON.stringify({ name, email, password }));
      if (response.error) {
        this.setState((prevState) => ({
          errors: { ...response.body.details },
        }));
      }
    }

    if (password !== confirmPassword) return alert("Password dont' match");

    try {
      await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      window.location = "/";
    } catch (error) {
      console.error(error);
      if (error && error.respose.status === 400) {
        const errors = { ...this.state.errors };
        errors.name = error.response.data;
        this.setState({ errors });
      }
    }
  };

  showPassword = () => {
    document.getElementById("password").type = document.getElementById("password").type == "text" ? "password" : "text";
    document.getElementById("confirmPassword").type =
      document.getElementById("confirmPassword").type == "text" ? "password" : "text";
  };

  render() {
    return (
<<<<<<< HEAD
      <form onSubmit={this.handleSubmit} className="form-container">
        <h2>Sign Up</h2>
        <input onChange={this.handleChange} type="text" name="name" id="name" placeholder="Name" />
        <input onChange={this.handleChange} type="email" name="email" id="email" placeholder="Email" />
        <input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Password" />
        <input
          onChange={this.handleChange}
          type="password"
          name="confirmPassword"
          id="password"
          placeholder="Password"
        />
        <button>Register</button>
      </form>
=======
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="form-container">
          <h2>Sign Up</h2>
          <AlteredTextField
            id="name"
            type="text"
            label="Name"
            onChange={this.handleChange}
            value={this.state.data.name}
            error={this.state.errors.name}
          />
          <AlteredTextField
            id="email"
            type="email"
            label="E-mail"
            onChange={this.handleChange}
            value={this.state.data.email}
            error={this.state.errors.email}
          />
          <AlteredTextField
            id="password"
            type="password"
            label="Password"
            onChange={this.handleChange}
            value={this.state.data.password}
            error={this.state.errors.password}
          />
          <AlteredTextField
            id="confirmPassword"
            type="password"
            label="Confirm password"
            onChange={this.handleChange}
            value={this.state.data.confirmPassword}
            error={this.state.errors.confirmPassword}
          />
        </form>
        <div style={{ position: "relative", left: "29%", width: "100%" }}>
          <input type="checkbox" onClick={this.showPassword} style={{ width: "2%" }} />
          <span style={{ color: "white", fontSize: "0.8rem" }}>Show password</span>
        </div>
        <button style={{ position: "relative", left: "43%" }}>Register</button>
      </React.Fragment>
>>>>>>> 20d4ce90cce26bc5a7f5eae0f65a93b45b7c9c79
    );
  }
}

export default SignUpPage;
