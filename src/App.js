import React from 'react';
import * as views from './views'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Either, prop } from './utils';

const mapObject = (obj, funk) => Object.keys(obj).map((key, index) => funk(obj[key], index))

const paths = {
    login: '/login'
}

const getPath = (key) => Either(prop(key)(paths)).Or('')

const createRoute = (view, key) => <Route key exact path={getPath(view.getName())} component={view} />

const App = (props) =>
    <Router>
        <Switch>
            {mapObject(views, createRoute)}
            <Route render={() => <div>Fallback</div>} />
        </Switch>
    </Router>


export default App;