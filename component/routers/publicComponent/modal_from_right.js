import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

const ModalBottom= React.createClass({

	 getInitialState: function() {
       return {
       		     
        	}
    },

    hideModal(){
    	this.props.showModalFromRight('hide');
    },
   
	render(){
		var showOrHide=this.props.modalStateForRight;
		var modalShow="translateX(0%)";
		var modalHide="translateX(150%)";
		var maskShow="block";
		var maskHide="none";
		var translateX=showOrHide=='active' ? modalShow : modalHide;
		var display=showOrHide=='active' ? maskShow : maskHide;

		var modal_mask={

			width: "100%",
		    height: "100%",
		    overflow: "hidden",
		    position: "absolute",
		    top: "0",
		    left: "0",
		    right: "0",
		    bottom: "0",
		    zIndex: "10000",
		    transition:"display 0.3s",
		    WebkitTransition:"display 0.3s",
		    backgroundColor: "rgba(0,0,0,0.5)",
		    "display":display
		};

		var bui_modal={

		    position:"absolute",
		    background:"#f5f5f5",
		    zIndex:"10000",
		    boxShadow:"0 0 24px rgba(0, 0, 0, 1)",
		    transition:"transform 0.3s, opacity 0.3s",
		    WebkitTransition:"-webkit-transform 0.3s, opacity 0.3s",
		    MozTransition:"-moz-transform 0.3s, opacity 0.3s",
		    transform: translateX,
            WebkitTtransform: translateX,
            width: "80%",
		    display: "block",
		    right: "0px",
		    bottom: "0px",
		    top:"0"
		    
		};


		
		return (
			<div>
				<div style={modal_mask} onClick={this.hideModal}></div>
				<div style={bui_modal}>
					<form className="bui_p_12">
						<div className="bui_ipg_48 bui_block">
							<button className="fa fa-search bui_fr" id="searchButton"></button>
							<input type="text" name="hg_search" id="hg_search" placeholder="请输入内容" value="" className="bui_ipt_48 bui_radius bui_ts_16" />
						</div>
					</form>
					{/**<!--搜索表单-->**/}
					<hr />
					{/**<!--最近搜索-->**/}
					<p className="bui_ts_14 bui_tc_white_d48 bui_ptb_12 bui_plr_24 bui_ta_c">最近搜索</p>
					<div id="hg_searchHistory" className="bui_atc_black bui_ts_14">
						<p className="bui_ta_c bui_ptb_24"><i className="fa fa-circle-o-notch fa-spin bui_fac_white_d48 bui_fas_24"></i></p>
					</div>
				</div>
		    </div> 
		)
	}
});

export default ModalBottom;

