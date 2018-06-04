import React from 'react';
import './AddPage.css';


const AddPage = () => {    

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
                                    <td><input type="text" name="title" /></td>
                                    <td><input tyoe="text" name="author" /></td>
                                    <td><input type="text" name="progress" /></td>
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
};

export default AddPage;