import React from 'react';

const Header = React.createClass({
    _handleUrl: function(url,e) {
        window.location.href=url;
    },
    reloadFn: function() {
        location.reload();
    },
    render: function() {
        return  (

                <div className="bui_media bui_vm bui_plr_12 bui_tc_white bui_bgc_pink">
                     <div className="bui_media_l">
                        <p dangerouslySetInnerHTML={{__html:this.props.headerL}}></p>
                    </div>
                   
                    <div className="bui_media_b">
                        <p className="bui_ta_c">{this.props.headerTitle}</p>
                    </div>

                    <div className="bui_media_r">
                        <p dangerouslySetInnerHTML={{__html:this.props.headerR}}></p>
                    </div>
                </div>
            
        )   
    }
});
export default Header;

