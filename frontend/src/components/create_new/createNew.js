import React from 'react';
import PageTemplate from '../main/PageTemplate'
import { Route } from 'react-router-dom'
import CreateLongNew from './createLongNew'

const CreateNew = ({ match }) =>
        <section>
            <Route path='/publish/longnew/:username' component={CreateLongNew}/>
        </section>
export default CreateNew