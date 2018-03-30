import React, { Component } from 'react';
import './App.css';

import TopNavbar from '../components/TopNavbar/TopNavbar';
import SidebarTotals from '../components/SidebarTotals/SidebarTotals';
import ReadingList from '../components/ReadingList/ReadingList';
import GridLayout from '../components/GridLayout/GridLayout';

class App extends Component {
  render() {
    return (
     <div>
		<TopNavbar/>
		<GridLayout>
			<SidebarTotals/>
			<ReadingList/>						
		</GridLayout>				
	</div>
    );
  }
}

export default App;
