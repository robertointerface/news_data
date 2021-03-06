import React from 'react';
import PropTypes from "prop-types";

const CardCol4 = ({title='form', children}) => {
    return (
        <div className='col-6'>
            <div className='card'>
                <div className='card-header'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}

CardCol4.propTypes = {
    title: PropTypes.string
}

export default CardCol4