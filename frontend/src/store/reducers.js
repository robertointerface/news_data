import React from 'react'
import { ActionsConstants as C } from 'constants/constants'
import { handle_user_change, handle_logout } from 'functions/auth/LoginFunctions'


import {
    handle_new_change,
    canMakeRequest,

} from 'functions/Create_new/CreateNewFunctions'

import {
    removeReference,
    pushReferenceToArray
} from 'functions/Create_new/stateManipulation'

import {
    pushResult,
    removeResult,
    resultSaved,
    setResultAttached,
    setResultUnattached,
    setErrorMessageAtDisplay,
    setInfoMessageAtDisplay
} from 'functions/Results_management/stateManipulation'

import {
    markItemChecked,
    unSelectItems,
    setItemSelected,
    pushItemToArray,
    setUnitSelected,
    getTopicsBySector,
    createIndicatorUnitList,
    getSectorsByDatabase,
    createTimeList,
    createGeoList,
    setProgress100,
    pushGeoToArray
} from "functions/Current_search/stateManipulation";


import { userData as emptyUserData }  from './initialData'
import {getTopicMap} from 'functions/Create_new/CreateNewFunctions'

export const App_status = (state = {}, action) => {
    switch (action.type) {
        case C.SET_FLASH_MESSAGE:
            return {
                ...state,
                flashFlag: action.message_type,
                flash: action.message,
            }
        case C.REMOVE_FLASH_MESSAGE:
            return {
                ...state,
                flash: ''
            }
        default:
            return state
    }
}

