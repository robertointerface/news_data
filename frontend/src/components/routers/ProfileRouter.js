import React from 'react';
import { Route } from 'react-router-dom'
import ProfileUserData from 'components/profile/userData'
import {EditUserContainer} from 'containers/containers'
import ChangePassword from "root/components/profile/changePassword";
import PrivateUserContainer from 'components/user_display/user_private_info/userPrivateProfile'

const ProfileRouter = ({ match }) =>
        <section>
            <Route path='/profile/data/:username' component={ProfileUserData}/>
            <Route path='/profile/edit/:username' component={EditUserContainer}/>
            <Route path='/profile/changepassword' component={ChangePassword}/>
            <Route path='/profile/yourprofile/:username' component={PrivateUserContainer}/>

        </section>
export default ProfileRouter