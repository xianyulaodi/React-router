import React from 'react';
import Header from '../publicComponent/header.js';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'


const CircleTip = React.createClass({
   
    render: function() {

        const {tipName}=this.props.params;
      
        return  (
                <div>
                    <div className="bui_fac_gray mp_page_header mp_bsd_b">
                        <Header 
                            headerTitle={tipName}
                            headerL={'<a href="javascript:history.go(-1)" class="bui_tc_white"><i class="fa fa-angle-left bui_fac_white"></i> 返回<a>'}  />
                    </div>
                    <div className="mp_page_body slideFast hasheader hasfooter">
                        <li>
                            <a href="#" className="bui_media bui_vm bui_p_12 bui_bgc_white">
                                <div className="bui_media_l">
                                        <div className="bui_radius"  style={{"width":"90px","height":"90px"}}>
                                            <img src="http://img1.cache.netease.com/tech/2016/2/1/20160201100312d5bce.jpg" style={{"width":"90px","height":"90px"}} />
                                        </div>
                                    </div>
                                    <div className="bui_media_b">
                                            <p className="bui_ts_16 bui_tc_gray">这是一个蛋糕的名字 </p>
                                            <p className="bui_ts_14 bui_tc_gray">幸福达人 <span className="bui_ts_12 bui_pl_12">1天前</span> </p>
                                            <p className="bui_ts_14 bui_tc_gray">6个步骤 </p>
                                            <p className="bui_ts_12 bui_pt_12">
                                                <span className="bui_bds_1 bui_round bui_bdc_pink bui_tc_pink bui_ta_c bui_plr_6 bui_ptb_3">蛋糕</span>
                                                <span className="bui_tc_gray bui_fr bui_plr_12"><i className="fa fa-heart-o bui_fac_orange"></i> 666</span>
                                            </p>
                                    </div>
                                </a>
                            <hr />
                            
                        </li>
                    </div>
                </div>
            ) 
        
        
    }
});
export default CircleTip;

