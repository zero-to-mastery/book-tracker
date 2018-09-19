import React, { Component } from 'react'
import './AddPage.css'

class AddPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toreadInit: [
                'Game of Thrones',
                'Harry Potter',
                'Lord of the Rings',
            ],
            toreads: [],
            toreadText: '',
            message: false,
        }
        this.updateToreadText = this.updateToreadText.bind(this)
        this.createToread = this.createToread.bind(this)
    }

    componentDidMount() {
        this.setState({
            toreads: this.state.toreadInit,
        })
    }

    updateToreadText(e) {
        this.setState({
            toreadText: e.target.value,
        })
    }

    createToread(e) {
        e.preventDefault()
        this.setState({
            toreads: [...this.state.toreads, this.state.toreadText],
            toreadText: '',
        })
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
        return (
            <div>
                <div className="containter top">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="tc">Add a Book</h2>
                        </div>
                    </div>
                </div>
                <div className="container wb">
                    <div className="row">
                        <form onSubmit={this.createToread}>
                            <div className="col-lg-12 input-group">
                                <input
                                    type="text"
                                    className="center-block"
                                    placeholder="what's your book?"
                                    value={this.state.toreadText}
                                    onChange={this.updateToreadText}
                                />
                                <button className="btn btn-success center-block">
                                    Add Book
                                </button>
                            </div>
                        </form>
                        <ul>
                            {this.state.toreads.map(toreads => {
                                return (
                                    <li
                                        key={
                                            Math.floor(Math.random() * 10000) +
                                            1
                                        }
                                    >
                                        {toreads}
                                    </li>
                                )
                            })}
                            {this.state.message ? (
                                <li>No search results.</li>
                            ) : (
                                ''
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPage

// <input type="text" className="center-block" placeholder="Filter here..." onChange={this.filterToread}/>
