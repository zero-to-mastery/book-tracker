import React, { Component } from 'react';
import './AddPage.css';
import '../GridLayout/GridLayout';

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
        if (e.target.value.length > 0) this.setState({
            toreadText: e.target.value,
            inputLength: e.target.value.length,
        });
    }

    createToread(e) {
        e.preventDefault();
        // console.log(e);
        if (this.state.inputLength > 0) this.setState({
            toreads: [...this.state.toreads, this.state.toreadText],
            toreadText: '',
        });
    }

    render() {
        const { toreadText, toreads, message } = this.state;

        return(
            <div>
                <div className="container top">
                    <div className="row">
                        <div className="col-lg-12 mt-3">
                            <h2 className="tc">Add a Book</h2>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ph3-ns">
                    <div className="cf ph2-ns">
                        <div className="fl w-50 w-50-ns pa2">
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
                        </div>
                        <div className="fl w-50 w-50-ns pa2 bookadd mt-log-5">
                            <form onSubmit={this.createToread}>
                                <div className='row input-group'>
                                    <input type="text" className="center-block"
                                           placeholder="Book Name"
                                           value={toreadText}
                                           onChange={this.updateToreadText} />
                                    <button className="btn btn-success center-block mr-auto ml-auto">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddPage;