import React from 'react';
import PropTypes from "prop-types";

const CardCol12 = ({Component, cardClass='', headerClass='', children}) => {
    return (
        <div className='col-12'>
            <div className={`card ${cardClass}`}>
                <div className={`card-header ${headerClass}`} >
                    {Component}
                </div>
                    {children}
            </div>
        </div>
    )
}



export default CardCol12