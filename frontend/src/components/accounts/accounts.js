import React from 'react';
import PageTemplate from '../main/PageTemplate'
import { Route } from 'react-router-dom'
import Login from './Login'
import {VerifyTokenFormContainer} from '../../containers/containers'

const Accounts = ({ match }) =>
    <PageTemplate>
        <section>
            <Route path='/accounts/login' component={Login}/>
            <Route exact path='/accounts/verifytoken/:token' component={VerifyTokenFormContainer}/>
        </section>
    </PageTemplate>

export default Accounts