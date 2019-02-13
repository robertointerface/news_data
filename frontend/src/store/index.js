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
    /*
        @Func: Check if a user logged in previously (user data is saved on localStorage),
        if user logged in previously, the User_management state will be populated with the corresponding user data and
        the JWT (Json Web Token) will be refreshed if possible, if JWT already expired and can not be
        verified it will be deleted from localStorage and user will be forced to logged in again.

     */
    var userObject = {...userData};
    var userSaved = JSON.parse(localStorage.getItem('user'));
    if(userSaved){
        userObject['username'] = userSaved['username'];
        userObject['email'] = userSaved['email'];
        userObject['logged_in'] = true;

        handle_refresh_token()
        .then(token => {
            localStorage.setItem('token', token)
        })
        .catch(error => {
            console.log('error: ' + error)
            localStorage.clear();
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

