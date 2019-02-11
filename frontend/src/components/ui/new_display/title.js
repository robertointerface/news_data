import React from 'react';

const NewTitle = ({title='', id=0}) => {
    return(
        <a href={'#'} >{title}</a>
    )
}

export default NewTitle