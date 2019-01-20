import React from 'react';
import './TopNavbar.css';
import { Link } from 'react-router-dom';
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
                    <Link to="/">
                        <NavbarBrand href="/">
                            Book Tracker
                        </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/">
                                    <NavLink className='nav-active-style' href="/"> Home</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/wish-list">
                                    <NavLink className="nav-link white underline pa3 pointer">Books WishList</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/currentlist">
                                    <NavLink className='nav-active-style'>Reading List</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/add">
                                    <NavLink className="nav-link white underline pa3 pointer" value="Add Book">Add Book</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/login">
                                 <NavLink className='nav-active-style'>Login</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/signup">
                                    <NavLink className='nav-active-style'>Sign Up</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    };
}