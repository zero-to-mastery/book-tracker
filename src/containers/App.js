import React, { Component } from 'react';
import './App.css';

import Navbar from '../components/Navbar/Navbar';
import SidebarTotals from '../components/SidebarTotals/SidebarTotals';
import ReadingList from '../components/ReadingList/ReadingList';
import GridLayout from '../components/GridLayout/GridLayout';

class App extends Component {
  render() {
    return (
     <div>
				<Navbar/>
				<GridLayout>
					<SidebarTotals/>
					<ReadingList/>						
				</GridLayout>				
			</div>
    );
  }
}

export default App;
