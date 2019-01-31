
import {prepareRequestData} from 'functions/new_form/CreateNewFunctions'
import {getDataRequest} from "functions/new_form/CreateNewFunctions"
import {save_result} from "root/actions/actions";

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


