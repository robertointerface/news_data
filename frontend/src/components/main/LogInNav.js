import React from 'react';
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LogInNav = ({ username = '' }) => {
    return (
        <ul className='nav navbar-nav NavText'>
            <li>
                <NavLink to='/hot'>
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
                <NavLink to={`/publish/longnew/${username}`}>
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