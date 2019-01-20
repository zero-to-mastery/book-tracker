import React from "react";
import "./WishList.css";

const WishList = ({ data, props }) => {
  return (
    <div>
      <div className="mainContent">
        <h1>Books on My Wish List</h1>
        <div>
          <table className="table" data={data}>
            <thead>
              <tr>
                <td>Title</td>
                <td>Author</td>
                <td>Progress</td>
                <td />
                <td />
              </tr>
            </thead>
            <tbody>
              {data.map((book, index) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.page}</td>
                  <td>
                    <button className="btn btn-basic btn-sm" href="">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-basic btn-sm" href="">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishList;
