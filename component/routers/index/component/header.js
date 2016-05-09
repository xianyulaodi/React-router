import React from 'react';

const Header = React.createClass({
    getInitialState:function(){
        return {
            showHide:"hide"
        }
    },
    slideNav: function(event) {

        if(this.state.showHide=='hide'){

            this.setState({
                 showHide:"show"
            });

        }else{

            this.setState({
                 showHide:"hide"
            });
        }
        
       
    },
    showModal(){

        // 将这个值传递给父集，其实可以直接引用，只是想搞一些组件之间的交流
        // 这里要注意：如果有setState，setState是一个异步方法，所以需要操作缓存的当前值
        // 打个比方：
        // var active=123;
        // setState({
        //     'active':active
        // })
        this.props.showModal('active');
    },
    showModalRight(){

        // 将这个值传递给父集，其实可以直接引用，只是想搞一些组件之间的交流
        // 这里要注意：如果有setState，setState是一个异步方法，所以需要操作缓存的当前值
        // 打个比方：
        // var active=123;
        // setState({
        //     'active':active
        // })
        this.props.showModalFromRight('active');
    },
    render: function() {
        var height=this.state.showHide=='show' ? '100px' : '0';
        var navSlide={

                position: "absolute",
                right: "0px",
                top: "50px",
                transition:"all 0.1s",
                WebkitTransition:"all 0.1s",
                height: height,
        }
        return  (

                <div className="bui_media bui_vm bui_plr_12 bui_tc_white bui_bgc_pink">

                    <div className="bui_media_l bui_p_0" style = {{position:"relative"}} >
                        <div className="bui_btnsq bui_bgc_red bui_ts_12 bui_round" style={{position: "absolute",top: "17px",right: "13px",width: "8px",height: "8px"}}></div>
                        <a href="javascript:;"><i className="fa fa-envelope-o bui_fac_white"></i></a>
                    </div>
                   
                    <div className="bui_media_b">
                        <p className="bui_ta_c">{this.props.headerTitle}</p>
                    </div>

                    <div className="bui_media_r bui_p_0 ">
                        
                        <div className="bui_ts_20 nav_bar bui_plr_12" style={{position: "relative",display: "inline-block"}}>
                            <i onClick={this.slideNav}  className="fa fa-align-left bui_fac_white"></i>
                        </div>
                        <div className="bui_bgc_white bui_atc_gray bui_ts_14 bui_radius" style= {navSlide} >
                             <a href="#" onClick={this.showModal}  className="bui_block bui_plr_24 bui_vm">
                                <i className="fa fa-sort-amount-asc fa_3x"></i> 筛选
                             </a>
                             
                            <hr/>
                            <a href="#" onClick={this.showModalRight} id="searchBtn" className="bui_block bui_plr_24" >
                                <i className="fa fa-search fa_3x"></i> 搜索
                            </a>
                         </div>
                    </div>
                </div>
            
        )   
    }
});
export default Header;

