import React from 'react';
import './App.css'
import {About} from "./components/main/About";
import {Home} from "./components/main/Home";
import Login from './components/accounts/Login'
import CreateLongNew from './components/create_new/create_long_new/createLongNewBlock'
import createBrowserHistory from 'history/createBrowserHistory'
export const history = createBrowserHistory()
import { Router } from 'react-router'



import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom'

import Accounts from "./components/accounts/accounts";
import CreateNew from "./components/create_new/createNew"

const App = () => {
    return (
         <Router history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/accounts" component={Accounts}/>
                <Route path='/publish' component={CreateNew}/>
            </div>
       </Router>
    )
}


export default App