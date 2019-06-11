import React from 'react';
import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import * as views from './views'
import { Either } from './utils';

const mapObject = (obj, funk) => Object.keys(obj).map((key, index) => funk(obj[key], index))

const paths = {
    login: '/login',
    admin: '/admin',
    waiter: '/waiter'
}

const getPath = (key) => Either(paths[key]).Or('/')

const createRoute = (view, key) => {
    return <Route key={key} exact path={getPath(view.getName())} component={view} />
}

const App = (props) =>
    <Router>
        <Switch>
            {mapObject(views, createRoute)}
            <Route render={() => <Redirect to="/login" />} />
        </Switch>
    </Router>


export default App;