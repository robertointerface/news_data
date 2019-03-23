import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from 'ui/common/buttons/buttons'

export const AttachDataRequest = ({onClick=f=>f, attached=false}) => {
    return (
        <div>
            {(attached) ?
                <PrimaryButton message={'attached'} extraClass='ML05' onClick={f=>f}/> :
                <PrimaryButton message={'attach data'} extraClass='ML05' onClick={onClick}/>
            }
        </div>
    )
}
