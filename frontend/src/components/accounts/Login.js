import React from 'react';
import PropTypes from 'prop-types';
import { SignUpContainer, LogInContainer} from 'containers/containers'
const Login = () => {
     return (

            <div className='row'>
                <div className='col-12'>
                    <ul className="nav nav-tabs" id='logInTab'>
                        <li className="nav-item">
                            <a className='nav-link active' data-toggle="tab" href="#LogIn" role="tab" aria-controls="home" aria-selected="true">
                                Log in
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className='nav-link' data-toggle="tab" href="#SignUp" role="tab" aria-controls="home" aria-selected="false">
                                Sign In
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id ='LogIn' role="tabpanel" aria-labelledby="home-tab">
                            <LogInContainer/>
                        </div>
                        <div className="tab-pane fade" id='SignUp' role="tabpanel" aria-labelledby="home-tab">
                            <SignUpContainer/>
                        </div>
                    </div>
                </div>
            </div>
         
        )
}

Login.propTypes = {
    title: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default Login
