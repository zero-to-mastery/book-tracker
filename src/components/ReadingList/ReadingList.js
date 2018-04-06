import React from 'react';
import './ReadingList.css';

const ReadingList = ({data}) => {
    return (
        <div>     
        <div className="mainContent">
            <h1>Progress on current books</h1>
            <div>
                {data.map((book,index) => (
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
                    <tr >
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.page}</td>
                        <td><a key={index} className="btn btn-basic btn-sm" href="">Edit</a></td>
                        <td><a  key={index} className="btn btn-basic btn-sm" href="">Delete</a></td>
                    </tr>
                </tbody>
            </table>
            ))}
            </div>
        </div>
        </div>                       
    );
};

export default ReadingList;