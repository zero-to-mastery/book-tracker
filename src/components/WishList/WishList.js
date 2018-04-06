import React from 'react';
import './WishList.css';


const WishList = ({data, props}) => {    

    return (
        <div>										
				
                <div className="mainContent">
                    <h1>Books on My Wish List</h1>
                    <div>
                        {data.map((book, index) => (
                        <table className="table" data={this.data}>
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
                                <tr >
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.page}</td>
                                    <td><a className="btn btn-basic btn-sm" href="">Edit</a></td>
                                    <td><a className="btn btn-basic btn-sm" href="">Delete</a></td>
                                </tr>
                            </tbody>                
                        </table>
                        ))}
                    </div>
                
                </div>
           
    </div>
    );
};

export default WishList;