import React from 'react';
import {history} from 'root/App.js';
const NewTitle = ({title='', id=0, author='', date=''}) => {
    return(
        <div className='row'>
            <div className='col-12'>
                {(id > 0) ?
                    <a href={'#'} onClick={(e) => {
                        e.preventDefault()
                        history.push(`/display/new/${id}`)}
                    }>
                        <p className='newTitle ColorW MB0'>{title}</p>
                    </a>
                    :
                    <p className='newTitle ColorW MB0'>{title}</p>
                }
            </div>
            <div className='col-6'>
                <p className='ColorW'>{author}</p>
            </div>
            <div className='col-6'>
                <p className='ColorW'>{date}</p>
            </div>
        </div>
    )
}

export default NewTitle