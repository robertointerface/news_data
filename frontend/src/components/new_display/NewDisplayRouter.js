import React from 'react';
import { Route } from 'react-router-dom'
import NewDisplayBlock from "root/components/new_display/NewDisplayBlock";
import {getNewsToDisplay} from 'functions/Display_news/displayNewsFunctions'
const NewDisplayRouter = ({match}) =>
    <section>
        <Route path='/hot' component={NewDisplayBlock}/>
    </section>

export default NewDisplayRouter