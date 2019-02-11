import React from 'react';
import { Route } from 'react-router-dom'
import NewsListDisplayContainer from "root/components/new_display/NewsListDisplayContainer";
import NewDetailContainer from "root/components/new_display/NewDetailContainer";
const NewDisplayRouter = ({match}) =>
    <section>
        <Route path='/display/hot' component={NewsListDisplayContainer}/>
        <Route path='/display/new/:id' component={NewDetailContainer}/>
    </section>

export default NewDisplayRouter