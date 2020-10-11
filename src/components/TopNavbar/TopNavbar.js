import React, { Component } from 'react';
import './TopNavbar.css';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
// import HomeIcon from '@material-ui/icons/Home';

class TopNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		const { user } = this.props;
		return (
			<div className='navigation'>
				<Navbar className='navbar navbar-dark ma' expand='md'>
					<NavbarBrand tag={Link} to='/'>
						<h4>Book Tracker</h4>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className='mr-auto' navbar>
							<NavItem>
								<NavLink
									tag={Link}
									to='/wish-list'
									className='nav-link white underline pa4 pointer'
								>
									<h6>Books Wish-List</h6>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									tag={Link}
									to='/currentlist'
									className='nav-active-style pa4'
								>
									<h6>Reading List</h6>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									tag={Link}
									to='/add'
									className='nav-link white underline pa4'
									value='Add Book'
								>
									<h6>Add Book</h6>
								</NavLink>
							</NavItem>
						</Nav>
						<Nav className='ml-auto' navbar>
							{user ? (
								<React.Fragment>
									<NavItem>
										<NavLink
											tag={Link}
											to='/logout'
											className='nav-active-style'
										>
											<h6>Logout</h6>
										</NavLink>{' '}
									</NavItem>
								</React.Fragment>
							) : (
								<React.Fragment>
									{' '}
									<NavItem>
										{' '}
										<NavLink
											tag={Link}
											to='/login'
											className='nav-active-style'
										>
											<h6>Login</h6>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											tag={Link}
											to='/signup'
											className='nav-active-style'
										>
											<h6>Sign Up</h6>
										</NavLink>{' '}
									</NavItem>
								</React.Fragment>
							)}
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default TopNavbar;
