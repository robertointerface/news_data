import download from 'downloadjs'
import {
    prepareRequestData,
    getDataRequest} from 'functions/Create_new/CreateNewFunctions'
import {
    display_table,
    set_table_saved,
    set_flash_message,
    error_table_display,
    info_table_display,
    display_chart
} from "root/actions/actions";
import {getCookie} from "root/store/functions/auth/Cookies";
import {
    urls,
    flashFlags
} from 'constants/constants'

import {
    lineGraph,
    barGraph
} from 'classes/graph'

export const handle_change_unit = (resultId, unitId) => {
    /*

     */
    return (dispatch, getState) =>{
        var resultsMade = getState().Results_management.tables;
        var foundResult = {...resultsMade.find(item => item['id'] == resultId)};
        foundResult.searchObject.Unit = findItemInArray(unitId, foundResult.searchObject.PossibleUnitMeasure);
        var requestObject = prepareRequestData(foundResult.searchObject);
        var dataRequestItem = getDataRequest(requestObject)
        return Promise.all([
            dataRequestItem.createAPIRequest(),
            dataRequestItem.makeAPIcall()
                .then(result =>{
                    return dispatch(display_table(result));
                })
        ])
    }

}



export const handle_save_result_user = resultId => {
    /*
        @Func: upon user request, 'table' data (Third party api data i.e Eurostat) is saved into users accounts so it
        can be seen or analyze later. Data is saved in MySQL table 'UserData' in the back end.
        @Arg: resultId(time.stamp() unix time.stamp()): data ID used to get the data form redux state.
        @Return: Display successful message to user or error if data was not saved.
     */
    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken');
        var results = getState().Results_management.tables
        var resutlToSave = results.find(result => result['id'] == resultId) //find the data json object
        if(resutlToSave){
            var data = {
                'DataToSave': resutlToSave,
                'APIUrl': resutlToSave.searchObject.APIUrl
            } // data to be POST to backend
            return fetch(`${urls.SAVE_DATA}`, {
                method: 'POST',
                mode: 'same-origin',
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if(response.status == 200){
                    return Promise.all([
                        dispatch(info_table_display(resultId, 'data saved')),
                        dispatch(set_table_saved(resultId))
                    ])
                }
                else{
                    throw 'error saving, please try again.'
                }
            })
            .catch(error => {
               return dispatch(error_table_display(resultId, error))
            })
        }

    }
}

export const handle_excel_download = resultId => {
/*
    @Func: Call API to convert specific result data (JSON format) into an excel file.
    @Arg: resultId(time.stamp() unix time.stamp()): data ID used to get the data form redux state.
    @return: Excel file to browser
 */
    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken');
        var results = getState().Results_management.tables
        var resultToExcel = results.find(result => result['id'] == resultId)
        if (resultToExcel){
             var data = {
                'result': resultToExcel.resultObject.filterResult,
                 'searchObject': resultToExcel.searchObject
            }
            return fetch(`${urls.DOWNLOAD_EXCEL}`, {
                method: 'POST',
                mode: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    return response.blob();
                })
                .then(blob =>{
                   return download(blob, 'tablenew_data.xls', 'application/ms-excel')
                })
        }
    }
}


const getGraphClass = (graphData) => {
    if (graphData.SelectedTimes.length > 1){
        return new lineGraph(graphData)
    } else{
        return new barGraph(graphData)
    }
}
export const handle_graph_result = resultId => {
    /*
        @Func: convert JSON data into JSON data that can be used to create charts/graphs with chart.js library.
        @Arg: resultId(time.stamp() unix time.stamp()): data ID used to get the data form redux state.
        @return: JSON object.
     */
    return (dispatch, getState) => {
        var results = getState().Results_management.tables;
        var resultToGraph = results.find(result => result['id'] == resultId); // Get JSON data
        var graphData = prepareGraphData(resultToGraph);
        var graphObject = getGraphClass(graphData);
        graphObject.createData();

        var chart = {
            'id': Date.now(),
            'attached': false,
            'explanation': graphObject.displayMessage,
            'type': graphObject.type,
            'data': graphObject.data,
            'options': graphObject.options,
            'DisplayMessage': {
                message: '',
                type: 'alert-info'
            }
        }
        dispatch(display_chart(chart))

    }
}
const prepareGraphData = resultData => {
    /*
        @Func: Create JSON object required to initialize 'graph'.
        @Args (resultData): JSON Object
     */
    var graphObject = {};
    ( {
        Sector: graphObject.Sector,
        Topic: graphObject.Topic,
        Indicator: graphObject.Indicator,
        Unit: graphObject.Unit,
        SelectedGeo: graphObject.SelectedGeo,
        SelectedTimes: graphObject.SelectedTimes,
        displayMessage: graphObject.displayMessage

    } = resultData.searchObject );

    ({
        filterResult: graphObject.result
    } = resultData.resultObject);

    return graphObject;
}


const findItemInArray = function (itemId, array) {

    try {
        var foundItem = array.find(item => item['id'] == itemId)
    }
    catch(error){

    }
    finally{
        return foundItem;
    }
}


export {findItemInArray, prepareGraphData, getGraphClass}