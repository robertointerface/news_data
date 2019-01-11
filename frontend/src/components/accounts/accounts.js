import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../main/PageTemplate'
import { Route } from 'react-router-dom'
import Login from './Login'
import VerifyToken from './VerifyToken'
import {VerifyTokenFormContainer} from '../../containers/containers'

const Accounts = ({ match }) =>
    <PageTemplate>
        <section>
            <Route path='/accounts/login' component={Login}/>
            <Route exact path='/accounts/verifytoken/:token' component={VerifyTokenFormContainer}/>
        </section>
    </PageTemplate>

export default Accounts