import React, { Component } from 'react';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      isFailed: false,
    };
  }

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitSignUp = () => {};

  render() {
    return (
      <div>
        <form className='form-container'>
          <h2>Sign Up</h2>
          <input
            onChange={this.onNameChange}
            className=''
            type='name'
            name='name'
            id='name'
            placeholder='Name'
          />
          <input
            onChange={this.onEmailChange}
            className=''
            type='email'
            name='email-address'
            id='email-address'
            placeholder='Email'
          />
          <input
            onChange={this.onPasswordChange}
            className=''
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          {this.state.isFailed ? (
            <pre className='alert alert-danger'>Failed Registering Account</pre>
          ) : (
            <pre></pre>
          )}
          <button className='grow' onClick={this.onSubmitSignUp}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
