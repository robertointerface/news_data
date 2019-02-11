import React from 'react';
import PropTypes from "prop-types";

const CardCol12 = ({Component, headerClass='', children}) => {
    return (
        <div className='col-12'>
            <div className='card'>
                <div className={`card-header ${headerClass}`} >
                    {Component}
                </div>
                    {children}
            </div>
        </div>
    )
}



export default CardCol12