import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../main/PageTemplate'
import { Route } from 'react-router-dom'
import Login from './Login'
import VerifyToken from './VerifyToken'

const Accounts = ({ match }) =>
    <PageTemplate>
        <section>
            <Route path='/accounts/login' component={Login}/>
            <Route exact path='/accounts/verifytoken/:token' component={VerifyToken}/>
        </section>
    </PageTemplate>

export default Accounts