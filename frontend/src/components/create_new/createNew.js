import React from 'react';
import PageTemplate from '../main/PageTemplate'
import { Route } from 'react-router-dom'
//import CreateLongNew from './createLongNew'
import {CreateLongNewContainer}  from '../../containers/createNewContainers'

const CreateNew = ({ match }) =>
        <section>
            <Route path='/publish/longnew/:username' component={CreateLongNewContainer}/>
        </section>
export default CreateNew