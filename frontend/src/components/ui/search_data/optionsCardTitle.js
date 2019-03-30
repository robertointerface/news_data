import React from 'react'
import PropTypes from 'prop-types';
const OptionsCardTitle = ({title='Options'}) => {
    return (
        <p>{title}</p>
    )
}

OptionsCardTitle.propTypes = {
    title: PropTypes.string
}
export default OptionsCardTitle
