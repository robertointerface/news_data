import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";
import download from "downloadjs";


const getUserData = function(page=1){
    var csrftoken = getCookie('csrftoken'); //get saved cookie
    return fetch(`${urls.GET_USER_DATA}?page=${page}`, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Authorization': `JWT ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
    })
        .then(response => {
            if(response.status == 200){
                return response.json()
            }else{
                throw 'error loading data, please refresh site or try later'
            }
        })
        .then(response => {
            return {
                'tableCount': response['tableCount'],
                'tables': JSON.parse(response['tables'])
            }
        })
        .catch(error => {
            throw error
        })

}

const excel_download = data => {
    /*
        Download excel data

        @params
            data - Json object with data to be converted to excel

        @return
            On success - excel file (xls format) with corresponding data.
            On failure - throw error to propagate up.
     */
    var csrftoken = getCookie('csrftoken'); //get saved cookie
    var data = {
        'result': data.resultObject.filterResult,
        'searchObject': data.searchObject
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
    .catch(error => {

    })

}

export {getUserData, excel_download}