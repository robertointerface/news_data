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
    faPencilAlt
} from '@fortawesome/free-solid-svg-icons'

const LogOutNav = (user_id = 0) => {

    return (
        <ul className='navbar-nav mr-auto NavText'>
            <li>
                <NavLink className='witheFont' to='/display/hot'>
                    <FontAwesomeIcon className='F12' icon={faFire}/> Hot Blog
                </NavLink>
            </li>
            <li>
                <NavLink to='/search'>
                    <FontAwesomeIcon className='F12' icon={faSearch}/> Search data
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                    Contact Us
                </NavLink>
            </li>
        </ul>
    )
}
export default LogOutNav