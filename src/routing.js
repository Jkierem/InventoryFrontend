import React from 'react';
import { Route } from 'react-router'
import { Either } from './utils';

const paths = {
    login: {
        visible: true,
        path: "/login",
        rendered: true,
    },
    admin: {
        visible: false,
        path: "/admin",
        rendered: true,
    },
    waiter: {
        visible: false,
        path: "/campo",
        rendered: true,
    },
    kitchen: {
        visible: false,
        path: "/produccion",
        rendered: true,
    }
}

const getPath = (key) => Either(paths[key]).Or('/')

export const createRoute = (props, logged = false) => (View, key) => {
    const viewInfo = getPath(View.getName());
    const { visible, path, rendered } = viewInfo;
    if (visible || logged) {
        if (rendered) {
            return <Route key={key} exact path={path} render={() => <View {...props} />} />
        } else {
            return <Route key={key} exact path={path} component={View} />
        }
    }
}