import React from 'react';
import { connect } from 'react-redux'
import {
    handle_new_change,
    remove_table,
    remove_reference,
    unattached_table,
    save_reference,
    info_table_display,
    remove_chart
} from "actions/actions";
import LongNewForm from "components/create_new/create_long_new/LongNewForm";
import DataDisplay from "components/data_representation/dataDisplay";
import GraphDisplay from "components/data_representation/graph/graphDisplay"
import {
    handle_publish_long_new,
    attach_data_reference,
    attach_graph_reference
} from 'functions/Create_new/CreateNewFunctions'

import AttachedReferences from "root/components/create_new/attachedReferences";

export const CreateNewFormContainer = connect(
    state =>
        ({
            title: state.Create_new.title,
            headline1: state.Create_new.headline1,
            headline2: state.Create_new.headline2,
            headline3: state.Create_new.headline3,
            content: state.Create_new.content,
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
            list: state.Results_management.tables,
            resultLenght: state.Results_management.tables.length,
            //title:
        }),
    dispatch =>
        ({
            onAttach(e, id){
                e.preventDefault();
                dispatch(attach_data_reference(id))
                dispatch(info_table_display(id, 'attached'))
            },
            onRemove(e, id){
                e.preventDefault();
                dispatch(remove_table(id));

            },

        })
)(DataDisplay)

export const GraphDisplayContainer = connect (
    state =>
        ({
            list: state.Results_management.charts,
        }),
    dispatch =>
        ({
            onAttach(e, id){
                e.preventDefault();
                dispatch(attach_graph_reference(id));
            },
            onRemove(e, id){
                e.preventDefault();
                dispatch(remove_chart(id));
            }
        })
)(GraphDisplay)


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
                dispatch(unattached_table(resultId));
                dispatch(info_table_display(resultId, '' )) //Clean 'attached' message as is not attached anymore
            }
        })
)(AttachedReferences)
