import React from 'react';
import { connect } from 'react-redux'
import {handle_new_change} from "actions/actions";
import LongNewForm from "components/create_new/create_long_new/LongNewForm";
import DataDisplay from "components/data_representation/dataDisplay";
import {attach_reference} from "functions/new_form/CreateNewFunctions";
import {handle_publish_long_new} from 'functions/new_form/CreateNewFunctions'

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
            onSubmit(e){
                e.preventDefault();
                dispatch(handle_publish_long_new());
            }


        })
)(LongNewForm)


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


