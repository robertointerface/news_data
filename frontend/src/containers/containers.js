import React from 'react';
import { connect } from 'react-redux'
import MainMenu from '../components/main/MainMenu'
import FlashMessage from '../components/main/Flash'
import NewForm from '../components/create_new/NewForm'
import SearchBlock from '../components/search_data/SearchBlock'
import SearchComponent from '../components/search_data/SearchComponent'
import TimeOptions from '../components/search_data/TimeOption'
import {RequestButton} from "../components/search_data/RequestButton";
import Progress from '../components/search_data/progressBar'
import DataDisplay from '../components/data_representation/dataDisplay'
import AttachedReferences from '../components/create_new/attachedReferences'
import LoginForm from '../components/accounts/forms/LogInForm'
import SingUpForm from '../components/accounts/forms/SingUpForm'

import {
    handle_user_change,
    handle_new_change,
    select_database,
    select_sector,
    select_indicator,
    select_time,
    select_geo,
    error_at_login
} from '../actions/actions'

import {
    handle_login,
    handle_logout,
    handle_signup
} from '../store/functions/auth/LoginFunctions'

import {
    handle_indicator_request,
    handle_data_request,
    attach_reference
} from '../store/functions/new_form/CreateNewFunctions'

export const FlashContainer = connect(
    state =>
        ({
            type: state.App_status.flashFlag,
            message: state.App_status.flash
        }),
    dispatch =>
        ({
            
        })
)(FlashMessage)

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

            onSubmit(e){
                e.preventDefault();
                dispatch(handle_signup());
            }
        })
)(SingUpForm)

export const CreateNewContainer = connect(
    state =>
        ({
            headline1: state.Create_new.headline1,
            headline2: state.Create_new.headline2,
            headline3: state.Create_new.headline3,
            content: state.Create_new.content
        }),
    dispatch =>
        ({
            onChange(e){
                e.preventDefault();
                dispatch(handle_new_change(e))
            },

        })
)(NewForm)

export const MainMenuContainer = connect(

    state =>
        ({
            token: localStorage.getItem('token'),
            loggedIn: state.User_management.logged_in,
            flashMessage: state.App_status.flash,
        }),
    dispatch =>
        ({
            log_out(e){
                e.preventDefault();
                dispatch(handle_logout());
            }
        })
)(MainMenu)

export const SearchDataContainer = connect(
    state =>
        ({
            ThirdPartyAPI : state.Current_search.ThirdPartyAPI.id,
            Sector: state.Current_search.Sector.id,
            Topic: state.Current_search.Topic.id,
            requestActive: state.Current_search.requestActive
        }),
    dispatch =>
        ({

        })
)(SearchBlock)

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

export const DataDisplayContainer = connect(
    state =>
        ({
            list: [...state.Results_management.results],
            resultLenght: state.Results_management.results.length,
            //title:
        }),
    dispatch =>
        ({
            onAttach(e, id){
                e.preventDefault();
                console.log('foudn id: ' + id);
                dispatch(attach_reference(id))
            },

            onChangeUnit(e){

            }
        })
)(DataDisplay)

export const AttachedReferencesContainer = connect(
    state =>
        ({
            list: state.Create_new.references
        }),
    dispatch =>
        ({

        })
)(AttachedReferences)


