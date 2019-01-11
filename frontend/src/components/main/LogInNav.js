import React from 'react';
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'


const LogInNav = (user_id = 0) => {
    return (
        <ul className='nav navbar-nav NavText'>
            <li>
                <NavLink to='/'>
                    Hot
                </NavLink>
            </li>
            <li>
                <NavLink to='/subscription'>
                    Subscription
                </NavLink>
            </li>
            <li>
                <NavLink to='/searchdata'>
                    Search data
                </NavLink>
            </li>
            <li>
                <NavLink to="/publish/:user_id">
                    publish
                </NavLink>
            </li>
            <li>
                <NavLink to='/yourprofile/:user_id'>
                    your profile
                </NavLink>
            </li>
        </ul>
    )
}
export default LogInNav