




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


const removeReference = function(list=[], resultId){
/*
    @Func: Remove reference from state.Create_new.references given the required resultId
    @Args:
        List(array): state.Create_new.references
        resultId (integer): resultId to remove
    @Return: copy of list.
 */

    if(list.length > 0 && Number.isInteger(resultId)){
        return list.filter(item => {
            if(item['id'] == resultId){
                return false
            }else{
                return {...item}
            }
        })
    }
    return [...list]
}


export {pushReferenceToArray, removeReference}