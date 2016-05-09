import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'
import Footer from '../component/routers/publicComponent/footer.js'
require('../css/comment.css');
require('../css/publicNav.css');
require('../bower_components/baidiui/css/baidiui.css');
require('../css/style.css');
require('../css/publicNav.css');
require('../css/date.css');

const ACTIVE = { color: 'red' }
const App=React.createClass({
  render() {
    return (

    	<div className="mp_wrap bui_wrap">
			{/**主屏幕**/}
			<div className="mp_pagebox_home">
				
				{/**这里面的内容会被子路由给代替**/}
				{this.props.children}

				{/**公共页脚**/}
				<div className="mp_page_footer">
					 <Footer  />
				</div>
				{/**公共页脚**/}
			</div>
			{/**主屏幕**/}
		</div>
    )
  }
});
export default App

