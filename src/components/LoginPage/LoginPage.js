import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
    	loginEmail: '',
    	loginPassword: '',
    	isFailed: false
    }
	}

	onEmailChange = (event) => {
  	this.setState({ loginEmail: event.target.value });
  }

  onPasswordChange = (event) => {
  	this.setState({ loginPassword: event.target.value });
  }

  onSubmitLogin = () => {
  	
  }

  render() {
  	return (
  		<form className="form-container">
			     <h2>Login</h2>
			        <input
			        	onChange={this.onEmailChange}
			        	className=""
								type="email" 
								name="email-address" 
								id="email-address"
								placeholder="Email"
			        />
			          <input
									onChange={this.onPasswordChange}
									className=""
									type="password" 
									name="password" 
									id="password"
									placeholder="Password"
								/>
			      {
			      	this.state.isFailed ?
				      	<pre className="alert alert-danger">
						    	Wrong Email/Password
						    </pre>
							:
								<pre></pre>
			      }
						<button 
							className="grow" 
							onClick={this.onSubmitLogin}>Sign In
						</button>
			</form>
  	);
  }
}

export default LoginPage;