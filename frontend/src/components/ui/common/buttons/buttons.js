import React from 'react';
import PropTypes from 'prop-types'

const PrimaryButton = ({message='', extraClass='', onClick=f=>f}) => {
    return (
        <button
            type="button"
            className={"btn btn-primary " + extraClass}
            onClick={onClick}>
            {message}
        </button>
    )
}

PrimaryButton.propTypes = {
    message: PropTypes.string,
    onClick: PropTypes.func
}

const PrimaryButtonDis = ({message='', extraClass=''}) =>{
    return (
        <button
            type="button"
            className={"btn btn-primary " + extraClass}
            disabled={'true'}>
            {message}
        </button>
    )
}

const PaginationButton = ({page=0, message='', onClick=f=>f, active=false}) => {
    return (
        <button
            type="button"
            className={'btn PagButton' + (active? ' btn-warning': ' btn-primary')}
            onClick={(e) => onClick(e, page)}>
            {(message.length > 0) ?
                <p className='MB0 ButtonFont'>{message}</p> :
                <p className='MB0 ButtonFont'>{page}</p>
            }
        </button>
    )
}


PaginationButton.propTypes = {
    page: PropTypes.number,
    message: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
}

export {PaginationButton, PrimaryButton, PrimaryButtonDis}