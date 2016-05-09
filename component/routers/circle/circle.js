import React from 'react';
import Header from '../publicComponent/header.js';

const ACTIVE = { borderBottom: '2px solid #ffa6a6' };

const Circle= React.createClass({

	 getInitialState: function() {

       return {
       			// comment:this.props.comment,
        	}
    },
   
	render(){
		return (
			    <div>	
					{this.props.children}
				</div>
		)
	}
});

export default Circle;

