import React from 'react';
import PropTypes from 'prop-types';
import FlexCard from 'ui/common/cards/FlexCard'


import {GoogleLogin} from 'react-google-login';
import {getCookie} from "../../../store/functions/auth/Cookies"
import {history} from "../../../App";
import {logged_in} from "../../../actions/actions";

const LoginForm = ({title='Log in', onChange=f=>f, onSubmit=f=>f, username='', password='', error='', authSocial=f=>f}) => {
     return (
            <FlexCard title='Login form' class_name='col-md-6 col-sm-12'>
                 <GoogleLogin
                     clientId="332181169-grf1u7a8q68qrtj372d0fee283ubb9d1.apps.googleusercontent.com"
                     buttonText="Login"
                     onSuccess={authSocial}
                     onFailure={authSocial}
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
