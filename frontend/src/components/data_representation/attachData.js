import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../ui/common/buttons/buttons'

export const AttachDataRequest = ({onClick=f=>f}) => {
    return (
      <PrimaryButton message={'attach data'} onClick={onClick}/>
    )
}
