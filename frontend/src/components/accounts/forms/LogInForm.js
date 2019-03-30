import React from 'react';
import PropTypes from 'prop-types';
import FlexCard from 'ui/common/cards/FlexCard'


import {GoogleLogin} from 'react-google-login';
import {getCookie} from "../../../store/functions/auth/Cookies"
import {history} from "../../../App";
import {logged_in} from "../../../actions/actions";
import {PrimaryButton} from 'ui/common/buttons/buttons'

/**
 * Login form
 * @param
 *  title - Title of the form
 *  onChange - (function) handle on change on any of the forms
 *  onSubmit - (function) on submit procedure of the form
 *  username - (string) username written in the form
 *  password - (password) written in the form
 *  error - (string) errors returned by backend servers.
 *  authSocial - auth social function (sign in with social google or facebook)
 * @returns
 *  - Form
 *
 */
const LoginForm = ({title='Log in', onChange=f=>f, onSubmit=f=>f, username='', password='', error='', authSocial=f=>f}) => {
     return (
            <FlexCard title='Login form' class_name='col-md-6 col-sm-12'>
                 <GoogleLogin
                     clientId="332181169-nh611t2t7293ki0mnujonmafjcviiga8.apps.googleusercontent.com"
                     buttonText="Login"
                     onSuccess={authSocial}
                     onFailure={authSocial}
                     cookiePolicy={'single_host_origin'}
                 />
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            className="form-control"
                            onChange={(e) => onChange(e)}
                            placeholder = 'max. 20 characters'
                            maxlength="20"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            className="form-control"
                            onChange={(e) => onChange(e)}
                            placeholder = 'max. 10 characters'
                            maxlength="10"
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Log in
                    </button>
                    <p>{error}</p>
                </form>
                <PrimaryButton message={'forgot password'}
                               onClick={e => {history.push(`/accounts/resetpassword`)}}>
                </PrimaryButton>
             </FlexCard>
        )
}

LoginForm.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string
}


/*const responseGoogle = (response) => {
    console.log('google auth '+  JSON.stringify(response));
    var id_token = response['Zi']['id_token']
    var data = {
        'id_token': id_token
    }
    var csrftoken = getCookie('csrftoken');
    return fetch('http://localhost:8080/accounts/googleverify', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        return res.json()
    })
    .then(res =>{
        console.log('reply:' + JSON.stringify(res));
        if (res['status'] == 200){
            localStorage.setItem('token', res.token);
            dispatch(logged_in())
            history.push('/about')
        }
        else{

        }
    })

}*/

export default LoginForm
