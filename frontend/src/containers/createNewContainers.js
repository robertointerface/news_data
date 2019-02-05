import React from 'react';
import { connect } from 'react-redux'
import {
    handle_new_change,
    remove_result,
    remove_reference,
    unattached_result,
    attach_result,
    save_reference
} from "actions/actions";
import LongNewForm from "components/create_new/create_long_new/LongNewForm";
import DataDisplay from "components/data_representation/dataDisplay";

import {
    handle_publish_long_new,
    attach_reference
} from 'functions/Create_new/CreateNewFunctions'

import AttachedReferences from "root/components/create_new/attachedReferences";

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
            list: state.Results_management.results,
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
            onRemove(e, id){
                e.preventDefault();
                dispatch(remove_result(id));
            },

        })
)(DataDisplay)

export const AttachedReferencesContainer = connect(
    state =>
        ({
            list: state.Create_new.references
        }),
    dispatch =>
        ({
            onRemove(e, resultId){
                e.preventDefault();
                dispatch(remove_reference(resultId));
                dispatch(unattached_result(resultId));
            }
        })
)(AttachedReferences)
