import React from "react";
import { connect } from "react-redux";

import GridLayout from "../components/GridLayout/GridLayout";
import SidebarTotals from "../components/SidebarTotals/SidebarTotals";
import WishList from "../components/WishList/WishList";

const WishListPage = ({ currentBooks, bookWishList }) => {
  return (
    <GridLayout>
      <SidebarTotals cbData={currentBooks} wlData={bookWishList} />
      <WishList data={bookWishList} />
    </GridLayout>
  );
};

const mapPropsToState = (state) => ({
  currentBooks: state.books.books,
  bookWishList: state.wishList.wishList,
});

export default connect(mapPropsToState, null)(WishListPage);
