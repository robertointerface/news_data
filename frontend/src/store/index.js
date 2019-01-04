import React from 'react';
import {
    createStore,
    combineReducers,
    applyMiddleware } from 'redux'
import {
    User_management,
    Current_search,
    Create_new,
    Results_management} from './reducers'
import {
    userData,
    initialStateCurrentSearch,
    createNewForm,
    results} from './initialData'
import thunkMiddleware from 'redux-thunk';
import ReduxPromise from "redux-promise";
import promiseMiddleware from 'redux-promise';
export const store =
    applyMiddleware(thunkMiddleware, ReduxPromise)(createStore)(
    combineReducers({Current_search: Current_search, User_management: User_management,
                    Create_new: Create_new, Results_management: Results_management }),
                    {Current_search: initialStateCurrentSearch, User_management: userData,
                    Create_new: createNewForm, Results_management: results },
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

