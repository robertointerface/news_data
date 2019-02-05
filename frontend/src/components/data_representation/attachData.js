import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from 'ui/common/buttons/buttons'

export const AttachDataRequest = ({onClick=f=>f, attached=false}) => {
    return (
        <div>
            <PrimaryButton message={'attach data'} onClick={onClick}/>
            {(attached) ?
                <p>attached</p> : null
            }
        </div>
    )
}
