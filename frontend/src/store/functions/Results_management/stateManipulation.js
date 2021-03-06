

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

const removeGraph = (list=[], id) => {
    var parsedList = list.map(chart =>  JSON.parse(chart));

    parsedList = parsedList.filter(item =>  {
        if (item.id == id){
            return false
        }
        return true;
    })

    return stringifyList(parsedList);
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


const toogleTableAttached = (list, resultId) =>{
     return list.map(item =>{
        if(item.id == resultId){
            return {
                ...item,
                attached: !item.attached
            }
        }
        return item;
    })
}

const toogleChartAttached = (list, chartId) =>{
    var parsedList = list.map(chart =>  JSON.parse(chart))

    return parsedList.map(item =>{
        if(item.id == chartId){

            return JSON.stringify({
                ...item,
                attached: !item.attached
            })
        }
        return JSON.stringify(item);
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

const setChartInfoMessageAtDisplay = (list=[], chartId, message) => {
    var parsedList = parseList(list);

    return parsedList.map((chart, i) => {
        if(chart.id == chartId){
            return JSON.stringify({
                ...chart,
                DisplayMessage: {
                    message: message,
                    type: 'alert-info'
                }
            })
        }
        return JSON.stringify(chart);
    });

}

const parseList = (list=[]) => {
    /*
        @Func: convert an array of stringified JSON object into an array of JSON objects
        (parse the stringified JSON objects inside the array)
        @Args: List (array): array composed of Stringified JSON objects.
        @Return: List composed of JSON objects or empty array if error.
     */
    try{
        return list.map(item =>  JSON.parse(item))
    }
    catch (e) {
        return [];
    }
}

const stringifyList = (list=[]) => {

    try{
        return list.map(item =>  JSON.stringify(item))
    }
    catch (e) {
        return []
    }
}


export {
    pushResult,
    pushGraph,
    removeResult,
    removeGraph,
    resultSaved,
    toogleTableAttached,
    toogleChartAttached,
    setErrorMessageAtDisplay,
    setInfoMessageAtDisplay,
    setChartInfoMessageAtDisplay,
    parseList
}