export const User_management = (state = {}, action) => {
    switch (action.type){
        case C.HANDLE_USER_CHANGE:
            state = handle_user_change(action.e, state);
            return state
        case C.FETCHING_DATA:
            return {
                ...state,
                isFetching: true,
            }
        case C.LOGGED_IN:
            return {
                ...state,
                isFetching: false,
                logged_in: true,
                username: action.userData['username'],
                email: action.userData['email'],
                password: '',
                passwordRepeat: '',
                token: '',
                error: ''
            }
        case C.REMOVE_USER_DATA:
            return { ...emptyUserData}
        case C.ERROR_LOGIN:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const Create_new = (state ={}, action) => {
    switch(action.type){
        case C.HANDLE_NEW_CHANGE:
            state = handle_new_change(action.e, state);
            return state
        case C.ATTACH_REFERENCE:
            return {
                ...state,
                references: pushReferenceToArray(state.references, action.object)
            }
        case C.REMOVE_REFERENCE:
            return {
                ...state,
                references: removeReference(state.references, action.id)
            }
        default:
            return state

    }
}

export const Current_search = (state = {}, action) => {
    switch (action.type){
        case C.SELECT_DATABASE:
            return Modify_current_search(state, action)
        case C.SELECT_SECTOR:
            return Modify_current_search(state, action)
        case C.SELECT_TOPIC:
            return Modify_current_search(state, action)
        case C.SELECT_VERSION:
            return Modify_current_search(state, action)
        case C.SELECT_INDICATOR:
            return Modify_current_search(state, action)
        case C.SELECT_UNIT:
            return Modify_current_search(state, action)
        case C.SELECT_TIME:
            return Modify_current_search(state, action)
        case C.CHECK_REQUEST:
            return Modify_current_search(state, action)
        case C.SELECT_GEO:
            return Modify_current_search(state, action)
        case C.SET_UNITS:
            return Modify_current_search(state, action)
        case C.SET_INDICATORS:
            return Modify_current_search(state,action)
        case C.SET_QUERY_MAP:
            return Modify_current_search(state,action)
        case C.SET_TIMES_GEO:
            return Modify_current_search(state,action)
        case C.REQUESTING_DATA:
            return Modify_current_search(state,action)
        case C.FINISHED_REQUESTING:
            return Modify_current_search(state,action)
        case C.ERROR_SEARCH_DATA:
            return Modify_current_search(state,action)
        default:
            return state
    }
}

export const Modify_current_search = (state = {}, action) =>{
    switch (action.type){
        case C.SELECT_DATABASE:
            return {
                ...state,
                ThirdPartyAPI: {
                    id: action.DataBase,
                    name: action.name
                },
                PossibleThirdPartyAPI: setItemSelected(state.PossibleThirdPartyAPI, action.DataBase),
                PossibleSectors: getSectorsByDatabase(action.DataBase),
                PossibleTopics: [],
                Topic: {},
                TopicMap: {},
                version: 1,
                PossibleIndicators: [],
                Indicator: {},
                PossibleUnitMeasure: [],
                Unit: {},
                Times: [],
                SelectedTimes: [],
                Geo: [],
                SelectedGeo: [],
                queryMap: {},
                requestActive: true,
                progress: 20,
                errorMessage: ''
            }
        case C.SELECT_SECTOR:
            return {
                ...state,
                Sector: {
                    id: action.sector,
                    name: action.name
                },
                PossibleSectors: setItemSelected(state.PossibleSectors, action.sector),
                PossibleTopics: getTopicsBySector(state.ThirdPartyAPI.id, action.sector),
                Topic: {},
                TopicMap: {},
                version: 1,
                PossibleIndicators: [],
                Indicator: {},
                PossibleUnitMeasure: [],
                Unit: {},
                Times: [],
                SelectedTimes: [],
                Geo: [],
                SelectedGeo: [],
                queryMap: {},
                requestActive: false,
                progress: 40,
                errorMessage: ''
            }
        case C.SELECT_TOPIC:
             return {
                 ...state,
                 Topic: {
                     id: action.topic,
                     name: action.name,
                 },
                 PossibleTopics: setItemSelected(state.PossibleTopics, action.topic),
                 TopicMap: getTopicMap(state.ThirdPartyAPI.id, state.Sector.id, action.topic),
                 progress: 60,
                 errorMessage: ''
             }
        case C.SELECT_VERSION:
            return {
                ...state,
                version: {...state.TopicMap.rev},
            }
        case C.SELECT_INDICATOR:
            return {
                ...state,
                Indicator: {
                    id: action.indicator,
                    name: action.name
                },
                Times: unSelectItems(state.Times),
                SelectedTimes: [],
                Geo: unSelectItems(state.Geo),
                SelectedGeo: [],
                PossibleIndicators: setItemSelected(state.PossibleIndicators, action.indicator),
                progress: 80
            }
        case C.SELECT_UNIT:
            return {
                ...state,
                Unit: setUnitSelected(state.PossibleUnitMeasure, action.unit),

            }
        case C.SELECT_GEO:
            return {
                ...state,
                Geo: markItemChecked(state.Geo, action.geoId),
                SelectedGeo: pushGeoToArray(state.SelectedGeo, action.geoId, action.geoName),
            }
        case C.SELECT_TIME:
            return {
                ...state,
                Times: markItemChecked(state.Times, action.time),
                SelectedTimes: pushItemToArray(state.SelectedTimes, action.time),
            }
        case C.CHECK_REQUEST:
            return {
                 ...state,
                requestActive: canMakeRequest(state.Times, state.Geo),
                progress: setProgress100(state.SelectedTimes, state.SelectedGeo)
            }
        case C.SET_INDICATORS:
            return {
                ...state,
                PossibleIndicators: createIndicatorUnitList(action.list)
            }
        case C.SET_UNITS:
            return {
                ...state,
                PossibleUnitMeasure: createIndicatorUnitList(action.list)
            }
        case C.SET_QUERY_MAP:
            return {
                ...state,
                queryMap: {...state.TopicMap.UrlStructure},
            }
        case C.SET_TIMES_GEO:
            return {
                ...state,
                Times: createTimeList(state.TopicMap.Time.Start, state.TopicMap.Time.End),
                Geo: createGeoList(state.TopicMap.Geo)
            }
        case C.REQUESTING_DATA:
            return {
                ...state,
                requestActive: true
            }
        case C.FINISHED_REQUESTING:
            return {
                ...state,
                requestActive: false
            }
        case C.ERROR_SEARCH_DATA:
            return {
                ...state,
                errorMessage: action.error
            }
        default :
            return state
    }
}

export const Results_management = (state={}, action) => {
    switch (action.type){
        case C.SAVE_RESULT:
            return Modify_result_management(state, action)
        case C.SAVE_GRAPH:
            return Modify_result_management(state, action)
        case C.SET_RESULT_ATTACHED:
            return Modify_result_management(state, action)
        case C.SET_GRAPH_ATTACHED:
            return Modify_result_management(state, action)
        case C.REMOVE_RESULT:
            return Modify_result_management(state, action)
        case C.REMOVE_GRAPH:
            return Modify_result_management(state, action)
        case C.SET_RESULT_SAVED:
            return Modify_result_management(state, action)
        case C.SET_RESULT_UNATTACHED:
            return Modify_result_management(state, action)
        case C.ERROR_DATA_DISPLAY:
            return Modify_result_management(state, action)
        case C.INFO_DATA_DISPLAY:
            return Modify_result_management(state, action)
        default:
            return state
    }
}

const Modify_result_management = (state={}, action) => {
    switch (action.type){
        case C.SAVE_RESULT:
            return {
                ...state,
                numberResults: state.numberResults + 1,
                results: pushResult(state.results, action.result),
            }
        case C.SAVE_GRAPH:
            return {
                ...state,
                charts: pushResult(state.charts, action.chart)
            }
        case C.SET_RESULT_ATTACHED:
            return {
                ...state,
                results: setResultAttached(state.results, action.id)
            }
        case C.SET_GRAPH_ATTACHED:
            return {
                ...state,
                charts: setResultAttached(state.charts, action.id)
            }
        case C.REMOVE_RESULT:
            return{
                ...state,
                numberResults: state.numberResults - 1,
                results: removeResult(state.results, action.id),
            }
        case C.REMOVE_GRAPH:
            return {
                ...state,
                charts: removeResult(state.charts, action.id)
            }
        case C.SET_RESULT_SAVED:
            return {
                ...state,
                results: resultSaved(state.results, action.resultId),
            }
        case C.SET_RESULT_UNATTACHED:
            return {
                ...state,
                results: setResultUnattached(state.results, action.id)
            }
        case C.ERROR_DATA_DISPLAY:
            return {
                ...state,
                results: setErrorMessageAtDisplay(state.results, action.id, action.message)
            }
        case C.INFO_DATA_DISPLAY:
            return {
                ...state,
                results: setInfoMessageAtDisplay(state.results, action.id, action.message)
            }
        default:
            return state
    }
}