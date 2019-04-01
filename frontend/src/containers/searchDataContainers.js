import React from 'react';
import {connect} from "react-redux";
import SearchBlock from "components/search_data/SearchBlock";
import {
    select_database,
    select_geo,
    select_indicator,
    select_sector,
    select_time,
    check_request,
    requesting_data,
    app_fetching
} from "actions/actions";
import SearchComponent from "components/search_data/SearchComponent";
import {RequestButton} from "components/search_data/RequestButton";
import Progress from "components/search_data/progressBar";
import TimeOptions from "components/search_data/TimeOption";
import GeoOptions from 'components/search_data/GeoOption'
import {
    handle_data_request,
    handle_indicator_request
} from 'functions/Create_new/CreateNewFunctions'
import ChangeUnitMeasure from 'components/data_representation/changeUnitMeasure/changeUnitMeasure'
import {
    handle_change_unit,
    handle_save_result_user,
    handle_excel_download,
    handle_graph_result
} from 'functions/Results_management/Results'
import {Graph, GoToThirdParty, SaveData, ExcelDownload} from 'components/data_representation/dataOptions/options'
import MessageDisplay from 'components/data_representation/messageDisplay'

export const SearchDataContainer = connect(
    state =>
        ({
            ThirdPartyAPI : state.Current_search.ThirdPartyAPI.id,
            Sector: state.Current_search.Sector.id,
            Topic: state.Current_search.Topic.id,
            requestActive: state.Current_search.requestActive,
            errorMessage: state.Current_search.errorMessage
        }),
    dispatch =>
        ({

        })
)(SearchBlock)

export const DatabaseContainer = connect(
    state =>
        ({
            list: state.Current_search.PossibleThirdPartyAPI,
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
            list: state.Current_search.PossibleSectors,
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
            list: state.Current_search.PossibleTopics,
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
            list: state.Current_search.PossibleIndicators,
            title: 'Indicators'
        }),
    dispatch =>
        ({
            onSelect(e, id, name){
                e.preventDefault();
                dispatch(select_indicator(id, name))
                dispatch(check_request())
            }
        })
)(SearchComponent)


export const TimeContainer = connect(
    state =>
        ({
            list: state.Current_search.Times,

        }),
    dispatch =>
        ({
            onChange(e, id){
                e.preventDefault();
                dispatch(select_time(id))
                dispatch(check_request())
            }
        })
)(TimeOptions)

export const GeoContainer = connect(
    state =>
        ({
            list: state.Current_search.Geo
        }),
    dispatch =>
        ({
             onChange(e, id, name){
                 e.preventDefault();
                 dispatch(select_geo(id, name))
                 dispatch(check_request())
            }

        })
)(GeoOptions)

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
            fetching: state.App_status.isFetching,
            active: state.Current_search.requestActive
        }),
    dispatch =>
        ({
            onClick(e){
                e.preventDefault()
                    dispatch(app_fetching(true))
                    dispatch(handle_data_request())

            }
        })
)(RequestButton)

export const ChangeUnitMeasureContainer = connect(
    (state, props) =>
        ({
            list: [...findChangeUnitMeasure(props.props, state.Results_management.tables)],
            resultId: props.props
        }),
    (dispatch, props) =>
        ({
            onClick(e, unitId){
                e.preventDefault();
                var resultId = props.props
                dispatch(handle_change_unit(resultId, unitId));

            }
        })
)(ChangeUnitMeasure)


export const SaveDataContainer = connect(
    (state, props) =>
        ({
            title: 'save data',
            resultId: props.resultId,
            resultSaved: props.resultSaved
        }),
    (dispatch, props) =>
        ({
            onClick(e, resultId){
                e.preventDefault();
                dispatch(handle_save_result_user(resultId))

            }

        })
)(SaveData)

export const VisitContainer = connect(
    state =>
        ({
            title: 'go to '
        }),
    dispatch =>
        ({
            onClick(e, resultId){

            }

        })
)(GoToThirdParty)


export const GraphContainer = connect(
    state =>
        ({
            title: 'graph'
        }),
    dispatch =>
        ({
            onClick(e, resultId){
                e.preventDefault();
                dispatch(handle_graph_result(resultId));
            }

        })
)(Graph)

export const DisplayDataMessage = connect(
    (state, props) =>
        ({
            message: props.message,
            type: props.type
        }),
    dispatch =>
        ({

        })
)(MessageDisplay)

export const ExcelDownloadContainer = connect(
    (state, props) =>
        ({
            title: 'download in excel',
            resultId: props.resultId,
        }),
    dispatch =>
        ({
            onClick(e, resultId){
                e.preventDefault();
                dispatch(handle_excel_download(resultId));
            }

        })
)(ExcelDownload)


const findChangeUnitMeasure = (id, list=[]) => {

    if(id && (list.length > 0)){
        var result = list.find(item => item['id'] == id);
        return result.searchObject.PossibleUnitMeasure;
    }
}


