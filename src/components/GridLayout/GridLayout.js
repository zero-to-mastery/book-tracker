import React from 'react';
import './GridLayout.css';

const GridLayout = ({ children }) => {
	return (
		<div className='row'>
			<div className='col-md-3'>{children[0]}</div>
			<div className='col-md-9'>{children[1]}</div>
		</div>
	);
};

export default GridLayout;
