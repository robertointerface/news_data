

const pushResult = (list, newItem ) => {
    return [...list, newItem];
}

const removeResult = (list, id) => {

    return list.filter(item =>  {
        if (item.id == id){
            return false
        }
        return true
    })

}

const resultSaved = (list, resultId) =>{
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


const setResultAttached = (list, resultId) =>{
     return list.map(item =>{
        if(item.id == resultId){
            return {
                ...item,
                attached: true
            }
        }
        return item;
    })
}


const setResultUnattached = (list=[], resultId) =>{
     return list.map(item =>{
        if(item.id == resultId){
            return {
                ...item,
                attached: false
            }
        }
        return item;
    })
}

export {pushResult, removeResult, resultSaved, setResultAttached, setResultUnattached}