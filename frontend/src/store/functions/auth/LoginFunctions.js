import { fetching_data, logged_in, remove_user_data } from '../../../actions/actions'
import {history} from '../../../App.js';
import {getCookie} from "./Cookies";

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
                username: username,
                password: password,
        }
        var csrftoken = getCookie('csrftoken');
        return fetch('http://127.0.0.1:8080/accounts/')


    }
}

export const handle_login = () => {

    return (dispatch, getState) => {
        var username = getState().User_management.username;
        var password = getState().User_management.password;

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
                    localStorage.setItem('token', json.token);
                     dispatch(logged_in())
                     history.push('/about')
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

