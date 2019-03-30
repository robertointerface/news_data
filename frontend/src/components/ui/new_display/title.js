import React from 'react';
import {history} from 'root/App.js';
import PropTypes from 'prop-types';

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
                <a href={'#'} onClick={(e) => {
                    e.preventDefault();
                    history.push(`/display/user/${author}`) }
                }>
                    <p className='ColorW'>By: {author}</p>
                </a>
            </div>
            <div className='col-6'>
                <p className='ColorW float-right'>{date}</p>
            </div>
        </div>
    )
}

NewTitle.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    author: PropTypes.string,
    date: PropTypes.string
}

export default NewTitle