import React from 'react';
import { Route } from 'react-router-dom'
import ProfileUserData from 'components/profile/userData'
import {EditUserContainer} from 'containers/containers'
import ChangePassword from "root/components/profile/changePassword";

const ProfileRouter = ({ match }) =>
        <section>
            <Route path='/profile/data/:username' component={ProfileUserData}/>
            <Route path='/profile/edit/:username' component={EditUserContainer}/>
            <Route path='/profile/changepassword' component={ChangePassword}/>
        </section>
export default ProfileRouter