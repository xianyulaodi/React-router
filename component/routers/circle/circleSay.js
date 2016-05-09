import React from 'react';
import Header from '../publicComponent/header.js';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

const CircleSay = React.createClass({
   
    render: function() {
      
        return  (
                <div>
                    <div className="bui_fac_gray mp_page_header mp_bsd_b">
                        <Header 
                            headerTitle={'说说'}
                            headerL={'<a href="javascript:history.go(-1)" class="bui_tc_white"><i class="fa fa-angle-left bui_fac_white"></i> 返回<a>'} 
                            headerR={'<i class="fa fa-upload bui_fac_white"></i>'}  />
                    </div>
                    <div className="mp_page_body slideFast hasheader hasfooter">
                        <li style={{
                            "height":"120px",
                            "background": "url(../images/uploadBg.png) no-repeat center center",
                            "WebKitBackgroundSize":"cover"
                        }}>
                            <div className="bui_media bui_p_12 bui_pt_24">
                                <div className="bui_media_l">
                                    <div className="bui_round"  style={{"width":"64px","height":"64px"}}>
                                        <img src="http://img2.cache.netease.com/tech/2016/2/1/20160201133429a2e58.jpg"  style={{"width":"64px","height":"64px"}} />
                                    </div>
                                </div>
                                
                                <div className="bui_media_b bui_tc_white">
                                    <p className="bui_ts_16">咸鱼老弟 </p>
                                    <p className="bui_ts_14 bui_vm bui_ovh">
                                        <span className="bui_fl bui_pt_3"><i className="fa fa-heart-o bui_fac_white"></i> 100</span>
                                        <span className="bui_fl bui_plr_12 bui_pt_3"><i className="fa fa-thumbs-o-up bui_fac_white"></i> 666</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <div className="bui_bgc_white bui_p_12">
                            <p className="bui_pb_6">说说你的心情</p>
                            <textarea name="" rows="" cols="" placeholder="请输入内容" 
                                style={{
                                    "height": "80px",
                                    "padding": "12px",
                                    "borderRadius": "5px",
                                    "border": "1px solid #ccc",
                                    "width": "100%",
                                    "resize": "none"
                                }}>
                            </textarea>
                        </div>

                        <div className="bui_plr_12 bui_bgc_white bui_pb_24">
                            <div className="bui_ovh">
                                <p className="bui_ptb_12 bui_fl">添加图片</p>
                                <div className="bui_mtb_12 bui_fr" 
                                    style={{
                                            "height": "25px",
                                            "lineHeight":"13px",
                                            "textAlign": "center",
                                            "borderRadius": "5px",
                                            "position": "relative",
                                            "fontSize": "14px",
                                            "color": "#fff",
                                            "padding": "6px 12px",
                                            "background": "#ffa6a6"
                                        }}
                                    >
                                    <input type="file" name="file" id="file" multiple="multiple" className="uploadFile" accept="image/*"
                                            style={{
                                                "height": "100%",
                                                "lineHeight":"100%",
                                                "position": "absolute",
                                                "top": "0",
                                                "left": "0",
                                                "opacity": "0"
                                              }}
                                      /> 
                                    +添加图片
                                </div>
                            </div>
                            <div className="bui_avg_sm_4" id="showWrap"></div>
                             <p className="bui_plr_12 bui_pt_12"><a  className="bui_ptb_6 bui_ta_c bui_bgc_pink bui_tc_white bui_block bui_radius" style={{"width":"100%"}} >确定发布</a></p>
                        </div>

                    </div>
                </div>
            ) 
        
        
    }
});
export default CircleSay;

