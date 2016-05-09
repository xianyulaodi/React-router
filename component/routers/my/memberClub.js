import React from 'react';
import Header from '../publicComponent/header.js';
import { Router, Route, Link, Redirect } from 'react-router';
// require('./date.js');

var MyNav= React.createClass({

	 componentDidMount: function() { 

     	this.makeDate();

  	},
  	makeDate:function(){
		
		var today = new Date(); 
	    
	    today.setDate(1);  
	    
	//      获取每个月的第一天是星期几，这样决定日历在开始的位置
	    var week = today.getDay();
	    
	    //获取当前月最后一天时间  
	    var last=new Date(today.getFullYear(), today.getMonth()+1,0);
	    
	//        获取最后一天是几号
	    var lastDate=last.getDate();
	    
		//1号的位置还有多少天，+1是因为求出的星期几时起始位置
		var firstNum=Number(7-week+1); 
		
		var y = last.getYear();  
		var m = last.getMonth()+1;  
		var d = last.getDate(); 

	//获取当前月一共有几周
		var weekNum=this.getMonthWeek(y, m, d);
		
		for(var i=0;i<weekNum;i++){
			var dateList=''; 
			var trList='';
			//	第一个星期和最后一个星期分开处理

			//	第一个星期
			if(i<1){
					
					for(var k=0;k<firstNum;k++){
						
						dateList+='<td style="background:#fff;">'+(k+1)+'</td>';
					}
					
					trList='<td style="background:#fff;" colspan="'+(week-1)+'">'+dateList+'</td>';
					
			}else if(i<(weekNum-1)){

						for(var k=firstNum+7*(i-1);k<firstNum+7*i;k++){
							dateList+='<td>'+(k+1)+'</td>';
						}
						
					   trList='<tr>'+dateList+'</td>';

			//	最后一个星期
			}else{
					
					for(var k=firstNum+7*(i-1); k<lastDate;k++){
						
						dateList+='<td>'+(k+1)+'</td>';
					}
					
					trList='<tr>'+dateList+'</td>';
				}

	        $('#tbody').append(trList);

	    }
	},
	    
	//获取当前月一共有几周的函数
	getMonthWeek:function(a, b, c) { 
		
		var date = new Date(a, parseInt(b) - 1, c);
		var w = date.getDay();
		var d = date.getDate();
		return Math.ceil((d + 6 - w) / 7);         
	},
	render(){
		return (
				<div>	
					<div className="bui_fac_gray mp_page_header mp_bsd_b">
                        <Header 
                            headerTitle={'会员俱乐部'}
                            headerL={'<a href="javascript:history.go(-1)" class="bui_tc_white"><i class="fa fa-angle-left bui_fac_white"></i> 返回<a>'}  />
					</div>
					<div className="mp_page_body slideFast hasheader hasfooter">
						<div className="itemList slideFast">

							<div className="bui_media bui_plr_12 bui_ptb_24 bui_mb_12 bui_bgc_white">
								<div className="bui_media_l">
									<div className="bui_round userImg"  style={{"width":"64px","height":"64px"}}>
										<img src="http://img2.cache.netease.com/tech/2016/2/1/20160201133429a2e58.jpg" style={{"width":"64px","height":"64px"}} />
									</div>
								</div>
								
								<div className="bui_media_b">
									<p className="bui_ts_18 bui_tc_gray">陈小东 </p>
								    <div className="progress bui_round bui_mtb_6">
							            <span className="progress-bar" style={{"width":"25%"}}></span>
							            <span className="progress-text">250积分  25%</span>
							        </div>
									<p className="bui_ts_14 bui_vm">
										<span className="bui_ts_16"><i className="fa fa-bookmark-o"></i> 普通会员</span>
									</p>
								</div>
								<div className="bui_media_r" style={{"paddingTop": "29px"}}>
									<a href="#" className="bui_round  bui_bgc_pink bui_ta_c bui_tc_white bui_plr_12 bui_ptb_3">签到+5</a>
								</div>
							</div>

						{/**<!--签到日历区-->**/}
							<div className="bui_plr_12">
								<p className="bui_ptb_6 bui_ts_12 bui_ta_c">今天还没有签到</p>
								<table cellSpacing="0">
									<thead>
										<tr className="thead">
											<th>Mon</th>
											<th>Tue</th>
											<th>Wed</th>
											<th>Thu</th>
											<th>Fri</th>
											<th>Sat</th>
											<th>Sun</th>
										</tr>
									</thead>
									<tbody id="tbody">
										
									</tbody>
								</table>
							</div>
							{/**<!--签到日历区-->**/}

							<a href="#" className="bui_media bui_vm bui_p_12 bui_mt_12 bui_bgc_white bui_mb_24">
								<div className="bui_media_l">
									<i className="fa fa-calendar bui_fac_gray"></i>
								</div>
								<div className="bui_media_b">
									<p className="bui_ts_16 bui_tc_gray">签到明细</p>
								</div>
								<div className="bui_media_r">
									<i className="fa fa-angle-right"></i>
								</div>
							</a>
							<hr />

			   
						</div>
					</div>
				</div>
		)
	}
})

module.exports= MyNav