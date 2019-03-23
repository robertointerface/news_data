import {
    getTopicsArray,
    TopicsIterator,
    getSectors,
    getDatabase,
    timeIterator
} from 'functions/Current_search/SearchIterGen'
import {Geo, OECDGeo} from "classes/geo";

const markItemChecked = (list, id) => {
/*
    @Func: Given an array composed of objects with syntax {id:'', checked: false/true}, give the id of the
    object that the 'checked' property must be modified.
    @Args:
        List(array of object).
        id (string)
    Return: copy of list with modifications.

 */
     return list.map((item, index) => {
        if(item.id == id && item.checked == false){
            return {
                ...item,
                checked: true
            }
        }
        if(item.id == id && item.checked == true){
                return {
                ...item,
                checked: false
            }
        }
        return item
    })
}

const unSelectItems = (list) => {
/*
    @Func: Given an array composed of objects with syntax {id:'', checked: false/true}, it returns a copy of the array
    with all objects 'checked' property set to false.
    @Args: list(array)
    @return: copy of list(array)
 */
    return list.map(item => {
        if(item.checked){
            return {
                ...item,
                checked: false
            }
        }
        return {...item}
    })
}

const setItemSelected = (list=[], id) => {
/*
    @Func: set object property 'select=true' in given list.
        only one object can have select = true at the time and the previous selected item must be 'unselected'

    @args:
        list: Array of objects.
        id: string, object id which will be updated.
    @returns: updated list
 */

    var newList = list.map((item, index) =>{
        if(item.id == id && item.select == false){
            return {
                ...item,
                select: true
            }
        }
        if(item.select == true && item.id != id){
                return {
                ...item,
                select: false
            }
        }
        return item
    })

    return newList; // the list

}


const pushItemToArray = (list=[], item) => {
    /*
        @Func: Push item into array if Item is not in the array, if item is in the array remove from array and create
        a new list
        @Args:
            list (array).
            item: (integer, string, object....).
        @return list (array).
     */
    var itemIndex = list.indexOf(item);
    if(itemIndex >= 0){
        return list.filter(function (item, i){
            if(i == itemIndex){
                return false
            } else{
                return true
            }
        })
    }
    else{
        return [...list, item]; // return a copy of the new array with item added
    }
}


const pushGeoToArray = (list=[], id, name) => {
    /*
        @Func: Push new object into array if object is not in the array, if object is in the array remove from array and create
        a new list
        @Args:
            list (array).
            item: (integer, string, object....).
        @return list (array).
     */
    var itemIndex = list.findIndex(x => x['id'] == id)
    if(itemIndex >= 0){
        return list.filter(function (item, i){
            if(i == itemIndex){
                return false
            } else{
                return true
            }
        })
    }else{
        return [...list, {'id': id, 'name': name}]
    }
}


const setUnitSelected = (list=[], id='') => {
/*
    @Func: Given an array composed of objects with syntax {id: (string), name: (string)} find the object with the
    provided id and return it.
    If list is empty return empty object.
    if Id not provided and list is not empty return the object on array index 0 (first object on array)
    @Args:
        list (Array): list of object with a compulsory property 'id'.
        id (string):  object id to find.
    @Return: object
 */
    if(id.length == 0 || typeof id === 'undefined') {
        if(list.length >0){
            return {
                id: list[0]['id'],
                name: list[0]['name']
            };
        }
        else{
            return {};
        }

    }

    var item = list.find(item => item['id'] == id);
    if(item){
        return item;
    }

    return {
        id: list[0]['id'],
        name: list[0]['id']
    };

}

const getTopicsBySector = (thirdPartyAPI, sector) => {
/*
    @Func: given a third party API option and sector inside that API, return an array composed of objects from iterator
    TopicsIterator. (return sector topics)
    @Args:
        thirdPartyAPI (string): ThirdParty API options
        sector (string)
    @Return topics (array): Array of objects returned from TopicsIterator
 */
    TopicsIterator.topicsArray = getTopicsArray(thirdPartyAPI, sector);
    var it = TopicsIterator[Symbol.iterator]();
    var topics = [];
    if(TopicsIterator.topicsArray){
        for(var topic of it){
            topics.push(topic)
        }
    }
    return topics;
}

const createIndicatorUnitList = list => {
/*
    @Func: Given an list of object with syntax {key: description} Create an array of objects
*/
    var newList = [];
    Object.keys(list).map(key => {
        let tempObject = {
            id: key,
            name: list[key],
            select: false
        }
        newList.push(tempObject)
    });
    return newList;
}

const getSectorsByDatabase = thirdPartyAPI => {
/*
    @Func:Create array of objects composed of objects returned from 'getSectors' iterator.
    @Args: thirdPartyAPI(string): thirdParty API object that must be iterated.
    @Return: sectorArray(array)
 */
    var sectorArray = [];
    var iterator = getSectors[Symbol.iterator](getDatabase(thirdPartyAPI));

    for(var v of iterator){
        sectorArray.push(v);
    }

    return sectorArray;
}

const createTimeList = (start, end) => {
/*
    @Func: Given a start & end (start year & end year), uses timeIterator to iterate from start to end
    and create a list with of objects with syntax { name: year.toSting, id: year(integer), checked: default false }
        name: used for naming representation.
        id: used for computation, passed id when the item is checkd.
        checked: used for representation.
    @return: list (array).
 */
    var list = [];
    for(var year of timeIterator[Symbol.iterator](start, end)){
        list.push(year);
    }
    return list;
}

const getGeoClass = geoOption => {
/*
    @Func: Create class according to provided option
    @Args: geoOption (string)
    @Return: class object
 */
    switch(true){
        case (geoOption.location == 'OECD'):
            return new OECDGeo(geoOption)
        case (geoOption.location == 'EU') || (geoOption.location == 'Unesco') || (geoOption.location == 'UnescoEduRegions'):
            return new Geo(geoOption)
    }
}

const createGeoList = geoOption => {
/*
    @Func: create array of objects returned from generator on class Geo or OECDGeo
    @Args: geoOption (string)
    @Return: list (array) of objects.
 */

    var list = [];
    var geo = getGeoClass(geoOption);
    for(let location of geo){
        list.push(location)
    }
    return list
}


const setProgress100 = (indicator={}, timeList = [], GeoList = []) => {
    /*
        @Func: Verify if indicator, time and geo have been selected
        @params
            indicator - JSON object with reducer data Results_management.Indicator
            timelist - array with reducer data Results_management.SelectedTimes
            GeoList - array with reducer data Results_management.SelectedGeo

        @return
            if all items selected return 100
            otherwise return 80
     */
    if(!(Object.keys(indicator).length === 0 && indicator.constructor === Object) && timeList.length > 0 && GeoList.length > 0){
        return 100
    } else{
        return 80
    }
}



export {
    markItemChecked,
    unSelectItems,
    setItemSelected,
    pushItemToArray,
    setUnitSelected,
    getTopicsBySector,
    createIndicatorUnitList,
    getSectorsByDatabase,
    createTimeList,
    createGeoList,
    setProgress100,
    pushGeoToArray
}