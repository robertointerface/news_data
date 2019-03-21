import React from 'react';
import PropTypes from "prop-types";

const FlexCard = ({title='form', class_name='', children}) => {
    return (
        <div className={class_name}>
            <div className='card'>
                <div className='card-header bg-primary ColorW'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}

FlexCard.propTypes = {
    title: PropTypes.string,
    class_name: PropTypes.string
}

export default FlexCard