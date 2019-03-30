import React from 'react'
import PropTypes from 'prop-types';

const Title = ({title=''}) => {
    return (
        <span className='F16 bold ColorW'>{title}</span>
    )
}

Title.propTypes = {
    title: PropTypes.string,
}

export default Title