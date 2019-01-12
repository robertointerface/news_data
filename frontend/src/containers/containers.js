import React from 'react';
import { connect } from 'react-redux'
import MainMenu from '../components/main/MainMenu'
import FlashMessage from '../components/main/Flash'
import LongNewForm from '../components/create_new/create_long_new/LongNewForm'
import SearchBlock from '../components/search_data/SearchBlock'
import SearchComponent from '../components/search_data/SearchComponent'
import TimeOptions from '../components/search_data/TimeOption'
import {RequestButton} from "../components/search_data/RequestButton";
import Progress from '../components/search_data/progressBar'
import DataDisplay from '../components/data_representation/dataDisplay'
import AttachedReferences from '../components/create_new/attachedReferences'
import LoginForm from '../components/accounts/forms/LogInForm'
import SingUpForm from '../components/accounts/forms/SingUpForm'
import VerifyTokenForm from '../components/accounts/forms/VerifyTokenForm'
import VerifyToken from '../components/accounts/VerifyToken'
import CreateLongNewBlock from '../components/create_new/create_long_new/createLongNewBlock'

import {
    handle_user_change,
    handle_new_change,
    logged_in,
    select_database,
    select_sector,
    select_indicator,
    select_time,
    select_geo,
    error_at_login,
    remove_flash_message
} from '../actions/actions'

import {
    handle_login,
    handle_logout,
    handle_signup,
    handle_edit_first_time
} from '../store/functions/auth/LoginFunctions'

import {
    handle_indicator_request,
    handle_data_request,
    attach_reference
} from '../store/functions/new_form/CreateNewFunctions'
import {history} from "../App";
import {getCookie} from "../store/functions/auth/Cookies";
import CreateLongNew from "../components/create_new/create_long_new/createLongNewBlock";

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



export const DatabaseContainer = connect(
    state =>
        ({
            list: [...state.Current_search.PossibleThirdPartyAPI],
            title: 'Databases'
        }),
    dispatch =>
        ({
            onSelect(e, id, name){
                e.preventDefault();
                dispatch(select_database(id, name));
            }
        })
)(SearchComponent)


export const SectorContainer = connect(
    state =>
        ({
            list: [...state.Current_search.PossibleSectors],
            title: 'Sectors'
        }),
    dispatch =>
        ({
            onSelect(e, id, name){
                e.preventDefault();
                dispatch(select_sector(id, name));
            }

        })
)(SearchComponent)

export const TopicContainer = connect(
    state =>
        ({
            list: [...state.Current_search.PossibleTopics],
            title: 'Topics'
        }),
    dispatch =>
        ({
            onSelect(e, id, name){
                e.preventDefault();
                dispatch(handle_indicator_request(id, name));
            }

        })
)(SearchComponent)

export const IndicatorContainer = connect(
    state =>
        ({
            list: [...state.Current_search.PossibleIndicators],
            title: 'Indicators'
        }),
    dispatch =>
        ({
            onSelect(e, id, name){
                e.preventDefault();
                dispatch(select_indicator(id, name))
            }
        })
)(SearchComponent)


export const TimeContainer = connect(
    state =>
        ({
            list: state.Current_search.Times

        }),
    dispatch =>
        ({
            onChange(e, id){
                e.preventDefault();
                const isChecked = e.target.checked;
                dispatch(select_time(id))
            }

        })
)(TimeOptions)

export const GeoContainer = connect(
    state =>
        ({
            list: [...state.Current_search.Geo]
        }),
    dispatch =>
        ({
             onChange(e, id){
                e.preventDefault();
                const isChecked = e.target.checked;
                dispatch(select_geo(id))
            }

        })
)(TimeOptions)

export const ProgressContainer = connect(
    state =>
        ({
            progressNumber: state.Current_search.progress
        }),
    dispatch =>
        ({

        })
)(Progress)

export const RequestButtonContainer = connect(
    state =>
        ({
            active: state.Current_search.requestActive
        }),
    dispatch =>
        ({
            onClick(e){
                e.preventDefault()
                //var requestObject = prepareRequestData(store.getState().Current_search)
                dispatch(handle_data_request());
            }
        })
)(RequestButton)



export const AttachedReferencesContainer = connect(
    state =>
        ({
            list: state.Create_new.references
        }),
    dispatch =>
        ({

        })
)(AttachedReferences)



/*
export const CreateLongNewContainer = connect(
    state =>
        ({
           authorize: isUserAuthorize(props.match.params.name, localStorage.getItem('token'))
        }),
    dispatch =>
        ({

        })
)(CreateLongNewBlock)*/
