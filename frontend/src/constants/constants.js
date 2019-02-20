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
    ATTACH_TABLE: 'ATTACH_TABLE',
    ATTACH_GRAPH: 'ATTACH_GRAPH',
    ATTACH_GRAPH_REFERENCE: 'ATTACH_GRAPH_REFERENCE',
    REMOVE_TABLE_REFERENCE: 'REMOVE_TABLE_REFERENCE',
    REMOVE_CHART_REFERENCE: 'REMOVE_CHART_REFERENCE',
    SET_TABLE_ATTACHED: 'SET_TABLE_ATTACHED',
    SET_TABLE_UNATTACHED: 'SET_TABLE_UNATTACHED',
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
    DISPLAY_TABLE: 'DISPLAY_TABLE',
    DISPLAY_CHART: 'DISPLAY_CHART',
    SET_TABLE_SAVED: 'SET_TABLE_SAVED',
    SET_CHART_ATTACHED: 'SET_CHART_ATTACHED',
    REMOVE_TABLE: 'REMOVE_TABLE',
    REMOVE_CHART: 'REMOVE_CHART',
    ERROR_LOGIN: 'ERROR_LOGIN',
    ERROR_SEARCH_DATA: 'ERROR_SEARCH_DATA',
    ERROR_TABLE_DISPLAY: 'ERROR_TABLE_DISPLAY',
    INFO_TABLE_DISPLAY: 'INFO_TABLE_DISPLAY',
    INFO_CHART_DISPLAY: 'INFO_CHART_DISPLAY'
}
export const urls = {
    LOG_IN: 'http://127.0.0.1:8080/accounts/token-auth/',
    SIGN_UP: 'http://127.0.0.1:8080/accounts/signup/',
    EDIT_USER_FIRST_TIME: 'http://127.0.0.1:8080/accounts/edituserfirsttime/',
    REFRESH_TOKEN: 'http://127.0.0.1:8080/accounts/token-refresh/',
    MAIN: 'http://localhost:8080/display/newslist/',
    NEW_DETAIL: 'http://localhost:8080/display/getnew/',
    DEVELOP: 'http://localhost:8080',
    MAKE_API_CALL: 'http://localhost:8080/search/makeapicall/',
    GET_INDICATORS: 'http://localhost:8080/search/indicators',
    SAVE_DATA: 'http://localhost:8080/search/savedata/',
    PUBLISH_LON_NEW: 'http://localhost:8080/createnew/publishlongnew/',
    DOWNLOAD_EXCEL: 'http://localhost:8080/downloaddata/excel/'

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