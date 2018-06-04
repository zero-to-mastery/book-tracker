import React, { Component } from 'react';
import './App.css';

import TopNavbar from '../components/TopNavbar/TopNavbar';
import SidebarTotals from '../components/SidebarTotals/SidebarTotals';
import ReadingList from '../components/ReadingList/ReadingList';
import GridLayout from '../components/GridLayout/GridLayout';
import WishList from '../components/WishList/WishList';
import AddPage from '../components/AddPage/AddPage'

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			currentBooks: [
				{id: 1, title: 'Name of the Wind', author: 'Patrick Rothfuss', page: 'p177'},
				{id: 2, title: 'The Hunt for Red October', author: 'Tom Clancy', page: 'p211'},
				{id: 3, title: 'A Game of Thrones', author: 'George R.R. Martin', page: 'p350'}
			],
			bookWishList:  [
                {id: 1, title: 'Origin', author: 'Dan Brown'},
                {id: 2, title: 'The Rooster Bar', author: 'John Grisham'}
                
            ],
			route: 'home'			
		};		
	}

	onRouteChange = (newRoute) => {
		console.log(newRoute)
		this.setState({
			route: newRoute					
		});
	}

  render() {
		const {currentBooks, bookWishList, route } = this.state;

    return (
     <div>
		<TopNavbar onRouteChange={this.onRouteChange}/>
		{ route === 'home' ?
			<GridLayout onRouteChange={this.onRoutechange}>
				<SidebarTotals  cbData={currentBooks} wlData={bookWishList} onRouteChange={this.onRoutechange} />
				<ReadingList  data={currentBooks}/>						
			</GridLayout>	
			: route ==='WishList' ?
			<GridLayout>
				<SidebarTotals cbData={currentBooks} wlData={bookWishList} onRouteChange={this.onRoutechange} />
				<WishList data={bookWishList} />
			</GridLayout>
			:<AddPage></AddPage>		
		}	
	</div>
    );
  }
}

export default App;
