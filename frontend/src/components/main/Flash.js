import React from 'react';

const FlashMessage = ({ type='MESSAGE', message='' }) => {

    return (
        <p className={type}>message</p>
    )
}

export default FlashMessage