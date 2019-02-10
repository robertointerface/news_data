import React from 'react';
import { Route } from 'react-router-dom'
import NewDisplayBlock from "root/components/new_display/NewDisplayBlock";

const NewDisplay = ({match}) =>
    <section>
        <Route path='/hot' component={NewDisplayBlock}/>
    </section>

export default NewDisplay