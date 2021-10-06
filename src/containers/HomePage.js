import React from "react";
import { connect } from "react-redux";

import GridLayout from "../components/GridLayout/GridLayout";
import SidebarTotals from "../components/SidebarTotals/SidebarTotals";
import ReadingList from "../components/ReadingList/ReadingList";

const HomePage = ({ currentBooks, bookWishList }) => {
  return (
    <GridLayout>
      <SidebarTotals cbData={currentBooks} wlData={bookWishList} />
      <ReadingList data={currentBooks} />
    </GridLayout>
  );
};

const mapPropsToState = (state) => ({
  currentBooks: state.books.books,
  bookWishList: state.wishList.wishList,
});

export default connect(mapPropsToState, null)(HomePage);
