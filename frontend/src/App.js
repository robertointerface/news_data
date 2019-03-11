import React from 'react';
import './App.css'
import {About} from "components/main/About";
import {Home} from "components/main/Home";
import Login from 'components/accounts/Login'
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

import Accounts from "components/routers/accounts";
import CreateNew from "components/routers/createNew"
import NewDisplayRouter from 'components/routers/NewDisplayRouter'
import ProfileRouter from 'components/routers/ProfileRouter'

const App = () => {
    return (
         <Router history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/display" component={NewDisplayRouter}/>
                <Route path="/about" component={About}/>
                <Route path="/accounts" component={Accounts}/>
                <Route path='/publish' component={CreateNew}/>
                <Route path='/profile' component={ProfileRouter}/>
            </div>
         </Router>
    )
}


export default App