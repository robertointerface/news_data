import React from 'react';
import {history} from 'root/App.js';
const NewTitle = ({title='', id=0}) => {
    return(
        <a href={'#'} onClick={(e) => {
            e.preventDefault()
            history.push(`/display/new/${id}`)}
        }>
            {title}
        </a>
    )
}

export default NewTitle