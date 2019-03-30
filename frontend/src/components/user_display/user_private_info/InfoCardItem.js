import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
const InfoCardItem = ({fontIcon, text=''}) => {

    return (
        <div className='col-12 col-md-6'>
            <span className='MB05'><FontAwesomeIcon className='iconSize' icon={fontIcon}/> {text}</span>
        </div>
    )
}

InfoCardItem.PropTypes = {
    text: PropTypes.string,
}
export default InfoCardItem