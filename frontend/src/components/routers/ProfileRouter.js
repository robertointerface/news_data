import React from 'react';
import { Route } from 'react-router-dom'


const ProfileRouter = ({ match }) =>
        <section>
            <Route path='/profile/data' component={CreateLongNewBlock}/>
        </section>
export default ProfileRouter