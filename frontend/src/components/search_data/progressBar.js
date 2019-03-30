import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
const Progress = ( progressNumber=50) => {
    const progressLabel = Object.values(progressNumber)
    return(
        <ProgressBar className='MT05' bsStyle="success" now={progressLabel} label={`${progressLabel}%`}/>
    )
}

Progress.propTypes = {
    progressNumber: PropTypes.number
}
export default Progress

