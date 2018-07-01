import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridLayout from '../components/GridLayout/GridLayout';
import SidebarTotals from '../components/SidebarTotals/SidebarTotals';
import WishList from '../components/WishList/WishList';

class WishListPage extends Component {
    render() {
        return (
            <GridLayout>
                <SidebarTotals cbData={this.props.currentBooks} wlData={this.props.bookWishList}/>
                <WishList data={this.props.bookWishList}/>
            </GridLayout>
        );
    }
}

const mapPropsToState = state => ({
    currentBooks: state.books.books,
    bookWishList: state.wishList.wishList
});

export default connect(mapPropsToState, null)(WishListPage);