import EurostatDatabases from 'data/Eurostat/EurostatMap'
import OECDDatabases from 'data/OECD/OECDMap'
import UnescoDatabase from 'data/UNESCO/UNESCOMap'
import {ModelGeo, } from 'data/Geo/Geo'
import {Geo, OECDGeo} from 'classes/geo'

function isEmpty(obj) {
/*
    @Func: Verify if object is empty
    @Arg: obj: object
    @Return: true if object is empty, false if object is NOT empty
 */
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const getDatabase = thirdPartyAPI => {
/*
    @Func: obtain third party API map by providing an option.
    @Args: thirdPartyAPI(string)
    @Return: Object
 */
    switch (thirdPartyAPI) {
        case 'EU':
            return EurostatDatabases
        case 'OECD':
            return OECDDatabases
        case 'UNESCO':
            return UnescoDatabase
        default:
            return {}
    }
}

export const getSectors = {
/*
    @Iter: iterate over object composed of objects with syntax {SectorName: (string), id: {string} ...} and return
    an object with syntax {name: SectorName, id: id, select: false}.
    @Args: database(object): Object to iterate at.
    @Return: Object
 */
    [Symbol.iterator](database){
        let item = 0;
        var steps = database.length;
        return {
            [Symbol.iterator](){return this;},

            next() {
                if(item < steps) {
                     var CurrentValue = {
                         name: database[item].SectorName,
                         id: database[item].id,
                         select: false
                     };
                     item = item + 1;
                     return { value: CurrentValue, done:false};
                }
                else{
                    return { done: true }
                }
            },
            return(v){
                console.log('finished iterator');
                return{value: v, done: true};
            }
        }
    },
}








export const getTopicsArray = (thirdPartyAPI, sector) => {
    /*
        @Func:
        @params {string} sector: sector code number.
        @return {array}: copy of DataBases
     */
    for(var item of getDatabase(thirdPartyAPI)){
        if(item.id == sector){
            return [...item.Topics]
        }
    }
    return []
}

export const TopicsIterator = {
/*
    @Iter: iterate over object composed of objects with syntax {TopicName: (string), id: {string} ...} and return
    an object with syntax {name: SectorName, id: id, select: false}.
    @Args: database(object): Object to iterate at.
    @Return: Object
 */
    [Symbol.iterator]() {
        let item = 0;
        var TopicsLenght = this.topicsArray.length;
        var _this = this;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if(item < TopicsLenght){
                     var CurrentValue = {
                         name: _this.topicsArray[item].TopicName,
                         id: `${_this.topicsArray[item].id}-${_this.topicsArray[item].rev}`,
                         select: false
                     };
                     item = item + 1;
                     return { value: CurrentValue, done:false };
                }
                else{
                    return { done: true }
                }
            },
            return(v){
                console.log('finished iterator');
                return{value: v, done: true};
            }
        }
    },
    topicsArray: []
}






export const findQueryOptions = (thirdPartyAPI, sectorId, topicId) => {
    /*
        @func: Given a sector id and Topic id, it finds the corresponding queryOptions object and returns it.
        @Args: SectorId (string), topiId (string).
        @Returns: queryOptions Object.
     */
    var database = getDatabase(thirdPartyAPI)
    try {
        var sector = database.find(sector => sector['id'] == sectorId)
        var sectorTopics = sector['Topics']
        var topic = sectorTopics.find(topic => topic['id'] == topicId)
        var queryOptions = {
            UrlStructure: {...topic['UrlStructure']},
            Time: {...topic['Time']}
        }
    }
    catch (e) {
       var queryOptions = {}
    }
    finally {
        return queryOptions
    }
}

export const getVersion = (thirdPartyAPI, sectorId, topicId) => {
    /*

     */
    var database = getDatabase(thirdPartyAPI)

    try {
        var sector = database.find(sector => sector['id'] == sectorId)
        var sectorTopics = sector['Topics']
        var topic = sectorTopics.find(topic => topic['id'] == topicId)
        var version = topic['rev']
    }
    catch(e){
        var version = 1;
    }

    finally{
        return version;
    }
}

export const timeIterator = {
    /*
        @Iterator: providing a a start and an end, iterate in steps of 1.
        @Args:
            start (int):
            end (int):
        @Return:
            next(): object = {name: year(string), id: year(integer), checked: false (default)}
     */
    [Symbol.iterator](start, end){
        var year = start;
        return {
            [Symbol.iterator](){return this;},

            next() {
                if(year <= end){
                    var CurrentValue = {
                        name: year.toString(),
                        id: year,
                        checked: false
                    }
                    year++;
                    return {value: CurrentValue, done: false}
                }
                else{
                    return { done: true }
                }
            },
            return(v){
                 return{value: v, done: true};
            }
        }
    }
}



const GeoIterator = {
     [Symbol.iterator]() {
        var item = 0;
        var TopicsLenght = this.geoArray.length;
        var _this = this;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
            if(item < TopicsLenght){
                     var CurrentValue = {
                         name: _this.geoArray[item].Countryname,
                         id: _this.geoArray[item].CountryCode,
                         checked: false
                     };
                     item = item + 1;
                     return { value: CurrentValue, done:false };
                }
                else{
                    return { done: true }
                }
            },
            return(v){
                console.log('finished iterator');
                return{value: v, done: true};
            }
        }
     },
     geoArray: []
}


