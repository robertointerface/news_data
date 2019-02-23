import React from 'react';
import PropTypes from 'prop-types'

const PrimaryButton = ({message='', onClick=f=>f}) => {
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



const PaginationButton = ({page=0, onClick=f=>f}) => {
    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => onClick(e, page)}>
            {page}
        </button>
    )
}

export {PaginationButton, PrimaryButton}