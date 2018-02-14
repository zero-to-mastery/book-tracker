import React from 'react';
import './ReadingList.css';

const ReadingList = () => {
    return (
        <div>     
        <div className="mainContent">
            <h1>Progress on current books</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Progress</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name of the wind</td>
                        <td>Patrick Rothfuss</td>
                        <td>p177</td>
                        <td><a className="btn btn-basic btn-sm" href="">Edit</a></td>
                        <td><a className="btn btn-basic btn-sm" href="">Delete</a></td>
                    </tr>
                    <tr>
                        <td>The Hunt for Red October</td>
                        <td>Tom Clancy</td>
                        <td>p211</td>
                        <td><a className="btn btn-basic btn-sm" href="">Edit</a></td>
                        <td><a className="btn btn-basic btn-sm" href="">Delete</a></td>
                    </tr>
                    <tr>
                        <td>A Game of Thrones</td>
                        <td>George R.R. Martin</td>
                        <td>p350</td>
                        <td><a className="btn btn-basic btn-sm" href="">Edit</a></td>
                        <td><a className="btn btn-basic btn-sm" href="">Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>                       
    );
};

export default ReadingList;