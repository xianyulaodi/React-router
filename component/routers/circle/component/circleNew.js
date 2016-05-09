import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

const CircleNew = React.createClass({
	getInitialState:function(){
    		return {
    			inputState:false
    		}
    },
	inputShowFn:function(){
		var myState=!this.state.inputState;
		this.setState({
			inputState:myState
		})
	},

    render: function() {
        var inputHide={
        	display:"none"
        };
        var inputShow={
            display:"block"
        };
        var inputStyle=this.state.inputState ? inputShow : inputHide;
        return  (

                <div className="slideFast">
						<li className="bui_mb_12 circleItem">
							<div className="bui_media bui_p_12 bui_bgc_white">
								<div className="bui_media_l">
									{/**<!--头像-->**/}
									<Link to="/my/userCenter" className="bui_round bui_block"   style={{width:"48px",height:"48px"}}>
										<img src="http://img2.cache.netease.com/tech/2016/2/1/20160201133429a2e58.jpg" style={{width:"48px",height:"48px"}}	/>
									</Link>
								</div>
								
								<div className="bui_media_b">
									<p className="bui_ts_16 bui_tc_black">咸鱼老弟 <span className="bui_pl_12 bui_ts_10">1分钟前</span></p>
									<p className="bui_ts_14 bui_pt_12">
										<Link to="/circle/tip/蛋糕" className="bui_tc_pink"><span className="bui_bds_1 bui_round bui_bdc_pink  bui_ta_c bui_plr_6 bui_mr_6 bui_ptb_3">蛋糕</span></Link>
										<Link to="/circle/tip/面包" className="bui_tc_pink"><span className="bui_bds_1 bui_round bui_bdc_pink  bui_ta_c bui_plr_6 bui_ptb_3">面包</span></Link>
										<span className="bui_tc_orange bui_fr commentBtn" onClick={this.inputShowFn}><i className="fa fa-comments bui_fac_orange"></i> 评论</span>
										<span className="bui_tc_gray bui_fr bui_plr_12"><i className="fa fa-thumbs-o-up bui_fac_orange"></i> 666</span>
									</p>
									{/**<!--发布的内容-->**/}
										<article className="bui_ts_16 bui_pt_12 bui_tc_gray">
											送给美女的蛋糕，哈哈，很般配吧
										</article>
									{/**<!--发布的照片列表-->**/}
									<div className="bui_avg_sm_3">
										<div>
											<p className="picList" >
												<img src="http://img2.cache.netease.com/tech/2016/2/1/20160201133429a2e58.jpg" style={{width:"100%",height:"auto"}} />
											</p>
										</div>
										<div>
											<p className="picList" >
												<img src="http://img2.cache.netease.com/tech/2016/2/1/20160201133429a2e58.jpg" style={{width:"100%",height:"auto"}}  />
											</p>
										</div>
										<div>
											<p className="picList" >
												<img src="http://img2.cache.netease.com/tech/2016/2/1/20160201133429a2e58.jpg" style={{width:"100%",height:"auto"}} />
											</p>
										</div>
									</div>
									{/**<!--评论列表-->**/}
									<div className="commentList">
										<i className="angle bui_bgc_gray"></i>
										<div className="bui_bgc_gray bui_ts_12 bui_pb_6 bui_radius">
											<p className="bui_tc_gray bui_plr_6 bui_pt_6"><span className="bui_tc_pink">小梦子：</span>我家咸鱼哥哥好厉害，赞一个</p>
											<p className="bui_tc_gray bui_plr_6 bui_pt_6"><span className="bui_tc_pink">小梦子：</span>我家咸鱼哥哥好厉害，赞一个</p>
											<p className="bui_tc_gray bui_plr_6 bui_pt_6"><span className="bui_tc_pink">小梦子：</span>我家咸鱼哥哥好厉害，赞一个</p>
										</div>
									</div>
									{/**<!--发布评论的input-->**/}
									<div className="commentIpt" style={inputStyle}>
										<input type="text" className="" name="" id="" value="" />
										<button  className="sendBtn bui_bgc_orange bui_radius">发送</button>
									</div>
								</div>
							</div>
							<hr />
						</li>
					</div>
        )   
    }
});
export default CircleNew;

