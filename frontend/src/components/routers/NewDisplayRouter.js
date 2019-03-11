import React from 'react';
import { Route } from 'react-router-dom'
import NewsListDisplayContainer from "root/components/new_display/NewsListDisplayContainer";
import NewDetailContainer from "root/components/new_display/NewDetailContainer";
import PublicUserContainer from 'components/user_display/userDisplayContainer'
import userSubscriptionContainer from 'components/user_display/userSubscriptionContainer'

const NewDisplayRouter = ({match}) =>
    <section>
        <Route path='/display/hot' component={NewsListDisplayContainer}/>
        <Route path='/display/new/:id' component={NewDetailContainer}/>
        <Route path='/display/user/:username' component={PublicUserContainer}/>
        <Route path='/display/subscriptions' component={userSubscriptionContainer}/>
    </section>

export default NewDisplayRouter