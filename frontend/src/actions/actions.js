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

export const fetching_data = () =>
    ({
        type: C.FETCHING_DATA
    })

export const logged_in = (userData) =>
    ({
        type: C.LOGGED_IN,
        userData: userData

    })

export const handle_new_change = (e) =>
    ({
        type: C.HANDLE_NEW_CHANGE,
        e: e
    })

export const save_reference = (object) =>
    ({
        type: C.SAVE_REFERENCE,
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

export const select_version = version =>
    ({
        type: C.SELECT_VERSION,
        version: version
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

export const select_geo = id =>
    ({
        type: C.SELECT_GEO,
        geo: id
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

export const save_result = (result = {}) =>
    ({
        type: C.SAVE_RESULT,
        result: result
    })

export const remove_result = id =>
    ({
        type: C.REMOVE_RESULT,
        id: id
    })