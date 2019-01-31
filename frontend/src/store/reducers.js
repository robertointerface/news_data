import React from 'react'
import { ActionsConstants as C } from 'constants/constants'
import { handle_user_change, handle_logout } from 'functions/auth/LoginFunctions'
import {
    handle_new_change,
    pushItemToArray,
    canMakeRequest,
    setItemSelected,
    markItemSelected,
    setUnitSelected,
    attach_reference
} from 'functions/new_form/CreateNewFunctions'

import {
    getSectorsByDatabase,
    getTopicsBySector,
    createIndicatorUnitList,
    findQueryOptions,
    createTimeList,
    createGeoList,
    getVersion
} from 'functions/search_data/SearchIterGen'

import {
    push_result,
    remove_result
} from 'functions/search_data/Results'

import { userData as emptyUserData }  from './initialData'
import {getTopicMap} from 'functions/new_form/CreateNewFunctions'

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
        case C.SAVE_REFERENCE:
            return{
                ...state,
                references: [...pushItemToArray(state.references, action.object)]
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
                progress: 20
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
                progress: 40
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
                 progress: 60
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
                PossibleIndicators: setItemSelected(state.PossibleIndicators, action.indicator),
                progress: 80
            }
        case C.SELECT_UNIT:
            return {
                ...state,
                Unit: setUnitSelected(state.PossibleUnitMeasure, action.unit)
            }
        case C.SELECT_GEO:
            return {
                ...state,
                Geo: markItemSelected(state.Geo, action.geo),
                SelectedGeo: pushItemToArray(state.SelectedGeo, action.geo),
            }
        case C.SELECT_TIME:
            return {
                ...state,
                Times: markItemSelected(state.Times, action.time),
                SelectedTimes: pushItemToArray(state.SelectedTimes, action.time)
            }
        case C.CHECK_REQUEST:
            return {
                 ...state,
                requestActive: canMakeRequest(state.Times, state.Geo)
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

        default :
            return state
    }
}

export const Results_management = (state={}, action) => {
    switch (action.type){
        case C.SAVE_RESULT:
            return Modify_result_management(state, action)
        case C.REMOVE_RESULT:
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
                results: push_result(state.results, action.result),
            }
        case C.REMOVE_RESULT:
            return{
                ...state,
                numberResults: state.numberResults - 1,
                results: remove_result(state.results, action.id),
            }
        default:
            return state
    }
}