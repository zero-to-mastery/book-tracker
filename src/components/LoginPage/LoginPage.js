import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				email: '',
				password: '',
			},
			error: {},
		};
	}

	handleChange = event => {
		const { value, name } = event.target;
		const data = { ...this.state.data, [name]: value };

		this.setState({ data });
	};

	handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = this.state.data;

		async function login(email, password) {
			await fetch('http://localhost:5000/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})
				.then(res => res.json())
				.then(data => localStorage.setItem('token', data.token))
				.catch(error => console.error(error));
		}

		await login(email, password);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='form-container'>
				<h2>Login</h2>
				<input
					onChange={this.handleChange}
					className=''
					type='email'
					name='email'
					id='email-address'
					placeholder='Email'
				/>
				<input
					onChange={this.handleChange}
					className=''
					type='password'
					name='password'
					id='password'
					placeholder='Password'
				/>
				{this.state.isFailed ? (
					<pre className='alert alert-danger'>Wrong Email/Password</pre>
				) : (
					<pre></pre>
				)}
				<button>Sign In</button>
			</form>
		);
	}
}

export default LoginPage;
