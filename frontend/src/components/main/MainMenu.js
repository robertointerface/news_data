import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import LogInNav from './LogInNav'
import LogOutNav from './LogOutNav'
import { FlashContainer } from 'containers/containers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSignInAlt,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

const MainMenu = ({loggedIn = false, token = '', log_out=f=>f, flashMessage='', username=''}) => {
        return (
        <div>
            <nav className='navbar navbar-expand-sm navbar-toggleable-sm fixed-top navbar-dark bg-primary'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#MainNavBar"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='MainNavBar'>
                    {(loggedIn) ?
                        <LogInNav username={username}/>:
                        <LogOutNav/>
                    }
                    <ul className="navbar-nav navbar-right NavText" id="rightHeaderNav">
                       <li>
                        {(loggedIn) ?
                            <NavLink to='#' onClick={(e) => log_out(e)}>
                                <FontAwesomeIcon className='F12' icon={faSignOutAlt}/> Logout
                            </NavLink> :
                            <NavLink to='/accounts/login/'>
                                <FontAwesomeIcon className='F12' icon={faSignInAlt}/> Log in
                            </NavLink>
                        }
                       </li>
                    </ul>
                </div>

            </nav>
             {(flashMessage) ?
                 <FlashContainer/> : null
             }
        </div>
        )
}

MainMenu.propTypes = {
    loggedIn: PropTypes.bool
}

export default MainMenu
