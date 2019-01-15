import React from 'react';
import {connect} from "react-redux";
import SearchBlock from "components/search_data/SearchBlock";
import {
    select_database,
    select_geo,
    select_indicator,
    select_sector,
    select_time
} from "actions/actions";
import SearchComponent from "components/search_data/SearchComponent";
import {RequestButton} from "components/search_data/RequestButton";
import {handle_indicator_request} from "functions/new_form/CreateNewFunctions";
import Progress from "components/search_data/progressBar";
import TimeOptions from "components/search_data/TimeOption";
import {handle_data_request} from 'functions/new_form/CreateNewFunctions'

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
             onChange(e, id){
                e.preventDefault();
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
                dispatch(handle_data_request());
            }
        })
)(RequestButton)

export const ChangeUnitMeasureContainer = connect(
    state =>
        ({
            list:
        }),
    dispatch=>
        ({

        })
)


