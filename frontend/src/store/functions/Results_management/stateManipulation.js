

const pushResult = (list, newItem ) => {
    return [...list, newItem];
}


const pushGraph = (list, newItem ) => {
    return [...list, JSON.stringify(newItem)];
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

const setCharttAttached = (list, chartId) =>{
    var parsedList = list.map(chart =>  JSON.parse(chart))

    return parsedList.map(item =>{
        if(item.id == chartId){
            return JSON.stringify({
                ...item,
                attached: true
            })
        }
        return JSON.stringify(item);
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

const setErrorMessageAtDisplay = (list=[], resultId, message) => {
    return list.map(item => {
        if(item.id == resultId){
            return {
                ...item,
                DisplayMessage: {
                    message: message,
                }
            }
        }
        return item;
    })
}

const setInfoMessageAtDisplay = (list=[], resultId, message) => {
    return list.map(item => {
        if(item.id == resultId){
            return {
                ...item,
                DisplayMessage: {
                    message: message,
                    type: 'alert-info'
                }
            }
        }
        return item;
    })
}


const parseList = (list=[]) => {
    return list.map(item =>  JSON.parse(item))
}

export {
    pushResult,
    pushGraph,
    removeResult,
    resultSaved,
    setResultAttached,
    setCharttAttached,
    setResultUnattached,
    setErrorMessageAtDisplay,
    setInfoMessageAtDisplay,
    parseList
}