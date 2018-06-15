import React, { Component } from 'react';
import './AddPage.css';

class AddPage extends Component {    
    render() {
    return (
        <div>                                        
            <div className="mainContent">
                <h1>Add book</h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Author</td>
                                <td>Progress</td>
                            </tr>
                        </thead>    
                        <tbody>
                            <tr >
                                <td><input onChange={event => console.log(event.target.value)} type="text" name="title" /></td>
                                <td><input onChange={event => console.log(event.target.value)} type="text" name="author" /></td>
                                <td><input onChange={event => console.log(event.target.value)} type="text" name="progress" /></td>
                            </tr>
                        </tbody>                
                    </table>
                    <input type="radio" name="list" value="wish" checked/>Wish List<br />
                    <input type="radio" name="list" value="reading" />Reading List<br />
                    <a className="btn btn-basic btn-sm" href="">Add</a>
                </div>
            </div>
    </div>
    );
    }
};

export default AddPage;