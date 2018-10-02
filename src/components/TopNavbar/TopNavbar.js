import React from 'react';
import './TopNavbar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
// import HomeIcon from '@material-ui/icons/Home';

export default class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Book Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink activeClassName='nav-active-style' href="/"> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/wish-list" className="nav-link white underline pa3 pointer">Books WishList</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName='nav-active-style' href="/currentlist">Reading List</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName='nav-active-style' href="/add" className="nav-link white underline pa3 pointer" value="Add Book">Add
                                    Book</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink activeClassName='nav-active-style' href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName='nav-active-style' href="/signup">Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    };
}