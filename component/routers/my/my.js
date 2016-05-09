import React from 'react';
import Header from '../publicComponent/header.js';
import { Router, Route, Link, Redirect } from 'react-router';

var Content= React.createClass({

	render(){
		
		return (
				<div>	
					{this.props.children}
				</div>
		)
	}
})

module.exports= Content