
import {prepareRequestData} from 'functions/new_form/CreateNewFunctions'
import {getDataRequest} from "functions/new_form/CreateNewFunctions"
import {
    save_result,
    set_result_saved,
    set_flash_message
} from "root/actions/actions";
import {getCookie} from "root/store/functions/auth/Cookies";
import {
    urls,
    flashFlags
} from 'constants/constants'
export const push_result = (list, newItem ) => {
    return [...list, newItem];
}

export const remove_result = (list, id) => {

    return list.filter(item =>  {
        if (item.id == id){
            return false
        }
        return true
    })

}

export const result_saved = (list, resultId) =>{
/*
    @Func: Find result and change status 'saved' to True
 */
    return list.map(item =>{
        if(item.id == resultId){
            return {
                ...item,
                saved: true
            }
        }
        return item;
    })

}
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
            .then(response=> response.json())
            .then(response => {
                if(response.status == 200){
                    return Promise.all([
                        dispatch(set_result_saved(resultId)),

                        ])
                }

            })
            .catch(error => {
                console.log('error: '+ error)
            })
        }

    }
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


