import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

const Mall= React.createClass({

	

	render(){
		
		return (
			<ul>
				<Link to="/mall/type/123">这里是商城的界面，点击可以跳转</Link>
				{this.props.children}

			</ul>
		)
	}
})

module.exports= Mall