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
    onlyLettersNumbers
} from './validation'

export const handle_user_change = (e, prevstate) => {
    const name = e.target.name;
    const value = e.target.value;
    const newState = {...prevstate};
    newState[name] = value;
    return newState;
}

export const handle_signup = () => {
    return (dispatch, getState) => {
        var username = getState().User_management.username;
        var email = getState().User_management.email;
        var data = {
                'username': username,
                'email': email,
        }
        var csrftoken = getCookie('csrftoken');
        fetch('http://127.0.0.1:8080/accounts/signup/', {
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
            console.log('returned: ' + JSON.stringify(res));
            if(res.status == 200){
                //return dispatch(set_flash_message(res['content'], flashFlags.MESSAGE ))
            }
            else{
                throw res['content']
            }
        })
        .catch(err => {
            console.log('error: ' + err);
        })

    }
}

export const handle_login = () => {

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
            dispatch(logged_in())
            history.push('/about')
        })
        .catch(error => {
           dispatch(error_at_login(error));
        })
    }
};



export const handle_logout = () => {

    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch(remove_user_data())
        history.push('/about')

    }
}

