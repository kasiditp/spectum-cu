import React from 'react'
import { Route, IndexRoute } from 'react-router'
// import App from './containers/App'
import HomePage from './pages/homepage'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import PageCircle from './pages/pageCircle'

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to 
// other React components.
// IndexRoute maps HomePage component to the default route
export default (
  <Route path="/"> 
    <IndexRoute component={HomePage} />
    <Route path="1" component={Page1} />
    <Route path="2" component={Page2} />
    <Route path="3" component={Page3} />
    <Route path="4" component={Page4} />
    <Route path="0" component={PageCircle} />
  </Route>
)