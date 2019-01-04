import React from 'react';
import PropTypes from 'prop-types'

export const PrimaryButton = ({message='', onClick=f=>f}) => {
    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={onClick}>
            {message}
        </button>
    )
}

PrimaryButton.propTypes = {
    message: PropTypes.string,
    onClick: PropTypes.func
}