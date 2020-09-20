import React, { Component } from "react";
import SignUpService from "../../services/signUp.service";
import { AlteredTextField } from "./AlteredTextField/AlteredTextField";

class SignUpPage extends Component {
  state = {
    data: { name: "", email: "", password: "", confirmPassword: "" },
    errors: {},
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          [name]: value
        }
      }
    })
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state.data;

    if (password !== confirmPassword) {/* alert("Password doesn't match")*/
      this.setState({
        errors: {
          confirmPassword: "Password doesn't match"
        }
      })
    } else {
      const response = await SignUpService.request(JSON.stringify({ name, email, password }))
      if (response.error) {
        this.setState((prevState) => ({
          errors: { ...response.body.details }
        }));
      }
    }
  };

  render() {
    return (
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
        <button>Register</button>
      </form>
    );
  }
}

export default SignUpPage;
