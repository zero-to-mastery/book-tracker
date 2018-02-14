import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>                    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="">Book Tracker</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Books Wishlist</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Reading List</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;