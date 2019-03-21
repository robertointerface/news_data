import React from 'react';
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFire,
    faUser,
    faUserEdit,
    faTable,
    faList,
    faSearch,
    faPencilAlt,
    faPhone,
    faUsers
} from '@fortawesome/free-solid-svg-icons'

const LogOutNav = (user_id = 0) => {

    return (
        <ul className='nav navbar-nav mr-auto NavText'>
            <li>
                <NavLink className='NavItem' to='/display/hot'>
                    <FontAwesomeIcon className='iconSize' icon={faFire}/> Hot Blog
                </NavLink>
            </li>
            <li>
                <NavLink className='NavItem' to='/search'>
                    <FontAwesomeIcon className='iconSize' icon={faSearch}/> Search data
                </NavLink>
            </li>
            <li>
                <NavLink className='NavItem' to="/">
                    <FontAwesomeIcon className='iconSize' icon={faUsers}/> About Us
                </NavLink>
            </li>
            <li>
                <NavLink className='NavItem' to='/'>
                    <FontAwesomeIcon className='iconSize' icon={faPhone}/> Contact Us
                </NavLink>
            </li>
        </ul>
    )
}
export default LogOutNav