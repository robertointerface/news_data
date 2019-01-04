import React from 'react'
import PropTypes from 'prop-types'

export const RequestButton = ({active=true, onClick=f=>f}) => {
    return (
        <button
            type="button"
            className="btn btn-primary"
            disabled={active}
            onClick={onClick}>
            Request data
        </button>
    )
}

RequestButton.propTypes = {
    active: PropTypes.bool
}
