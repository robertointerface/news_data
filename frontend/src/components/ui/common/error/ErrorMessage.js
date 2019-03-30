import React from 'react';
import PropTypes from 'prop-types';
const ErrorMessage = ({message=''}) =>{
    return(
        <div className="alert alert-danger" role="alert">
            <strong>Opps</strong> {message}
        </div>
    )
}


ErrorMessage.propTypes = {
    message: PropTypes.string,
}
export default ErrorMessage