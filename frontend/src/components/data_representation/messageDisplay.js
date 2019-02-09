
import React from 'react';

const MessageDisplay = ({message='', type='alert-info'}) =>{
    return(
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    )
}

export default MessageDisplay