// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Login from './components/Login';


const AppRoutes = () =>
<App>
    <Switch>
        <Route component={Login} />
    </Switch>
</App>
export default AppRoutes;
