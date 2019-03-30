import React from 'react';
import PropTypes from 'prop-types';
const MessageDisplay = ({message='', type=''}) => {
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

MessageDisplay.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
}
export default MessageDisplay