import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

const PublicNav= React.createClass({

	 getInitialState: function() {
       return {
       			// comment:this.props.comment,
        	}
    },
   
	render(){
		
		
		return (
			<div>
				
					<div className="bui_avg_sm_4 bui_bgc_white bui_p_12">
						<li>
							<Link to="/type/饼干">
								<p className="icon icon1"></p>
								<p className="bui_ta_c bui_tc_gray">饼干</p>
							</Link>
						</li>
						<li>
							<Link to="/type/面包">
								<p className="icon icon2"></p>
								<p className="bui_ta_c bui_tc_gray">面包</p>
							</Link>
						</li>
						<li>
							<Link to="/type/茶点">
								<p className="icon icon3"></p>
								<p className="bui_ta_c bui_tc_gray">茶点</p>
							</Link>
						</li>
						<li>
							<Link to="/type/蛋糕">
								<p className="icon icon4"></p>
								<p className="bui_ta_c bui_tc_gray">蛋糕</p>
							</Link>
						</li>

					</div>
					<div className="bui_bgc_gray bui_pb_12"></div>

		      </div> 
		)
	}
});

export default PublicNav;

