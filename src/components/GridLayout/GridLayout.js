import React from 'react';
import './GridLayout.css';

const GridLayout = (props) => {
    return (
        <div className ="container">
            <div className = "row">
                <div className = "col-md-3">
                    {props.children[0]}
                </div>                
                <div className = "col-md-9">
                    {props.children[1]}
                </div>                
            </div>            
        </div>
    );
};

export default GridLayout;