import React from 'react';
import Header from '../publicComponent/header.js';
import PublicNav from '../publicComponent/publicNav.js';
import WaterFall from '../publicComponent/publicWaterFall.js';

const Type= React.createClass({

	 getInitialState: function() {

       return {
       			// comment:this.props.comment,
        	}
    },
   
	render(){
		{/**传递过来的参数 **/}
		const { typeName } = this.props.params
		return (
			    <div>	
					<div className="bui_fac_gray mp_page_header mp_bsd_b">
						<Header 
							headerTitle={typeName}
							headerR={'<i class="fa fa-search fa_3x bui_fac_white"></i>'}  
							headerL={'<a href="javascript:history.go(-1)" class="bui_tc_white"><i class="fa fa-angle-left bui_fac_white"></i> 返回</a>'}  />
					</div>
					<div className="mp_page_body slideFast hasheader hasfooter">
						<PublicNav />
						<WaterFall />
					</div>
				</div>
		)
	}
});

export default Type;

