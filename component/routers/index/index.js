import React from 'react';
import Header from '../index/component/header.js';
import PublicNav from '../publicComponent/publicNav.js';
import PublicWaterFall from '../publicComponent/publicWaterFall.js';
import ReactSwipe from 'react-swipe';
import ModalBottom from '../publicComponent/modal_bottom.js';
import ModalFromRight from '../publicComponent/modal_from_right.js';

const IndexMain= React.createClass({

	getInitialState:function(){

		return {
			
			headerR:"右边",
			headerTitle:"React学习，首页",
		    'modalState':'hide',
		    'modalStateForRight':'hide',
		}
	},
	showModal(active){

		this.setState({

			'modalState':active
		});
		
	},
	showModalFromRight(active){

		this.setState({

			'modalStateForRight':active
		});
		
	},

	render(){
		var headerL="<p>123</p>";
		return (

			<div>	
				<div className="bui_fac_gray mp_page_header mp_bsd_b">
					<Header 
						headerL={headerL} 
						headerR={this.state.headerR} 
						headerTitle={this.state.headerTitle}
						showModal={this.showModal}
						showModalFromRight={this.showModalFromRight}   />
				</div>
				<div className="mp_page_body slideFast hasheader hasfooter">
					 <ReactSwipe>
		                <div style={{height:"240px"}}>
							<div className="box">
								<img src={"../images/user_center_bg.png"} style={{height:"240px",width:"100%"}} />
							</div>
						</div>
						<div style={{height:"240px"}}>
							<div className="box">
								<img src={"../images/uploadBg.png"} style={{height:"240px",width:"100%"}} />
							</div>
						</div>
		            </ReactSwipe>
					
				   <PublicNav />
				   	{this.props.children}
				   <PublicWaterFall />

				</div>
				<ModalBottom 
					modalState={this.state.modalState}
					showModal={this.showModal}  />

				<ModalFromRight 
					modalStateForRight={this.state.modalStateForRight}
					showModalFromRight={this.showModalFromRight}  />

			</div>
				
		)
	}
})
export default  IndexMain