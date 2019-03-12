import React from 'react';
import { Route } from 'react-router-dom'
import ProfileUserData from 'components/profile/userData'

const ProfileRouter = ({ match }) =>
        <section>
            <Route path='/profile/data/:username' component={ProfileUserData}/>
        </section>
export default ProfileRouter