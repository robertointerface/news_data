import download from 'downloadjs'
import {prepareRequestData} from 'functions/Create_new/CreateNewFunctions'
import {getDataRequest} from "functions/Create_new/CreateNewFunctions"
import {
    save_result,
    set_result_saved,
    set_flash_message,
    error_data_display,
    info_data_display,
    save_graph
} from "root/actions/actions";
import {getCookie} from "root/store/functions/auth/Cookies";
import {
    urls,
    flashFlags
} from 'constants/constants'

import {graph} from 'classes/graph'

export const handle_change_unit = (resultId, unitId) => {
    return (dispatch, getState) =>{
        var resultsMade = getState().Results_management.results;
        var foundResult = {...resultsMade.find(item => item['id'] == resultId)};
        foundResult.searchObject.Unit = findItemInArray(unitId, foundResult.searchObject.PossibleUnitMeasure);
        var requestObject = prepareRequestData(foundResult.searchObject);
        var dataRequestItem = getDataRequest(requestObject)
        return Promise.all([
            dataRequestItem.createAPIRequest(),
            dataRequestItem.makeAPIcall()
                .then(result =>{
                    return dispatch(save_result(result));
                })
        ])
    }

}



export const handle_save_result_user = resultId => {
    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken');
        var results = getState().Results_management.results
        var resutlToSave = results.find(result => result['id'] == resultId)
        var Authorization = `JWT ${localStorage.getItem('token')}`
        if(resutlToSave){
            var data = {
                'DataToSave': resutlToSave,
                'APIUrl': resutlToSave.searchObject.APIUrl
            }
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
                    return dispatch(info_data_display(resultId, 'data saved'))
                }
                else{
                    throw 'error saving, please try again.'
                }
            })
            .catch(error => {
               return dispatch(error_data_display(resultId, error))
            })
        }

    }
}

export const handle_excel_download = resultId => {
/*
    @Func: Call API to convert specific result data (JSON format) into an excel file.
    @Args: resultId,
    @return: Excel file to browser
 */
    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken');
        var results = getState().Results_management.results
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

export const handle_graph_result = resultId => {
    return (dispatch, getState) => {
        var results = getState().Results_management.results;
        var resultToGraph = results.find(result => result['id'] == resultId);
        var graphData = prepareGraphData(resultToGraph);
        var graphObject = new graph(graphData);
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
        var chart_to_save = JSON.parse(JSON.stringify(chart))
        dispatch(save_graph(chart_to_save))

    }
}

const prepareGraphData = resultData => {

    var graphObject = {};
    ( {
        Sector: graphObject.Sector,
        Topic: graphObject.Topic,
        Indicator: graphObject.Indicator,
        Unit: graphObject.Unit,
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


