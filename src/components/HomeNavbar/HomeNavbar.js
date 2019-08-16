// import React from 'react';
//
// import { Link } from 'react-router-dom';
//
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink
// } from 'reactstrap';
//
// export default class TopNavbar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false
//         };
//     }
//
//     toggle = () => {
//         this.setState({ isOpen: !this.state.isOpen });
//     };
//
//     render() {
//         return (
//             <div className="navigation">
//                 <Navbar className="navbar navbar-inverse bg-inverse ma pa4" expand="md">
//                     <NavbarBrand tag={Link} to="/">Book Tracker</NavbarBrand>
//                     <NavbarToggler onClick={this.toggle}/>
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink tag={Link} to="/login" className='nav-active-style'>Login</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink tag={Link} to="/signup" className='nav-active-style'>Sign Up</NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//             </div>
//         );
//     };
// }