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
  		<article className="mw6 mt4 center shadow-5 p-5 backart">
	  		<div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Login</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input
			        	onChange={this.onEmailChange}
			        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 inputTy"
			        	type="email" name="email-address" id="email-address"
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input
			        	onChange={this.onPasswordChange}
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 inputTy"
				        type="password" name="password" id="password"
			        />
			      </div>
			      {
			      	this.state.isFailed ?
				      	<pre className="alert alert-danger">
						    	Wrong Email/Password
						    </pre>
							:
								<pre></pre>
			      }
			    </fieldset>
			    <div className="">
			      <input
			      	onClick={this.onSubmitLogin}
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib buttonSub"
			      	type="submit"
			      	value="Login"
			      />
			    </div>
			  </div>
			</article>
  	);
  }
}

export default LoginPage;