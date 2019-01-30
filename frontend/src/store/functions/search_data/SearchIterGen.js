import EurostatDatabases from 'data/Eurostat/EurostatMap'
import OECDDatabases from 'data/OECD/OECDMap'
import UnescoDatabase from 'data/UNESCO/UNESCOMap'
import {ModelGeo, } from 'data/Geo/Geo'
import {Geo, OECDGeo} from 'classes/geo'
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const getDatabase = thirdPartyAPI => {
    /*
        @func: Get
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

const getSectors = {
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




export const getSectorsByDatabase = thirdPartyAPI => {
    /*
        @Func:Create array of objects by passing
     */
    var sectorArray = [];
    var iterator = getSectors[Symbol.iterator](getDatabase(thirdPartyAPI));

    for(var v of iterator){
        sectorArray.push(v);
    }

    return sectorArray;
}



const getTopicsArray = (thirdPartyAPI, sector) => {
    /*
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

const TopicsIterator = {
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

export const getTopicsBySector = (thirdPartyAPI, sector) => {
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

export const createIndicatorUnitList = list => {
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

const timeIterator = {
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

export const createTimeList = (start, end) => {
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

/*export const createGeoList = geoOption => {
    /!*
        @Func: Given a Geographical area it returns a list of countries in that Geographical area.
        @Args: geoOption (string) describing the Geographical area, EU, USA, OECD
        @Returns: List of objects.
     *!/
    var list = []
    try{
        GeoIterator.geoArray = ModelGeo[geoOption];
        var it = GeoIterator[Symbol.iterator]();
        if (GeoIterator.geoArray){
            for(var geo of it){
                list.push(geo)
            }
        }
    }
    catch{
        GeoIterator.geoArray = [];
        list = [];
    }
    finally{
        return list;
    }
}*/

const getGeoClass = geoOption => {
    /*

     */
    switch(true){
        case (geoOption.location == 'OECD'):
            return new OECDGeo(geoOption)
        case (geoOption.location == 'EU') || (geoOption.location == 'Unesco') || (geoOption.location == 'UnescoEduRegions'):
            return new Geo(geoOption)

    }

}

export const createGeoList = (geoOption) => {

    var list = [];
    var geo = getGeoClass(geoOption);
    for(let location of geo){
        list.push(location)
    }
    return list
}