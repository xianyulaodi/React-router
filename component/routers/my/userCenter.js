import React from 'react';
import Header from '../publicComponent/header.js';
import { Router, Route, Link, Redirect } from 'react-router';

const user_head={
			    "height":"200px",
			    "background": "url(../images/user_center_bg.png) no-repeat center center"
				};
const progress ={
	    "width": "100%",
	    "height": "18px",
	    "background": "#ccc",
	    "position": "relative",
	};
var MyNav= React.createClass({

	render(){
		const navWidth='25%';
		const progressBar={
			    "height": "18px",
			    "background": "#ffa6a6",
			    "display": "inline-block",
			    "width":navWidth
			};
			const progressText={
			        "position": "absolute",
				    "color": "#fff",
				    "fontSize": "12px",
				    "top": "0px",
				    "left": "50%",
				    "marginLeft": "-34px"
			};
		return (
				<div>	
					<div className="bui_fac_gray mp_page_header mp_bsd_b">
                        <Header 
                            headerTitle={'用户中心'}
                            headerL={'<a href="javascript:history.go(-1)" class="bui_tc_white"><i class="fa fa-angle-left bui_fac_white"></i> 返回<a>'}  />
					</div>
					<div className="mp_page_body slideFast hasheader hasfooter">
						<div className="itemList slideFast">

							<div className="bui_plr_12 bui_pt_24" style={user_head}>
								<div className="bui_media bui_p_12 bui_pt_72">
									<div className="bui_media_l">
										<div className="bui_round userImg" style={{"width":"64px","height":"64px"}}>
											<img src="http://img2.cache.netease.com/tech/2016/2/1/20160201133429a2e58.jpg" style={{"width":"64px","height":"64px"}} />
										</div>
									</div>
										
									<div className="bui_media_b">
										<p className="bui_ts_18 bui_tc_white">陈小东  <span className="bui_ts_16 bui_pl_12"><i className="fa fa-bookmark-o"></i> 普通会员</span></p>
									    <div className="bui_round bui_mtb_6" style={progress}>
								            <span style={progressBar}></span>
								            <span style={progressText}>250积分  25%</span>
								        </div>
								        
										<p className="bui_ts_14 bui_vm bui_ovh">
											<span className="bui_tc_white bui_fl bui_pt_3"><i className="fa fa-heart-o bui_fac_white"></i> 100</span>
											<span className="bui_tc_white bui_fl bui_plr_12 bui_pt_3">关注  21</span>
										</p>
									</div>

								</div>
							</div>

							<div className="bui_avg_sm_3 bui_bgc_white bui_ptb_12">
								<li className="bui_col_line_r bui_ta_c"><a href="#" className="bui_tc_gray">收藏</a></li>
								<li className="bui_col_line_r bui_ta_c"><a href="#" className="bui_tc_gray">粉丝</a></li>
								<li className="bui_col_line_r bui_ta_c"><a href="#" className="bui_tc_gray">关注</a></li>
							</div>
							<p className="bui_pt_12 bui_bgc_gray"></p>
							<ul>
								<li className="bui_mb_12 circleItem">
									<div className="bui_media bui_p_12 bui_bgc_white">
										<div className="bui_media_l">
											{/**<!--头像-->**/}
											<Link to="/my/userCenter" className="bui_round bui_block"   style={{width:"48px",height:"48px"}}>
												<img src="http://img2.cache.netease.com/tech/2016/2/1/20160201133429a2e58.jpg" style={{width:"48px",height:"48px"}}	/>
											</Link>
										</div>
										
										<div className="bui_media_b">
											<p className="bui_ts_16 bui_tc_black">陈小东 <span className="bui_pl_12 bui_ts_10">1分钟前</span></p>
											<p className="bui_ts_14 bui_pt_12">
												<span className="bui_bds_1 bui_round bui_bdc_pink  bui_ta_c bui_plr_6 bui_ptb_3"><Link to="/circle/tip/蛋糕" className="bui_tc_pink">蛋糕</Link></span>
												<span className="bui_tc_orange bui_fr commentBtn"><i className="fa fa-comments bui_fac_orange"></i> 评论</span>
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
													<p className="bui_tc_gray bui_plr_6 bui_pt_6"><span className="bui_tc_pink">小丸子：</span>我家东东好厉害，赞一个</p>
													<p className="bui_tc_gray bui_plr_6 bui_pt_6"><span className="bui_tc_pink">小丸子：</span>我家东东好厉害，赞一个</p>
													<p className="bui_tc_gray bui_plr_6 bui_pt_6"><span className="bui_tc_pink">小丸子：</span>我家东东好厉害，赞一个</p>
												</div>
											</div>
											{/**<!--发布评论的input-->**/}
											<div className="commentIpt">
												<input type="text" className="" name="" id="" value="" />
												<button  className="sendBtn bui_bgc_orange bui_radius">发送</button>
											</div>
										</div>
									</div>
									<hr />
								</li>
							</ul>
			   
						</div>
					</div>
				</div>
		)
	}
})

module.exports= MyNav