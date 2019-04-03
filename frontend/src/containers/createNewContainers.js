import React from 'react';
import { connect } from 'react-redux'
import {
    handle_new_change,
    remove_table,
    remove_table_reference,
    remove_chart_reference,
    unattached_table,
    unattached_chart,
    info_table_display,
    info_chart_display,
    remove_chart,
    set_chart_attached
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
import {app_fetching} from "root/actions/actions";

export const CreateNewFormContainer = connect(
    state =>
        ({
            fetching: state.App_status.isFetching,
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
                dispatch(app_fetching(true));
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
                dispatch(info_chart_display(id, 'attached'))
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
            tableList: state.Create_new.references.tables,
            chartList: state.Create_new.references.charts
        }),
    dispatch =>
        ({
            onRemove(e, type, id){
                e.preventDefault();
                switch (type){
                    case 'table':
                        return Promise.all([
                            dispatch(remove_table_reference(id)),
                            dispatch(unattached_table(id)),
                            dispatch(info_table_display(id, '' ))
                        ])
                    case 'chart':
                        return Promise.all([
                            dispatch(remove_chart_reference(id)),
                            dispatch(unattached_chart(id)),
                            dispatch(info_chart_display(id, ''))
                        ])
                    default:

                }

            },


        })
)(AttachedReferences)
