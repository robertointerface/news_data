import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import LogInNav from './LogInNav'
import LogOutNav from './LogOutNav'

const MainMenu = ({loggedIn = false, token = '', log_out=f=>f}) => {

        return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#MainNavBar"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='LeftNavBar'>
                {(token) ?
                    <LogInNav/>:
                    <LogOutNav/>
                }
                <ul className="nav navbar-right Font2Rem" id="rightHeaderNav">
                   <li>
                    {(token) ?
                        <NavLink to='#' onClick={(e) => log_out(e)}>
                            Logout
                        </NavLink> :
                        <NavLink to='/login'>
                            Log in
                        </NavLink>
                    }
                   </li>
                </ul>
            </div>
        </nav>
        )
}

MainMenu.propTypes = {
    loggedIn: PropTypes.bool
}

export default MainMenu
