export const ActionsConstants = {
    SET_FLASH_MESSAGE: 'SET_FLASH_MESSAGE',
    REMOVE_FLASH_MESSAGE: 'REMOVE_FLASH_MESSAGE',
    LOG_IN: 'LOG_IN',
    REMOVE_USER_DATA: 'REMOVE_USER_DATA',
    REGISTER: 'REGISTER',
    HANDLE_USER_CHANGE: 'HANDLE_USER_CHANGE',
    FETCHING_DATA: 'FETCHING_DATA',
    LOGGED_IN: 'LOGGED_IN',
    HANDLE_NEW_CHANGE: 'HANDLE_USER_CHANGE',
    SAVE_REFERENCE: 'SAVE_REFERENCE',
    REMOVE_REFERENCE: 'REMOVE_REFERENCE',
    SET_RESULT_ATTACHED: 'SET_RESULT_ATTACHED',
    SET_RESULT_UNATTACHED: 'SET_RESULT_UNATTACHED',
    SELECT_DATABASE: 'SELECT_DATABASE',
    SELECT_SECTOR: 'SELECT_SECTOR',
    SELECT_TOPIC: 'SELECT_TOPIC',
    SELECT_VERSION: 'SELECT_VERSION',
    SELECT_INDICATOR: 'SELECT_INDICATOR',
    SELECT_UNIT: 'SELECT_UNIT',
    SELECT_TIME: 'SELECT_TIME',
    SELECT_GEO: 'SELECT_GEO',
    CHECK_REQUEST: 'CHECK_REQUEST',
    SET_TIMES_GEO: 'SET_TIMES_GEO',
    SET_INDICATORS: 'SET_INDICATORS',
    SET_UNITS: 'SET_UNITS',
    SET_QUERY_MAP: 'SET_QUERY_MAP',
    REQUESTING_DATA: 'REQUESTING_DATA',
    FINISHED_REQUESTING: 'FINISHED_REQUESTING',
    SAVE_RESULT: 'SAVE_RESULT',
    SET_RESULT_SAVED: 'SET_RESULT_SAVED',
    REMOVE_RESULT: 'REMOVE_RESULT',
    ERROR_LOGIN: 'ERROR_LOGIN',
    ERROR_SEARCH_DATA: 'ERROR_SEARCH_DATA',
    ERROR_DATA_DISPLAY: 'ERROR_DATA_DISPLAY',
    INFO_DATA_DISPLAY: 'INFO_DATA_DISPLAY'
}
export const urls = {
    MAIN: 'http://localhost:8080/display/newslist/',
    NEW_DETAIL: 'http://localhost:8080/display/getnew/',
    DEVELOP: 'http://localhost:8080',
    MAKE_API_CALL: 'http://localhost:8080/search/makeapicall/',
    GET_INDICATORS: 'http://localhost:8080/search/indicators',
    SAVE_DATA: 'http://localhost:8080/search/savedata/',
    PUBLISH_LON_NEW: 'http://localhost:8080/createnew/publishlongnew/',

}
export const DatabaseConstants = {
    EU: 'EU',
    OECD: 'OECD',
    UNESCO: 'UNESCO',
}

export const flashFlags = {
    MESSAGE: 'message',
    WARNING: 'warning',
    ALERT: 'alert'
}

export const SearchConstants = {
    INDICATOR: 'Indicator',
    TOPIC: 'Topic',
    SECTOR: 'Sector',
    MEASURE: 'Unit',
    EXTRA: 'extra',
    GEO: 'SelectedGeo'
}