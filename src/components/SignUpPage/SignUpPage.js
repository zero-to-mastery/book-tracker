import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignUpPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
    	registerName: '',
    	registerEmail: '',
    	registerPassword: '',
    	isFailed: false
    }
	}

	onNameChange = (event) => {
  	this.setState({ registerName: event.target.value });
  }

  onEmailChange = (event) => {
  	this.setState({ registerEmail: event.target.value });
  }

  onPasswordChange = (event) => {
  	this.setState({ registerPassword: event.target.value });
  }

  onSubmitSignUp = () => {
  	
  }
  render() {
  	return (
  		<article className="mw6 mt4 center shadow-5 p-5 backart">
	  		<div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
			        <input
			        	onChange={this.onNameChange}
			        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 inputTy"
			        	type="text" name="name" id="name"
			        />
			      </div>
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
						    	Failed Registerring Account
						    </pre>
							:
								<pre></pre>
			      }
			    </fieldset>
			    <div className="">
			      <input
			      	onClick={this.onSubmitSignUp}
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib buttonSub"
			      	type="submit"
			      	value="Sign up"
			      />
			    </div>
			  </div>
			</article>
  	);
  }
}

export default SignUpPage;