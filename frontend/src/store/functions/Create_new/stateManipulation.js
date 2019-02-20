

import {parseList} from 'functions/Results_management/stateManipulation'


const pushReferenceToArray = (list=[], item) => {
    /*
        @Func: Push item into array if Item is not in the array, if item is in the array remove from array and create
        a new list
        @Args:
            list (array).
            item: (integer, string, object....).
        @return list (array).
     */
    var itemIndex = list.indexOf(item);
    if((itemIndex >= 0)){
        return list.filter(function (item, i){
            if(i == itemIndex){
                return false;
            } else{
                return true;
            }
        })
    }
    else{
        return [...list, item]; // return a copy of the new array with item added
    }
}




const removeTableReference = function(list=[], tableId){
/*
    @Func: Remove table reference from state.Create_new.references.tables given the required id
    @Args:
        List(array): state.Create_new.references.tables
        tableId (integer): object 'id' to remove
    @Return: copy of list without the deleted table;
 */

    if(list.length > 0 && Number.isInteger(tableId)){
        return list.filter(item => {
            if(item['id'] == tableId){
                return false
            }else{
                return {...item}
            }
        })
    }
    return [...list]
}


const removeChartReferences = function(list=[], chartId){
    /*
        @Func: Remove chart from state.Create_new.references.charts given the required id
        @Args:
            List(array): state.Create_new.references.charts, this is not an array of JSON Objects, is an array of
            STRINGIFIED JSON objects, necessary to avoid CIRCULAR ERRORS.
            chartId (integer): object 'id' to remove.
        @Return: Copy of 'list' without the chart that is required to be removed
     */
    var parsedList = parseList(list) //parse list (convert it into a list of JSON objects).
    if(parsedList.length > 0 && Number.isInteger(chartId)) {
        return parsedList.filter(item => {
            if(item['id'] == chartId){
                return false
            }else{
                return JSON.stringify(item) //Objects must be stringified again to avoid CIRCULAR ERRORS.
            }
        })
    }

}

export {
    pushReferenceToArray,
    removeTableReference,
    removeChartReferences}