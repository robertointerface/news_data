import React from 'react';

const ErrorMessage = ({message=''}) =>{
    return(
        <div className="alert alert-danger" role="alert">
            <strong>Opps</strong> {message}
        </div>
    )
}

export default ErrorMessage