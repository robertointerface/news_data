import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDotCircle} from "@fortawesome/free-solid-svg-icons/index";
import PropTypes from 'prop-types';
const Headline = ({text=''}) => {
    return(
        <li>
            <FontAwesomeIcon  className='colorBlue ML05' icon={faDotCircle}/>
            <span className='BulletPoints ML05'>{text}</span>
        </li>
    )
}

Headline.propTypes = {
    text: PropTypes.string
}
export default Headline