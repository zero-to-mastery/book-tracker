import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridLayout from '../components/GridLayout/GridLayout';
import SidebarTotals from '../components/SidebarTotals/SidebarTotals';
import ReadingList from '../components/ReadingList/ReadingList';

class HomePage extends Component {
    render() {
        return (
            <GridLayout>
                <SidebarTotals cbData={this.props.currentBooks} wlData={this.props.bookWishList}/>
                <ReadingList data={this.props.currentBooks}/>
            </GridLayout>
        );
    }
}

const mapPropsToState = state => ({
    currentBooks: state.books.books,
    bookWishList: state.wishList.wishList
});

export default connect(mapPropsToState, null)(HomePage);