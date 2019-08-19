import React, { Component } from 'react';
import './AddPage.css';

class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toreadInit: ['Game of Thrones', 'Harry Potter', 'Lord of the Rings'],
            toreads: [],
            toreadText: '',
            inputLength: 0,
            message: false
        };
        this.updateToreadText = this.updateToreadText.bind(this);
        this.createToread = this.createToread.bind(this);
    }

    componentDidMount() {
        this.setState({
            toreads: this.state.toreadInit,
        });
    }

    updateToreadText(e) {
        if(e.target.value.length>0) this.setState({
            toreadText: e.target.value,
            inputLength: e.target.value.length,
        });
    }

    createToread(e) {
        e.preventDefault();
        // console.log(e);
        if (this.state.inputLength>0) this.setState({
            toreads: [...this.state.toreads, this.state.toreadText],
            toreadText: '',
        });
    }

//     filterToread(e) { 
//         var updatedList = this.state.toreadInit;
//         updatedList = updatedList.filter((item => {
//             return item.toLowerCase().search(
//                 e.target.value.toLowerCase()) !== -1;
//             }) 
//         );
//         this.setState({ 
//             toreads: updatedList,
//         });
//         if (updatedList == 0 ) {
//             this.setState({ 
//             message: true,
//     });
//         } else {
//             this.setState({ 
//             message: false,
//         });
//     }
// }

    render() {

        const { toreadText, toreads, message } = this.state

        return (
            <div>
                <div className="container top">
                    <div className="row">
                        <div className="col-lg-12 mt-3">
                            <h2 className="tc">Add a Book</h2>
                        </div>
                    </div>
                </div>
                <div className="container wb">
                    <div className="row">
                        <div className="booklist">
                            <h2 className="tc">Book List</h2>
                            <ul>{toreads.map((toread) => {
                                const link = `http://www.google.com/search?q=${toread}%20book`;
                                return(
                                    <li key={Math.floor(Math.random() * 10000) + 1}><a href={link} target="_blank" rel="noopener noreferrer">{toread}</a></li>
                                )
                            })}
                                {message ? <li>No search results.</li> : ''}
                            </ul>
                        </div>
                        <div className="bookadd">
                            <form onSubmit={this.createToread}>
                                <div className='row input-group'>
                                    <input type="text" className="center-block"
                                           placeholder="Book Name"
                                           value={toreadText}
                                           onChange={this.updateToreadText} />
                                    <button className="btn btn-success center-block">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default AddPage;

// <input type="text" className="center-block" placeholder="Filter here..." onChange={this.filterToread}/>
