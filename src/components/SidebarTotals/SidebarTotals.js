import React from 'react';
import './SidebarTotals.css';

const SidebarTotals = () => {
    return (
        <div>    
        <div className="container">
        <div className="row">
                <div className="col-3">
                        <div className="sideBar">
                                <table>
                                <thead>
                                        <tr>
                                                <th>Description</th>
                                                <th>Total</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                                <td>Read</td>
                                                <td>5</td>
                                        </tr>
                                        <tr>
                                                <td>Wishlist</td>
                                                <td>2</td>
                                        </tr>
                                        <tr>
                                                <td>Current</td>
                                                <td>3</td>
                                        </tr>
                                </tbody>
                        </table>
                        </div>
                </div>                       
        </div>
        </div>
        </div>
    );
};

export default SidebarTotals;