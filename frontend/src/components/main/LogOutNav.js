import React from 'react';
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'


const LogOutNav = (user_id = 0) => {

    return (
        <ul className='navbar-nav NavText'>
            <li>
                <NavLink className='witheFont' to='/'>
                    Hot Blog
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                    Search data
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