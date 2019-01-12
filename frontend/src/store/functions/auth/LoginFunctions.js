import {
    error_at_login,
    fetching_data,
    logged_in,
    remove_user_data,
    set_flash_message
} from '../../../actions/actions'

import {flashFlags} from '../../../constants/constants'
import {history} from '../../../App.js';
import {getCookie} from "./Cookies";
import {
    validate,
    onlyLettersNumbers,
    passwordSame
} from './validation'

export const handle_edit_first_time = (token) => {
    return (dispatch, getState) => {
        var { username } = getState().User_management;
        var { password } = getState().User_management;
        var { passwordRepeat } = getState().User_management;
        try {
             validate(username, [onlyLettersNumbers]);
             passwordSame(password, passwordRepeat);
        }
        catch(error){
            throw error;
        }
        var data = {
            'username': username,
            'password': password,
            'token': token
        }
        var csrftoken = getCookie('csrftoken');
        return fetch(`http://127.0.0.1:8080/accounts/edituserfirsttime/`, {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.status == 200){
                return dispatch(handle_login());
            }
            else{
                throw res['content']
            }
        })
        .catch(error => {
            return dispatch(set_flash_message(error, flashFlags.ERROR ))
        })
    }
}

export const handle_user_change = (e, prevstate) => {
    /*
        Modify state at App_status reducer, modification target is defined by e.target.name
     */
    const name = e.target.name;
    const value = e.target.value;
    const newState = {...prevstate};
    newState[name] = value;
    return newState;
}

export const handle_signup = () => {
    /*
        Send new user username and email to backend in order to create a new user.
     */
    return (dispatch, getState) => {
        var username = getState().User_management.username;
        var email = getState().User_management.email;
        var data = {
                'username': username,
                'email': email,
        }
        var csrftoken = getCookie('csrftoken');
        return fetch('http://127.0.0.1:8080/accounts/signup/', {
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
        .then(res => {
            console.log('returned: ' + JSON.stringify(res));
            if(res.status == 200){
                return dispatch(set_flash_message(res['content'], flashFlags.MESSAGE ))
            }
            else{
                throw res['content']
            }
        })
        .catch(err => {
             return dispatch(set_flash_message(err, flashFlags.ERROR ))
        })

    }
}

export const handle_login = () => {
    /*
        Log In user by verifying user name and password
     */
    return (dispatch, getState) => {
        var username = getState().User_management.username;
        var password = getState().User_management.password;
        try {
            validate(username, [onlyLettersNumbers]);
            validate(password, [onlyLettersNumbers]);
        }
        catch (error) {
            throw error
        }

        dispatch(fetching_data());
        var data = {
            username: username,
            password: password,
        }
        fetch('http://127.0.0.1:8080/accounts/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            if(typeof json.token == "undefined"){
                throw 'username or password is not correct'
            }
            localStorage.setItem('token', json.token);
            localStorage.setItem('user', JSON.stringify(json['user']));
            dispatch(logged_in(json['user']))
            history.push('/about')
        })
        .catch(error => {
           dispatch(error_at_login(error));
        })
    }
};

export const handle_logout = () => {
    /*
        Log out user by removing JWT (token) from localstorage and redirecting to main site.
     */
    return (dispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch(remove_user_data())
        history.push('/about')
    }
}

