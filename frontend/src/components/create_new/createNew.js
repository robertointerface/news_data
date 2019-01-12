import React from 'react';
import PageTemplate from '../main/PageTemplate'
import { Route } from 'react-router-dom'
import CreateLongNewBlock  from 'root/components/create_new/create_long_new/createLongNewBlock'

const CreateNew = ({ match }) =>
        <section>
            <Route path='/publish/longnew/:username' component={CreateLongNewBlock}/>
        </section>
export default CreateNew