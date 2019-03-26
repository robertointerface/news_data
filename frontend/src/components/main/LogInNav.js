import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
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

const LogInNav = ({ username = '' }) => {
    return (
        <ul className='nav navbar-nav mr-auto NavText'>
            <li>
                <NavLink className='NavItem' to='/display/hot'>
                    <FontAwesomeIcon className='iconSize' icon={faFire}/> Hot
                </NavLink>
            </li>
            <li>
                <NavLink className='NavItem' to='/display/subscriptions'>
                    <FontAwesomeIcon className='iconSize' icon={faList}/> Subscription
                </NavLink>
            </li>
            <li>
                <NavLink className='NavItem' to='/search'>
                    <FontAwesomeIcon className='iconSize' icon={faSearch}/> Search data
                </NavLink>
            </li>
            <li>
                <NavLink className='NavItem' to={`/publish/longnew/${username}`}>
                    <FontAwesomeIcon className='iconSize' icon={faPencilAlt}/>  publish
                </NavLink>
            </li>
            <li className="dropdown">
                <a className="dropdown-toggle NavItem dropNav" data-toggle="dropdown" href="#">
                    <FontAwesomeIcon className='iconSize' icon={faUser}/> profile<span className="caret"></span>
                </a>
                <ul className="dropdown-menu bg-primary ProfileOptions">
                    <li>
                        <NavLink className='subNavItem ColorW' to='/yourprofile/:user_id'>
                            <FontAwesomeIcon className='iconSize' icon={faUser}/> your profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='subNavItem ColorW' to={`/profile/data/${username}`}>
                            <FontAwesomeIcon className='iconSize' icon={faTable}/> your data
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='subNavItem ColorW' to={`/profile/edit/${username}`}>
                            <FontAwesomeIcon className='iconSize' icon={faUserEdit}/> edit profile
                        </NavLink>
                    </li>
                </ul>

            </li>
        </ul>
    )
}
export default LogInNav