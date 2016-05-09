import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'


import App from '../component/app.js'
import Mall from '../component/routers/mall/mall.js'
import Circle from '../component/routers/circle/circle.js'
import CircleType from '../component/routers/circle/circleType.js'
import My from '../component/routers/my/my.js'
import MyNav from '../component/routers/my/myNav.js'
import MyUserCenter from '../component/routers/my/userCenter.js'
import MemberClub from '../component/routers/my/memberClub.js'
import Index from '../component/routers/index/index.js'
import Type from '../component/routers/index/type.js'
import CircleTip from '../component/routers/circle/circleTip.js'
import CircleSay from '../component/routers/circle/circleSay.js'

const history = useBasename(createHistory)({
  basename: '/React-Router'
});

{/**  {this.props.children}   非常重要**/}
{/** 思考：首页也有其他分路由，怎么配**/ }
render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />

      <Route path="/type/:typeName" component={Type} />

      <Route path="/mall" component={Mall}>
          <Route path="type/:typeName" component={Type} />
      </Route>

      <Route path="/my" component={My}>
          <IndexRoute component={MyNav} />
           <Route path="userCenter" component={MyUserCenter} />
           <Route path="memberClub" component={MemberClub} />
      </Route>

      <Route path="/circle" component={Circle}>
          <IndexRoute component={CircleType} />
          <Route path="tip/:tipName" component={CircleTip} />
          <Route path="say" component={CircleSay} />
      </Route>

    </Route>
  </Router>
), document.getElementById('index'))

