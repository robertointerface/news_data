
import {prepareRequestData} from 'functions/new_form/CreateNewFunctions'
import dataRequest from "root/store/classes/dataRequest";
import {save_result} from "root/actions/actions";

export const push_result = (list, newItem ) => {
    list.push(newItem);
    return list;
}

export const handle_change_unit = (resultId, unitId) => {
    return (dispatch, getState) =>{
        var resultsMade = getState().Results_management.results;
        var foundResult = {...resultsMade.find(item => item['id'] == resultId)};
        foundResult.searchObject.Unit = findItemInArray(unitId, foundResult.searchObject.PossibleUnitMeasure);
        var requestObject = prepareRequestData(foundResult.searchObject);
        var dataRequestItem = new dataRequest(requestObject);
        return Promise.all([
            dataRequestItem.createEUpath(),
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


