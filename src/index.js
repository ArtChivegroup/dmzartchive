import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Download from './views/download'
import Home from './views/home'
import AboutMe from './views/about-me'
import Beats from './views/beats'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Download} exact path="/download" />
        <Route component={Home} exact path="/" />
        <Route component={AboutMe} exact path="/about-me" />
        <Route component={Beats} exact path="/beats" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
