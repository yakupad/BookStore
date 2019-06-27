import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import LazyLoading from 'common/components/LazyLoading'

import styles from '../style/index.css'

// This is show case how you can lazy loading component
const HomeRouteHandler = LazyLoading(() => import('views/home'))
const Header = LazyLoading(() => import('common/components/Header/Header'))

// Please remove that, it is an example
const JustAnotherPage = () => (
  <div>
    <h2>This is Just Another Page</h2>
    <p>
      Please remove this from your route, it is just to show case basic setup
      for router.
    </p>
  </div>
)

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <hr />
    <div className={styles.content}>
      <Switch>
        <Route path="/page" component={JustAnotherPage} />
        <Route exact path="/" component={HomeRouteHandler} />
        <Route path="*" component={HomeRouteHandler} />
        <Route path="/home" component={HomeRouteHandler} />
      </Switch>
    </div>
  </div>
)
