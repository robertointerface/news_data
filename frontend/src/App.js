import React from 'react';
import './App.css'
import {About} from "./components/main/About";
import {Home} from "./components/main/Home";
import Login from './components/accounts/Login'
import CreateLongNew from './components/create_new/createLongNew'
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


const App = () => {
    return (
         <Router history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path='/publish' component={CreateLongNew}/>
            </div>
       </Router>
    )
}


export default App