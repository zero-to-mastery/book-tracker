import React from 'react';
import './TopNavbar.css';
import {Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        } from 'reactstrap';

export default class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Book Tracker</NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                            <p onClick={() => this.props.onRouteChange('WishList')} className="nav-link white underline pa3 pointer">Books WishList</p>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/currentlist">Reading List</NavLink>
                            </NavItem>
                            <NavItem>
                                <p onClick={() => this.props.onRouteChange('AddPage')} className="nav-link white underline pa3 pointer" value="Add Book">Add Book</p>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signup">Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>  
        );
    };
}