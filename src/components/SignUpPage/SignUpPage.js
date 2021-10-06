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
      this.setState({
        errors: {
          confirmPassword: "Password doesn't match",
        },
      });
      return;
    }

    // Since we're using async/await,
    // we wrap them call in a try/catch block
    try {
      const response = await SignUpService.request(JSON.stringify({ name, email, password }));
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      this.setState((prevState) => ({
        ...prevState,
        errors: { error },
      }));
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <h2>Sign Up</h2>
        {/* Render form fields */}
        {formFields.map((field, index) => (
          <AlteredTextField
            key={index}
            required={field.isRequired}
            id={field.id}
            name={field.name}
            type={field.type}
            label={field.label}
            onChange={this.handleChange}
            error={this.state.errors[field.name]}
          />
        ))}

        {/* <AlteredTextField
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
        /> */}
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default SignUpPage;
