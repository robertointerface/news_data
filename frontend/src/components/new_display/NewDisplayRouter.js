import React from 'react';
import { Route } from 'react-router-dom'
import NewsDisplayBlock from "root/components/new_display/NewsDisplayBlock";
import NewDetail from "root/components/new_display/NewDetail";
const NewDisplayRouter = ({match}) =>
    <section>
        <Route path='/display/hot' component={NewsDisplayBlock}/>
        <Route path='/display/new/:id' component={NewDetail}/>
    </section>

export default NewDisplayRouter