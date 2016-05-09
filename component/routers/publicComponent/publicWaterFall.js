import React from 'react';

const PublicWaterFall =React.createClass({

	 getInitialState: function() {
       return {
       			// comment:this.props.comment,
        	}
    },
   
	render(){
		
		
		return (
			<div>
				
					{/**<!--活动列表-->**/}
				<div className="itemList slideFast">
					{/**<!--收藏列表-->**/}
					<div className="bui_avg_sm_2 bui_p_12">
						
						{/**<!--收藏列表左边-->**/}
						<div className="col-l bui_pr_6">
							
							<li className="bui_bgc_white bui_radius bui_mb_12">

								<p style= {{width:"100%",height:"90px"}}>
									<img src="http://img1.cache.netease.com/tech/2016/2/1/20160201100312d5bce.jpg" style= {{width:"100%",height:"90px"}} />
								</p>
								<h2 className="bui_ptb_6 bui_pl_6">瑞士卷奶</h2>
								
								<div className="commentList">
									<a href="#" className="bui_media bui_vm bui_plr_6 bui_pb_6">
										<div className="bui_media_l">
											<div className="bui_round" style={{width:"36px",height:"36px"}} >
												<img src="http://img1.cache.netease.com/tech/2016/2/1/20160201100312d5bce.jpg"  style={{width:"36px",height:"36px"}} />
											</div>
										</div>
										<div className="bui_media_b">
											<p className="bui_ts_12 bui_tc_gray">不错，我喜欢 </p>
										</div>
									</a>
									<a href="#" className="bui_media bui_vm bui_plr_6 bui_pb_6">
										<div className="bui_media_l">
											<div className="bui_round" style={{width:"36px",height:"36px"}} >
												<img src="http://img1.cache.netease.com/tech/2016/2/1/20160201100312d5bce.jpg"  style={{width:"36px",height:"36px"}} />
											</div>
										</div>
										<div className="bui_media_b">
											<p className="bui_ts_12 bui_tc_gray">不错，我喜欢 </p>
										</div>
									</a>
								</div>
								<hr />
								<p className="bui_ts_12 bui_ptb_6 bui_plr_6 bui_ovh">
									<span className="bui_tc_gray bui_fl"><i className="fa fa-heart-o bui_fac_gray"></i> 666</span>
									<span className="bui_fr bui_tc_orange">取消关注</span>
								</p>
							</li>
							
							</div>
						{/**<!--收藏列表左边-->**/}
						
						{/**<!--收藏列表右边-->**/}
						<div className="col-l bui_pl_6">
							
							<li className="bui_bgc_white bui_radius bui_mb_12">

								<p style= {{width:"100%",height:"90px"}}>
									<img src="http://img1.cache.netease.com/tech/2016/2/1/20160201100312d5bce.jpg" style= {{width:"100%",height:"90px"}} />
								</p>
								<h2 className="bui_ptb_6 bui_pl_6">瑞士卷奶</h2>
								
								<div className="commentList">
									<a href="#" className="bui_media bui_vm bui_plr_6 bui_pb_6">
										<div className="bui_media_l">
											<div className="bui_round" style={{width:"36px",height:"36px"}} >
												<img src="http://img1.cache.netease.com/tech/2016/2/1/20160201100312d5bce.jpg"  style={{width:"36px",height:"36px"}} />
											</div>
										</div>
										<div className="bui_media_b">
											<p className="bui_ts_12 bui_tc_gray">不错，我喜欢 </p>
										</div>
									</a>
									<a href="#" className="bui_media bui_vm bui_plr_6 bui_pb_6">
										<div className="bui_media_l">
											<div className="bui_round" style={{width:"36px",height:"36px"}} >
												<img src="http://img1.cache.netease.com/tech/2016/2/1/20160201100312d5bce.jpg"  style={{width:"36px",height:"36px"}} />
											</div>
										</div>
										<div className="bui_media_b">
											<p className="bui_ts_12 bui_tc_gray">不错，我喜欢 </p>
										</div>
									</a>
									<a href="#" className="bui_media bui_vm bui_plr_6 bui_pb_6">
										<div className="bui_media_l">
											<div className="bui_round" style={{width:"36px",height:"36px"}} >
												<img src="http://img1.cache.netease.com/tech/2016/2/1/20160201100312d5bce.jpg"  style={{width:"36px",height:"36px"}} />
											</div>
										</div>
										<div className="bui_media_b">
											<p className="bui_ts_12 bui_tc_gray">不错，我喜欢 </p>
										</div>
									</a>
								</div>
								<hr />
								<p className="bui_ts_12 bui_ptb_6 bui_plr_6 bui_ovh">
									<span className="bui_tc_gray bui_fl"><i className="fa fa-heart-o bui_fac_gray"></i> 666</span>
									<span className="bui_fr bui_tc_orange">取消关注</span>
								</p>
							</li>
						</div>
						{/**<!--收藏列表右边-->**/}

						
					</div>
				</div>
				{/**<!--活动列表-->**/}
					

		      </div> 
		)
	}
});

export default PublicWaterFall;

