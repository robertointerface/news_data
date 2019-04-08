import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
const InfoCardItem = ({fontIcon, text=''}) => {

    return (
        <div className='col-12 col-md-6 PT1 PL1'>
            <div className='text-center '>
                <span className='MB05 MT1 userInfo'><FontAwesomeIcon className='iconSize colorBlue' icon={fontIcon}/> {text}</span>
            </div>
        </div>
    )
}

InfoCardItem.PropTypes = {
    text: PropTypes.string,
}
export default InfoCardItem