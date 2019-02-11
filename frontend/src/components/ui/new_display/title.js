import React from 'react';
import {history} from 'root/App.js';
const NewTitle = ({title='', id=0}) => {
    return(
        <div>
            {(id > 0) ?
                <a href={'#'} onClick={(e) => {
                    e.preventDefault()
                    history.push(`/display/new/${id}`)}
                }>
                    {title}
                </a>
                :
                <p>{title}</p>
            }
        </div>
    )
}

export default NewTitle