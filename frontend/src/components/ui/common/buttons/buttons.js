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



const PaginationButton = ({page=0, message='', onClick=f=>f, active=false}) => {
    return (
        <button
            type="button"
            className={'btn' + (active? ' btn-warning': ' btn-primary')}
            onClick={(e) => onClick(e, page)}>
            {(message.length > 0) ?
                <p className='MB0'>{message}</p> :
                <p className='MB0'>{page}</p>
            }
        </button>
    )
}

export {PaginationButton, PrimaryButton}