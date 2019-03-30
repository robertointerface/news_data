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
            <nav className='navbar navbar-expand-md navbar-toggleable-md fixed-top navbar-dark bg-primary'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#MainNavBar"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='MainNavBar'>
                    {(loggedIn) ?
                        <LogInNav username={username}/>:
                        <LogOutNav/>
                    }
                    <ul className="nav navbar-nav navbar-right NavText" id="rightHeaderNav">
                       <li>
                        {(loggedIn) ?
                            <NavLink className='NavItem' to='#' onClick={(e) => log_out(e)}>
                                <FontAwesomeIcon icon={faSignOutAlt}/> Logout
                            </NavLink> :
                            <NavLink className='NavItem' to='/accounts/login/'>
                                <FontAwesomeIcon icon={faSignInAlt}/> Log in
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
    loggedIn: PropTypes.bool,
    token: PropTypes.string,
    log_out: PropTypes.func,
    flashMessage: PropTypes.string,
    username: PropTypes.string
}

export default MainMenu
