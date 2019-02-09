
import React from 'react';

const MessageDisplay = ({message='', type}) => {
    var typeClass = "alert " + type
    return(
        <div>
            {(message) ?
                <div className={typeClass} role="alert">
                    {message}
                </div> : null
            }
        </div>
    )
}

export default MessageDisplay