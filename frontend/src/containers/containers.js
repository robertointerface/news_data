import React from 'react';
import { connect } from 'react-redux'
import MainMenu from 'components/main/MainMenu'
import FlashMessage from 'components/main/Flash'
import AttachedReferences from 'components/create_new/attachedReferences'
import LoginForm from 'components/accounts/forms/LogInForm'
import SingUpForm from 'components/accounts/forms/SingUpForm'
import VerifyToken from 'components/accounts/VerifyToken'

import {
    handle_user_change,
    logged_in,
    error_at_login,
    remove_flash_message
} from 'actions/actions'

import {
    handle_login,
    handle_logout,
    handle_signup,
    handle_edit_first_time
} from 'functions/auth/LoginFunctions'

import {history} from "root/App";
import {getCookie} from "functions/auth/Cookies";

export const FlashContainer = connect(
    state =>
        ({
            type: state.App_status.flashFlag,
            message: state.App_status.flash
        }),
    dispatch =>
        ({
            onClick(e){
                e.preventDefault();
                dispatch(remove_flash_message());
            }
        })
)(FlashMessage)

/*export const nav = connect(
    state

)*/

export const VerifyTokenFormContainer = connect(
    state =>
        ({
            username: state.User_management.username,
            loggedIn : state.User_management.logged_in,
            password: state.User_management.password,
            passwordRepeat: state.User_management.passwordRepeat,
            error: state.User_management.error
        }),
    dispatch =>
        ({
            onChange(e){
                e.preventDefault();
                dispatch(handle_user_change(e))
            },

            onLogIn(){
                dispatch(logged_in());
            },
            onSubmit(e, token){
                e.preventDefault();
                dispatch(handle_edit_first_time(token));
            }
        })
)(VerifyToken)

export const LogInContainer = connect(
    state =>
        ({
            title: 'Log in form',
            username: state.User_management.username,
            password: state.User_management.password,
            error: state.User_management.error,
        }),
    dispatch =>
        ({
            onChange(e){
                e.preventDefault();
                dispatch(handle_user_change(e))
            },
            onSubmit(e){
                e.preventDefault();
                try{
                    dispatch(handle_login());
                }
                catch(error){
                    dispatch(error_at_login(error));
                }
            },
            authSocial(response){
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
            }
        })
)(LoginForm)

export const SignUpContainer = connect(
    state =>
        ({
            title: 'Sign up form',
            username: state.User_management.username,
            email: state.User_management.email,
            error: state.User_management.error,
        }),
    dispatch =>
        ({
             onChange(e){
                e.preventDefault();
                dispatch(handle_user_change(e));
            },

            onSubmit(e){LoginForm
                e.preventDefault();
                dispatch(handle_signup());
            }
        })
)(SingUpForm)

export const MainMenuContainer = connect(
    state =>
        ({
            token: localStorage.getItem('token'),
            loggedIn: state.User_management.logged_in,
            flashMessage: state.App_status.flash,
            username: state.User_management.username,
        }),
    dispatch =>
        ({
            log_out(e){
                e.preventDefault();
                dispatch(handle_logout());
            }
        })
)(MainMenu)





