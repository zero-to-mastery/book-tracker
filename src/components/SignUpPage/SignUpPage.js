import React, { Component } from "react";
import SignUpService from "../../services/signUp.service";
import { AlteredTextField } from "./AlteredTextField/AlteredTextField";
import { formFields } from "./SignUpFormFields";

class SignUpPage extends Component {
  state = {
    data: { name: "", email: "", password: "", confirmPassword: "" },
    errors: {},
  };

  handleChange = (e) => {
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

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = this.state.data;

    if (password !== confirmPassword) {
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
  };

  showPassword = () => {
    document.getElementById("password").type = document.getElementById("password").type == "text" ? "password" : "text";
    document.getElementById("confirmPassword").type = "text" ? "password" : "text";
  };

  render() {
    return (
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
    );
  }
}

export default SignUpPage;
