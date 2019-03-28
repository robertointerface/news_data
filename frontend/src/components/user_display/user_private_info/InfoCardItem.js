import React from 'react'
import {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCardItem = ({fontIcon, text=''}) => {

    return (
        <div className='col-12 col-md-6'>
            <span className='MB05'><FontAwesomeIcon className='iconSize' icon={fontIcon}/> {text}</span>
        </div>
    )
}

export default InfoCardItem