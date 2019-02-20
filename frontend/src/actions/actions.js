import React from 'react';
import { ActionsConstants as C } from 'constants/constants'

/*export const handle_login = (e) =>
    ({
        type: C.LOG_IN,
        e: e
    })*/

export const set_flash_message = ( message, message_type ) =>
    ({
        type: C.SET_FLASH_MESSAGE,
        message: message,
        message_type: message_type

    })

export const remove_flash_message = () =>
    ({
        type: C.REMOVE_FLASH_MESSAGE

    })

export const remove_user_data = () =>
    ({
        type: C.REMOVE_USER_DATA
    })

export const register = () =>
    ({
        type: C.REGISTER
    })

export const handle_user_change = (e) =>
    ({
        type: C.HANDLE_USER_CHANGE,
        e: e
    })

export const error_at_login = (error) =>
    ({
        type: C.ERROR_LOGIN,
        error: error
    })


export const logged_in = (userData) =>
    ({
        type: C.LOGGED_IN,
        userData: userData

    })

/*
 *
 * CURRENT_SEARCH ACTIONS
 */

export const error_search_data = error =>
    ({
        type: C.ERROR_SEARCH_DATA,
        error: error
    })


export const fetching_data = () =>
    ({
        type: C.FETCHING_DATA
    })



export const handle_new_change = (e) =>
    ({
        type: C.HANDLE_NEW_CHANGE,
        e: e
    })

export const attach_table = (table) =>
    ({
        type: C.ATTACH_TABLE,
        table: table
    })
export const attach_graph = (chart) =>
    ({
        type: C.ATTACH_GRAPH,
        chart: chart

    })
export const save_graph_reference = (object) =>
    ({
        type: C.ATTACH_GRAPH_REFERENCE,
        object: object
    })

export const select_database = (id, name) =>
    ({
        type: C.SELECT_DATABASE,
        DataBase: id,
        name: name
    })

export const select_sector = (id, name) =>
    ({
        type: C.SELECT_SECTOR,
        sector: id,
        name: name
    })

export const select_topic = (id, name) =>
    ({
        type: C.SELECT_TOPIC,
        topic: id,
        name: name
    })


export const select_indicator = (id, name) =>
    ({
        type: C.SELECT_INDICATOR,
        indicator: id,
        name: name
    })
export const select_unit = (id, name) =>
    ({
        type: C.SELECT_UNIT,
        unit: id,
        name: name
    })
export const select_time = id =>
    ({
        type: C.SELECT_TIME,
        time: id
    })

export const select_geo = (id, name) =>
    ({
        type: C.SELECT_GEO,
        geoId: id,
        geoName: name
    })

export const check_request = () =>
    ({
        type: C.CHECK_REQUEST
    })
export const set_indicators = (list=[]) =>
    ({
        type: C.SET_INDICATORS,
        list: list
    })

export const set_units = (list=[]) =>
    ({
        type: C.SET_UNITS,
        list: list
    })

export const set_timeGeo = () =>
    ({
        type: C.SET_TIMES_GEO
    })


export const set_query_map = (sector, topic) =>
    ({
        type: C.SET_QUERY_MAP,
        sector: sector,
        topic: topic
    })

export const requesting_data = () =>
    ({
        type: C.REQUESTING_DATA
    })

export const finished_requestiong = () =>
    ({
        type: C.FINISHED_REQUESTING
    })

/*
 * RESULT_MANAGEMENT ACTIONS
 */
export const display_table = (table = {}) =>
    ({
        type: C.DISPLAY_TABLE,
        table: table
    })
export const set_table_saved = id =>
    ({
        type: C.SET_TABLE_SAVED,
        tableId: id
    })

export const set_chart_attached = id =>
    ({
        type: C.SET_CHART_ATTACHED,
        chartId: id
    })
export const remove_table = id =>
    ({
        type: C.REMOVE_TABLE,
        tableId: id
    })
export const remove_chart = id =>
    ({
        type: C.REMOVE_CHART,
        chartId: id
    })

export const remove_table_reference = id =>
    ({
        type: C.REMOVE_TABLE_REFERENCE,
        tableId: id
    })

export const remove_chart_reference = id =>
    ({
        type: C.REMOVE_CHART_REFERENCE,
        chartId: id
    })
export const set_table_attached = id =>
    ({
        type: C.SET_TABLE_ATTACHED,
        tableId: id
    })

export const unattached_table = id =>
    ({
        type: C.SET_TABLE_UNATTACHED,
        tableId: id
    })
export const unattached_chart = id =>
    ({
        type: C.SET_CHART_UNATTACHED,
        chartId: id
    })

export const error_table_display = (id, message) =>
    ({
        type: C.ERROR_TABLE_DISPLAY,
        tableId: id,
        message: message
    })

export const info_table_display = (id, message) =>
    ({
        type: C.INFO_TABLE_DISPLAY,
        tableId: id,
        message: message
    })

export const info_chart_display = (id, message) =>
    ({
        type: C.INFO_CHART_DISPLAY,
        chartId: id,
        message: message
    })

export const display_chart = (chart = {}) =>
    ({
        type: C.DISPLAY_CHART,
        chart: chart
    })