import React from 'react';
import { Route } from 'react-router-dom'
import ProfileUserData from 'components/profile/userData'
import {EditUserContainer} from 'containers/containers'

const ProfileRouter = ({ match }) =>
        <section>
            <Route path='/profile/data/:username' component={ProfileUserData}/>
            <Route path='/profile/edit/:username' component={EditUserContainer}/>
        </section>
export default ProfileRouter