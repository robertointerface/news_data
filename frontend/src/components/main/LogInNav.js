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
        <ul className='navbar-nav mr-auto NavText'>
            <li>
                <NavLink to='/display/hot'>
                    <FontAwesomeIcon className='F12' icon={faFire}/> Hot
                </NavLink>
            </li>
            <li>
                <NavLink to='/display/subscriptions'>
                    <FontAwesomeIcon className='F12' icon={faList}/> Subscription
                </NavLink>
            </li>
            <li>
                <NavLink to='/searchdata'>
                    <FontAwesomeIcon className='F12' icon={faSearch}/> Search data
                </NavLink>
            </li>
            <li>
                <NavLink to={`/publish/longnew/${username}`}>
                    <FontAwesomeIcon className='F12' icon={faPencilAlt}/>  publish
                </NavLink>
            </li>
            <li class="dropdown">
                <a className="dropdown-toggle NavItem" data-toggle="dropdown" href="#">
                    <FontAwesomeIcon className='F12' icon={faUser}/>
                    profile<span className="caret"></span>
                </a>
                <ul className="dropdown-menu ProfileOptions">
                    <li>
                        <NavLink to='/yourprofile/:user_id'>
                            <FontAwesomeIcon className='F12' icon={faUser}/> your profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/yourprofile/:user_id'>
                            <FontAwesomeIcon className='F12' icon={faTable}/>your data
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/yourprofile/:user_id'>
                            <FontAwesomeIcon className='F12' icon={faList}/>your publications
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/yourprofile/:user_id'>
                            <FontAwesomeIcon className='F12' icon={faUserEdit}/>edit profile
                        </NavLink>
                    </li>
                </ul>

            </li>
        </ul>
    )
}
export default LogInNav