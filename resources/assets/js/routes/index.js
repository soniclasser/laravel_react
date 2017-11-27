// import libs
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// import components
import routes from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'
import Page404 from '../pages/page404'


const history = createBrowserHistory()


const Routes = () => (
    <Router hisotry={history}>
        <Switch>
            {routes.map((route, i) => {
                if (route.auth) {
                    return <PrivateRoute key={i} {...route} />
                }
                return <PublicRoute key={i} {...route} />
            })}
            <Route component={Page404} />
        </Switch>
  </Router>
)

export default Routes
