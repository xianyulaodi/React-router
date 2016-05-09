import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

const ModalBottom= React.createClass({

	 getInitialState: function() {
       return {
       		     
        	}
    },

    hideModal(){
    	// 这里只是想演示组件之间的交流。所以复杂化它了
    	this.props.showModal('hide');
    },
   
	render(){
		var showOrHide=this.props.modalState;
		var modalShow="translateY(0)";
		var modalHide="translateY(100%)";
		var maskShow="block";
		var maskHide="none";
		var translateY=showOrHide=='active' ? modalShow : modalHide;
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
		    transform: translateY,
		    bottom: "0",
            WebkitTtransform: translateY,
            width: "100%",
		    display: "block",
		    left: "0px",
		    bottom: "0px",
		    
		};


		
		return (
			<div>
				<div style={modal_mask} onClick={this.hideModal}></div>
				<div style={bui_modal}>
					<div className="bui_p_12 bui_ta_c">
						<a href="www.baidu.com" className="bui_bgc_pink bui_ptb_12 bui_ta_c bui_mb_12 bui_block bui_tc_white bui_radius">浏览"购买原料"的教程</a>
						<a href="#" className="bui_bgc_pink bui_ptb_12 bui_ta_c bui_mb_12 bui_block bui_tc_white bui_radius">浏览"购买成品"的教程</a>
						<a href="#" className="bui_bgc_pink bui_ptb_12 bui_ta_c bui_mb_12 bui_block bui_tc_white bui_radius">"购买原料"和"购买成品"的教程</a>
					</div>
				</div>
		    </div> 
		)
	}
});

export default ModalBottom;

