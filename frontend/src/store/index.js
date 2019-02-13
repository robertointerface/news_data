import React from 'react';
import {
    createStore,
    combineReducers,
    applyMiddleware } from 'redux'
import {
    App_status,
    User_management,
    Current_search,
    Create_new,
    Results_management} from './reducers'
import {
    userData,
    initialStateCurrentSearch,
    createNewForm,
    results,
    appStatus,
    newDisplay
} from './initialData'
import thunkMiddleware from 'redux-thunk';
import ReduxPromise from "redux-promise";
import promiseMiddleware from 'redux-promise';
import {reducer as formReducer} from 'redux-form'
import {handle_refresh_token} from 'functions/auth/LoginFunctions'
const initializeUserManagement = () => {

    var userObject = {...userData};
    var userSaved = JSON.parse(localStorage.getItem('user'));
    if(userSaved){
        handle_refresh_token()
            .then(token => {
                localStorage.setItem('token', token)
                userObject['username'] = userSaved['username'];
                userObject['email'] = userSaved['email'];
                userObject['logged_in'] = true;
                return userObject
            })
            .catch(error => {
                console.log('error: ' + error)
                localStorage.clear();
                return userObject
            })
    }
    return userObject
}

export const store =
    applyMiddleware(thunkMiddleware, ReduxPromise)(createStore)(
    combineReducers({
        Current_search: Current_search, User_management: User_management,
        Create_new: Create_new, Results_management: Results_management,
        App_status: App_status, New_display: newDisplay, form: formReducer}),
        {Current_search: initialStateCurrentSearch, User_management: initializeUserManagement(),
         Create_new: createNewForm, Results_management: results, App_status: appStatus},
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

