import React, { useReducer } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router'
import * as views from './views'
import { mapObject, createPusher, createAction } from './utils'
import { createRoute } from './routing'
import { User } from './middleware';

const LOGIN = 'LOGIN'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'
const LOGOUT = 'LOGOUT'
const RESET = 'RESET'

const initalState = {
    login: false,
    pending: false,
    error: undefined,
    user: undefined,
}

const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: false,
                pending: true,
                error: undefined,
            }
        case LOGOUT:
            return {
                ...state,
                login: false,
                pending: false,
                user: undefined,
                error: undefined,
            }
        case SUCCESS:
            return {
                ...state,
                login: true,
                pending: false,
                user: action.payload,
                error: undefined,
            }
        case ERROR:
            return {
                ...state,
                login: false,
                pending: false,
                error: action.payload,
                user: undefined
            }
        case RESET:
            return {
                ...state,
                error: undefined,
            }
        default:
            return state;
    }
}

const App = (props) => {

    const [state, dispatch] = useReducer(reducer, initalState)

    const attemptLogin = createAction(LOGIN, dispatch);
    const loginSuccess = createAction(SUCCESS, dispatch);
    const loginError = createAction(ERROR, dispatch);
    const attemptLogout = createAction(LOGOUT, dispatch);
    const resetError = createAction(RESET, dispatch);

    const pushTo = createPusher(props)

    const childProps = {
        login: async (data) => {
            attemptLogin()
            try {
                const user = await User.login(data);
                loginSuccess(user);
                pushTo(user.type.toLowerCase())
            } catch (e) {
                loginError(e);
            }
        },
        logout: () => {
            attemptLogout();
            pushTo('login')
        },
        resetError,
        get error() { return state.error; }, //expose error state
    }

    return <Switch>
        {mapObject(views, createRoute(childProps, state.login))}
        <Route render={() => <Redirect to="/login" />} />
    </Switch>
}


export default withRouter(App);