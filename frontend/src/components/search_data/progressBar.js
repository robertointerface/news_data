import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const Progress = ( progressNumber=50) => {
    const progressLabel = Object.values(progressNumber)
    return(
        <ProgressBar bsStyle="success" now={progressLabel} label={`${progressLabel}%`}/>
    )
}

export default Progress

