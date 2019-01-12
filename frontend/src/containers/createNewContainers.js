import React from 'react';
import { connect } from 'react-redux'
import {history} from "../App";
import {getCookie} from "../store/functions/auth/Cookies";
import {handle_new_change} from "../actions/actions";
import NewForm from "../components/create_new/NewForm";
import SearchBlock from "../components/search_data/SearchBlock";
import DataDisplay from "../components/data_representation/dataDisplay";
import {attach_reference} from "../store/functions/new_form/CreateNewFunctions";
import CreateLongNew from '../components/create_new/createLongNew'

/*const isUserAuthorize = (name='', token='') => {
    console.log('name to verify :' + name);

}*/




export const CreateNewFormContainer = connect(
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


export const CreateLongNewContainer = connect(
    state =>
        ({
            headline1: state.Create_new.headline1,
           // authorize: isUserAuthorize(this.props.match.params.name, localStorage.getItem('token'))
        }),
    dispatch =>
        ({

        })
)(CreateLongNew)