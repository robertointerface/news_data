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
    appStatus} from './initialData'
import thunkMiddleware from 'redux-thunk';
import ReduxPromise from "redux-promise";
import promiseMiddleware from 'redux-promise';
import {reducer as formReducer} from 'redux-form'
const initializeUserManagement = () => {

    var userObject = {...userData};
    var userSaved = JSON.parse(localStorage.getItem('user'));
    if(userSaved){
        userObject['username'] = userSaved['username'];
        userObject['email'] = userSaved['email'];
        userObject['logged_in'] = true;
    }
    return userObject
}

export const store =
    applyMiddleware(thunkMiddleware, ReduxPromise)(createStore)(
    combineReducers({
        Current_search: Current_search, User_management: User_management,
        Create_new: Create_new, Results_management: Results_management,
        App_status: App_status, form: formReducer}),
        {Current_search: initialStateCurrentSearch, User_management: initializeUserManagement(),
         Create_new: createNewForm, Results_management: results, App_status: appStatus},
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

