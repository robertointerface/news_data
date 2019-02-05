

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


export {removeReference}