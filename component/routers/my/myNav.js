import React from 'react';
import Header from '../publicComponent/header.js';
import { Router, Route, Link, Redirect } from 'react-router';

var MyNav= React.createClass({

	render(){
		
		return (
				<div>	
					<div className="bui_fac_gray mp_page_header mp_bsd_b">
						<Header 
							headerTitle={'我的'}
							headerR={'<i class="fa fa-plus fa_3x bui_fac_white"></i>'}  
							headerL={'<i class="fa fa-envelope-o bui_fac_white"></i>'}  />
					</div>
					<div className="mp_page_body slideFast hasheader hasfooter">
						
						<div className="itemList slideFast">
							<li className="circleItem">
								<div className="bui_media bui_p_12 bui_bgc_white">
									<div className="bui_media_l">
									<Link to="/my/userCenter">
										<div className="bui_round" style={{"width":"64px","height":"64px"}}>
											<img src="../images/people.jpg" style={{"width":"64px","height":"64px"}}  />
										</div>
									</Link>
									</div>
									
									<div className="bui_media_b">
										<p className="bui_ts_16 bui_tc_black">咸鱼老弟 </p>
										<p className="bui_ts_14 bui_vm bui_ovh">
											<span className="bui_round bui_fr bui_bgc_black bui_ta_c bui_plr_12 bui_ptb_3"><a href="#" className="bui_tc_white">已签到</a></span>
											<span className="bui_tc_gray bui_fl bui_pt_3"><i className="fa fa-heart-o bui_fac_gray"></i> 100</span>
											<span className="bui_tc_gray bui_fl bui_plr_12 bui_pt_3"><i className="fa fa-thumbs-o-up bui_fac_gray"></i> 666</span>
										</p>
										<p><i className="fa fa-bookmark-o"></i> 普通会员</p>
									</div>
								</div>
							</li>
							<p className="bui_pt_12 bui_bgc_gray"></p>
							<div className="bui_avg_sm_3 bui_bgc_white bui_ptb_12">
								<li className="bui_col_line_r bui_ta_c"><a href="my_focus.html" className="bui_tc_gray">关注 (24)</a></li>
								<li className="bui_col_line_r bui_ta_c"><a href="my_fans.html" className="bui_tc_gray">粉丝 (24)</a></li>
								<li className="bui_col_line_r bui_ta_c"><a href="my_collection.html" className="bui_tc_gray">收藏 (24)</a></li>
							</div>
							<div className="bui_mt_12 bui_atc_gray">
								<hr />
								<a href="javascript:;" className="bui_media bui_ptb_12 bui_mb_12 bui_plr_24 bui_bgc_white bui_col_line_b">
									<div className="bui_media_l">
										<div className="bui_btn_32 bui_btnsq bui_round"><i className="fa fa-files-o bui_fac_pink"></i></div>
									</div>
									<div className="bui_media_b">
										<p className="bui_pt_3">我的订单</p>
									</div>
									<div className="bui_media_r">
										<i className="fa fa-angle-right"></i>
									</div>
								</a>
								
								<hr />
								<a href="javascript:;" className="bui_media bui_ptb_12 bui_mb_12 bui_plr_24 bui_bgc_white bui_col_line_b">
									<div className="bui_media_l">
										<div className="bui_btn_32 bui_btnsq bui_round"><i className="fa fa-shopping-cart bui_fac_pink"></i></div>
									</div>
									<div className="bui_media_b">
										<p className="bui_pt_3">购物车</p>
									</div>
									<div className="bui_media_r">
										<i className="fa fa-angle-right"></i>
									</div>
								</a>
								<hr />
								
								<a href="address.html" className="bui_media bui_ptb_12 bui_mb_12 bui_plr_24 bui_bgc_white bui_col_line_b">
									<div className="bui_media_l">
										<div className="bui_btn_32 bui_btnsq bui_round"><i className="fa fa-map-marker bui_fac_pink"></i></div>
									</div>
									<div className="bui_media_b">
										<p className="bui_pt_3">收货地址</p>
									</div>
									<div className="bui_media_r">
										<i className="fa fa-angle-right"></i>
									</div>
								</a>
								<hr />
								
								<a href="my_activity.html" className="bui_media bui_ptb_12 bui_mb_12 bui_plr_24 bui_bgc_white bui_col_line_b">
									<div className="bui_media_l">
										<div className="bui_btn_32 bui_btnsq bui_round"><i className="fa fa-star-o bui_fac_pink"></i></div>
									</div>
									<div className="bui_media_b">
										<p className="bui_pt_3">我的活动</p>
									</div>
									<div className="bui_media_r">
										<i className="fa fa-angle-right"></i>
									</div>
								</a>
								<hr />
								
								<Link to="/my/memberClub" className="bui_media bui_ptb_12 bui_mb_12 bui_plr_24 bui_bgc_white bui_col_line_b">
									<div className="bui_media_l">
										<div className="bui_btn_32 bui_btnsq bui_round"><i className="fa fa-bookmark-o bui_fac_pink"></i></div>
									</div>
									<div className="bui_media_b">
											<p className="bui_pt_3">会员俱乐部</p>
										
									</div>
									<div className="bui_media_r">
										<i className="fa fa-angle-right"></i>
									</div>
								</Link>
								<hr />
								
								<a href="javascript:;" className="bui_media bui_ptb_12 bui_mb_12 bui_plr_24 bui_bgc_white bui_col_line_b">
									<div className="bui_media_l">
										<div className="bui_btn_32 bui_btnsq bui_round"><i className="fa fa-gear bui_fac_pink"></i></div>
									</div>
									<div className="bui_media_b">
										<p className="bui_pt_3">设置</p>
									</div>
									<div className="bui_media_r">
										<i className="fa fa-angle-right"></i>
									</div>
								</a>
								<hr />
								
							</div>
		   
					 	</div>
					</div>
					
				</div>
		)
	}
})

module.exports= MyNav