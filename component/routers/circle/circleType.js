import React from 'react';
import CircleNew from '../circle/component/circleNew.js';
import CircleHot from '../circle/component/circleHot.js';
import CircleFocus from '../circle/component/circleFocus.js';
import Header from '../publicComponent/header.js';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

const ACTIVE = { borderBottom: '2px solid #ffa6a6' };

const CircleType = React.createClass({

    getInitialState: function() {

       return {
            tabs:[
                    {tabName:"最新",id:1,type:"New"},
                    {tabName:"热门",id:2,type:"Hot"},
                    {tabName:"关注",id:3,type:"Focus"}
                ],
            tabId:1,
            tabType:"New"
        };
    },
    tabChoiced:function(id,tabType){
        this.setState({
            tabId:id,
            tabType:tabType
        });

   },
   
    render: function() {
        var choiced={
            borderBottom:"2px solid #ffa6a6",
            color:"#ffa6a6",
            fontWeight:"500"
        }
        var noChoice={
            fontWeight:"500"
        }

        var loadType='';

        var tabList= this.state.tabs.map(function(res,index) {
            var myStyle=noChoice;
            if(res.id==this.state.tabId){
                myStyle=choiced;
            }
            if(this.state.tabId==1){

                loadType= <CircleNew />;  

            }else if(this.state.tabId==2){

                 loadType= <CircleHot />; 

            }else if(this.state.tabId==3){

                loadType= <CircleFocus/>; 
            }
            return  <li key={index} onClick={this.tabChoiced.bind(this,res.id,res.type)} style={myStyle} className="bui_ptb_12">{res.tabName}</li>

        }.bind(this));
        return  (
                <div>
                    <div className="bui_fac_gray mp_page_header mp_bsd_b">
                        <div className="bui_media bui_vm bui_plr_12 bui_tc_white bui_bgc_pink">
                             <div className="bui_media_l">
                                <p><i className="fa fa-envelope-o bui_fac_white"></i></p>
                            </div>
                           
                            <div className="bui_media_b">
                                <p className="bui_ta_c">烘培圈</p>
                            </div>

                            <div className="bui_media_r">
                                <Link to="/circle/say"><p><i className="fa fa-plus fa_3x bui_fac_white"></i></p> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mp_page_body slideFast hasheader hasfooter">
                        <div className="bui_avg_sm_3 bui_atc_gray bui_ta_c bui_ts_18 bui_bgc_white">
                            {tabList}
                        </div>
                        <hr />
                        {loadType }
                    </div>
                </div>
            ) 
        
        
    }
});
export default CircleType;

