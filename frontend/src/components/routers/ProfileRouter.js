import React from 'react';
import { Route } from 'react-router-dom'
import ProfileUserData from 'components/profile/userData'
import EditUser from 'components/profile/EditUser'

const ProfileRouter = ({ match }) =>
        <section>
            <Route path='/profile/data/:username' component={ProfileUserData}/>
            <Route path='/profile/edit/:username' component={EditUser}/>
        </section>
export default ProfileRouter