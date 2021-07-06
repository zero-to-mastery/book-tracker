import React, { useState } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// import HomeIcon from '@material-ui/icons/Home';

const TopNavbar = ({ user }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="navigation">
      <Navbar className="navbar navbar-dark ma" expand="md">
        <NavbarBrand tag={Link} to="/">
          Book Tracker
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/wish-list" className="nav-link white underline pa4 pointer">
                Books Wish-List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/currentlist" className="nav-active-style pa4">
                Reading List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/add" className="nav-link white underline pa4" value="Add Book">
                Add Book
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {user ? (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/logout" className="nav-active-style">
                    Logout
                  </NavLink>{" "}
                </NavItem>
              </>
            ) : (
              <>
                {" "}
                <NavItem>
                  {" "}
                  <NavLink tag={Link} to="/login" className="nav-active-style">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup" className="nav-active-style">
                    Sign Up
                  </NavLink>{" "}
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
