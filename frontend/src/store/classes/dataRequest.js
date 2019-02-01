import {ThirdPartyIPIBaseAddress} from '../initialData'
import {getCookie} from "functions/auth/Cookies";
import {save_result} from 'actions/actions'
import React from 'react';
import {urls} from 'constants/constants'
import {SearchConstants as C} from 'constants/constants'

class dataRequest {

    constructor(requestObject){
        this.ThirdPartyAPI = requestObject.ThirdPartyAPI;
        this.Sector = requestObject.Sector;
        this.Topic = this.filterTopic(requestObject.Topic);
        this.Indicator = requestObject.Indicator;
        this.Unit = requestObject.Unit;
        this.PossibleUnitMeasure = requestObject.PossibleUnitMeasure;
        this.SelectedTimes = requestObject.SelectedTimes;
        this.SelectedGeo = requestObject.SelectedGeo;
        this.queryMap = requestObject.queryMap;
        this.extra = this.getExtras();
        this.pathArray = [];
        this.result = {};
        this.APIUrl = '';
        this.displayMessage = this.createDisplayMessage();
        this.requestDate = Date.now()
    }

    getExtras() {
        if (this.queryMap.extras) {
            return this.queryMap.extras
        }
        return null;
    }

    filterTopic(topic){

        /*
            @Func: Topic.id is in the form 'topic-rev', in order to make an API query the Topic.id needs to be in
            form 'topic' since the 'rev' is for internal uses purpose, if this is not performed the API query will be
            wrong and data can not be queried.
         */
        return {...topic, id: topic.id.split('-')[0]}

    }

    createDisplayMessage(){
        /*
            @Fun: create short message that explains in a short sentence the data result.
            @return (string): composed message
         */
        var displayMessage = '';
        var orderArray = this.queryMap.DisplayMessageOrder;
        for (var item of orderArray){ //iterate over array DisplayMessageOrder to find out the order the message should
                                        //be displayed.
            if (this[item]){
                displayMessage = displayMessage.concat(this[item].name, ' ');
            }
            else{
                displayMessage = displayMessage.concat(item, ' ');
            }
        }
        return displayMessage;
    }

    getObjectFromArray(array, objectKey){

        var foundItem = array.find(item => item['id'] == objectKey);
        if (foundItem){
            return foundItem.name;
        }
        return array[0];
    }




    makeAPIcall(){
        /*
            @Func: Make API call to get data. Call server and pass the composed url.

         */
        var csrftoken = getCookie('csrftoken');
        var data = {
            'APIUrl': this.APIUrl,
            'API': this.ThirdPartyAPI.id
        }
        return fetch(`${urls.MAKE_API_CALL}`, {
                method: 'POST',
                mode: 'same-origin',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                return response.json()
            })
            .then(response => {
                //console.log('response after json: ' + JSON.stringify(response));
                if(response['status'] == 200){
                    var jsonResult = JSON.parse(response['result'])
                    this.result = JSON.parse(JSON.stringify(jsonResult)); //Save API call result on this.result
                    return this.createSaveObject();
                }
                else{
                    throw ('Could not get data, please try again. If error persists please contact us and let us know.')
                }
            })
            .catch(err => {
                throw (err)
            })
    }

    createSaveObject(){
        /*
            @Func: Create object with filtered result obtained from API call and details of made request.
            Data is saved so the user has the possibility of saving the data.
            Details of made request is saved so user can request the same data in different format.

         */
        var searchObject = {};
        ({
            ThirdPartyAPI: searchObject.ThirdPartyAPI,
            Sector: searchObject.Sector,
            Topic: searchObject.Topic,
            APIUrl: searchObject.APIUrl,
            Indicator: searchObject.Indicator,
            Unit: searchObject.Unit,
            PossibleUnitMeasure: searchObject.PossibleUnitMeasure,
            SelectedTimes: searchObject.SelectedTimes,
            SelectedGeo: searchObject.SelectedGeo,
            queryMap: searchObject.queryMap,
            requestDate: searchObject.requestDate,
            displayMessage: searchObject.displayMessage,
        } = this) //copy parameters for this.

        var filterResult = [...this.filterResult()]
        var resultObject = {
            rawResult: this.result,
            filterResult: filterResult
        };

        var saveObject = {
            id: Date.now(),
            resultObject: {...resultObject},
            searchObject: {...searchObject},
            attached: false
        }

        return saveObject;
    }

    urlOptionsIter () {
        /*
            @Iter: Iterate through a given array and create objects with the syntax:
                obj = {
                    name: this.name,
                    value: array[x]
                }
            @Args:
                array (type: array): of string or int values.
                name: name that will be used to create the object.
         */
         var obj = {
                 [Symbol.iterator]() {
                     var item = 0;
                     var arrayLenght = this.array.length;
                     var _this = this;
                     return {
                         [Symbol.iterator]() {
                             return this;
                         },
                         next() {
                             if (item < arrayLenght) {
                                 var CurrentValue = {
                                     name: _this.name,
                                     value: _this.array[item],
                                 };
                                 item = item + 1;
                                 return {value: CurrentValue, done: false};
                             }
                             else {
                                 return {done: true}
                             }
                         },
                         return(v) {
                            return{value: v, done: true};
                         }
                     }
                 },
                 array: [],
                 name: ''
         }
        return obj;
    }

    addToPathArray(item, name='') {
        /*
            @Func: Create objects with syntax: { name: name, value: item}.
            if item is Array type, it iterates through the array by using urlOptionsIter() to create an object for
            each value in the array.
            @Args:
                item (string, array or object).
                name (string on none).
         */
        if((Array.isArray(item)) || (typeof item === 'string') || (typeof item == 'object')) {
            if (Array.isArray(item)) {
                var it = this.urlOptionsIter();
                it.name = name;
                it.array = item;
                var iterator = it[Symbol.iterator]();
                for (var item of iterator) {
                    this.pathArray.push(item);
                }
            }
            else if(typeof item === 'string') {
                var item = {
                    name: name,
                    value: item
                }
                this.pathArray.push(item)
            }
            else{
                for (let key of Object.keys(item)){
                    this.addToPathArray(item[key], key)
                }
            }
        }
        return true;
    }

    addPathArrayToUrl(){
        if(this.pathArray){
            for(let i of this.pathArray){
                let pathParameter = '';
                pathParameter = pathParameter.concat(i.name, '=', i.value)
                this.APIUrl = this.APIUrl.concat(pathParameter, '&')
            }
        }
    }
}


class EUdataRequest extends dataRequest{

    constructor(requestObject) {
        super(requestObject)
    }
    createAPIRequest(){
        /*
            @Func: Create API Request url.
            @Return true if successful.
         */
        return Promise.all([
            this.createPath(),
            this.APIUrl = `${ThirdPartyIPIBaseAddress.EuroStatUrl}/${this.Topic.id}?`,
            this.addPathArrayToUrl(),
        ])
        .catch(error => {

        })

    }

    createPath(){
        /*
            @Func: Create Array of objects with syntax { name: "", value: "" }, each object represent a parameter that
             is used to create a Url path with syntax name=value.
         */
        this.addToPathArray(this.Indicator.id, this.queryMap.IndicatorName);
        this.addToPathArray(this.Unit.id, this.queryMap.UnitName);
        this.addToPathArray('1', 'precision');
        this.addToPathArray(this.SelectedTimes, 'time');
        this.addToPathArray(this.SelectedGeo, 'geo');
        this.addToPathArray(this.extra);
        return true;
    }

    filterResult(){
        /*
            @Func: Organize given API result in format {name: GeoLocation (i.e UK), values: [](Array of values ordered chronologically)}
            @Return: (array of objects): each object is geoObject.
         */
        var timeLength = this.SelectedTimes.length;
        var TimeIndexes = {};
        var values = this.result['value'];
        var finalValue = [];

        for (var time of this.SelectedTimes){
            TimeIndexes[time] = this.getIndex('time', time);
        }

        for(var geo of this.SelectedGeo){
            let geoIndex = this.getIndex('geo', geo);
            let geoObject = {
                name: geo,
                values: []
            }
            let start = geoIndex * timeLength;
            let end = start + timeLength;
            for(let i = start; i < end; i++){
                if(values[i]!=null) {
                     geoObject.values.push(values[i]);
                }
                else{
                    geoObject.values.push(null);
                }
            }
            finalValue.push(geoObject);

        }
        return finalValue;
    }

    getIndex(type, name){
        //var lavelObject = this.result['dimension'].parameter['category']['label'];
        var indexObject = this.result['dimension'][type]['category']['index'];
        var index = indexObject[name]
        return index;
    }
}

class OECDdataRequest extends dataRequest {

    constructor(requestObject) {
        super(requestObject)
        this.TimeType = this.queryMap.TimeType
        this.orderConstants = {
            'E': 'extra',
            'I': 'Indicator',
            'U': 'Unit',
            'G': 'SelectedGeo',
            'TT': 'TimeType'
        }
        this.receivedCountries = []
    }

    createTimeOptions(){
        /*
            @Fun: Get minimum and maximum years from this.SelectedTimes and add them to pathArray
         */
        var minYear = Math.min(...this.SelectedTimes)
        var maxYear = Math.max(...this.SelectedTimes)
        this.addToPathArray(minYear.toString(), 'startTime');
        this.addToPathArray(maxYear.toString(), 'endTime');
    }

    createGeoOptions(){
        /*
            @Func: Create string composed of a concatenation of this.SelectedGeo array in order to create a API request
            with the required locations.
         */
        var locations = this.SelectedGeo;
        var geoPath = '';
        for(let location of locations){
            geoPath = geoPath.concat(location, '+');
        }
        geoPath = geoPath.slice(0, geoPath.length - 1)
        return geoPath
    }

    addToPath(itemToAdd){
        var pathItem = ''
        if ((Array.isArray(itemToAdd)) || (typeof itemToAdd === 'string') || (typeof itemToAdd == 'object' && itemToAdd != null)) {
            if (Array.isArray(itemToAdd)) {
                for (let y of itemToAdd) {
                    pathItem = pathItem.concat('.', y);
                    //this.APIUrl = this.APIUrl.concat('.', y);
                }
            }
            else if(typeof itemToAdd == 'object'){
                if(itemToAdd.hasOwnProperty('id')){
                    pathItem = pathItem.concat('.', itemToAdd.id);
                   // this.APIUrl = this.APIUrl.concat('.', itemToAdd.id);
                }
                else{
                    for(var key in itemToAdd) {
                        pathItem = pathItem.concat('.', itemToAdd[key]);
                        //this.APIUrl = this.APIUrl.concat('.', itemToAdd[key]);
                    }
                }
            }
            else if (typeof itemToAdd === 'string') {
                pathItem = pathItem.concat('.', itemToAdd);
                //this.APIUrl = this.APIUrl.concat('.', itemToAdd);
            }
        }

        return pathItem;
    }

    createPath() {
        var order = this.queryMap.orderOption;
        var path = '';
        for (let item of order) {
            switch(true){
                case (item == 'I') || (item == 'E') || (item == 'U') || (item == 'TT'):
                    var x = this[this.orderConstants[item]];
                    //this.addToPath(x);
                    if(x != null) {
                        path = path.concat(this.addToPath(x));
                    }
                    break;
                case (item=='G'):
                    path = path.concat('.', this.createGeoOptions());
                    //this.APIUrl = this.APIUrl.concat('.', this.createGeoOptions());
                    break;
                default:
                    break;
            }
        }
        path = path.slice(1, path.length)
        return path;
       // path = path.slice(1) // required to remove '.' at the beginning of the string
    }

    createAPIRequest(){
        return Promise.all([
            this.APIUrl = ThirdPartyIPIBaseAddress.OCDE,
            this.APIUrl = this.APIUrl.concat('/', this.Topic.id),
            this.APIUrl = this.APIUrl.concat('/', this.createPath()),
            this.APIUrl = this.APIUrl.concat('/all?'),
            this.createTimeOptions(),
            this.addPathArrayToUrl(),
        ])
    }


    filterResult(){
        /*
            @Func: Extract the result given by OECD API and organized it with the object structured.
                geoObject = {name: country name, values: array composed of country values. }
            The OECD API returns two JSON Objects:
                1- Data (only numbers organized by indices, e.g 1:0:0 = {342.45}, no legend on what data means).
                2- Indices explanation that is used to organized data by country and time.
         */
        try{
            var finalValue = []
            var result = JSON.parse(JSON.stringify(this.result['dataSets'][0]['series'])) //get the returned OECD api result
            var rowOrder = this.getKeyPositions(this.result['structure']['dimensions']['series'])
            var columnOrder = this.getTimePositions(this.result['structure']['dimensions']['observation'])
            var expectedValuesLength = this.getExpectedNumberOfValues()
            var receivedValuesLength = this.getRecievedNumberOfValues(rowOrder, columnOrder)
            var recievedTimes = this.filterTimes(columnOrder);
            var Locationindex = rowOrder.findIndex(x => (x['name'] == 'LOCATION') ||
                                                        (x['name'] == 'COU') ||
                                                        (x['name'] == 'COUNTRY'))
            for(var location in rowOrder[Locationindex].values){
                var geoObject = {
                    name: rowOrder[Locationindex].values[location],
                    values: []
                }

                var locationData = Array.from({length: rowOrder.length}, (v, i) => 0) // create array

                locationData[Locationindex] = location
                var seriesData = locationData.reduce((acc, i) => {
                    return acc.concat(`${i}`, ':')
                }, '')// convert locationData array into string '0:0:0:...' length of '0' is the length of
                    // array locationData
                seriesData = seriesData.slice(0, seriesData.length - 1)//remove last character ':'
                var data = result[seriesData]['observations']
                for(var time of recievedTimes){
                    var timeIndex = columnOrder.indexOf(time)
                    try {
                        var value = data[timeIndex.toString()][0].toFixed(2);
                    } catch{
                        var value = null
                    } finally{
                        geoObject.values.push(value)
                    }
                }
                finalValue.push(geoObject)
            }

        } catch (error){

        } finally { // if values for specific location not returned put them to '...'
            for(var location of this.SelectedGeo){
                var indexInResult = finalValue.findIndex(x => x['name'] == location)
                if (indexInResult < 0){
                    var geoObject = {
                        name: location,
                        values: []
                    }
                    for(let time in this.SelectedTimes) {
                        geoObject.values.push(null);
                    }
                    finalValue.push(geoObject)
                }
            }
        }
        return finalValue
    }



    filterTimes(obtainedTimes){
        /*
            @Func: Verify which of the asked times where returned by the OECD API.
         */
        var gotTimes = this.SelectedTimes.map(i => {
            var found = obtainedTimes.find(x => x == i)
            if (found){
                return found;
            }
        })
        return gotTimes;

    }

    getRecievedNumberOfValues(rowOrder, columnOrder){
        /*
            @Func: Calculate the number of values returned by the API multiplying years * countries.
         */
        var rowLength = rowOrder.reduce((acc, row) => {
            if(Array.isArray(row)){
                return acc * row.length
            }else{
                return acc * 1
            }
        }, 1)

        return columnOrder.length * rowLength

    }


    getExpectedNumberOfValues(){
        /*
            @Func: Calculate the number of values that should have been returned by our request.
         */
        var selectedTimesLength = this.SelectedTimes.length
        var selectedGeoLength = this.SelectedGeo.length
        return selectedTimesLength * selectedGeoLength
    }

    getKeyPositions(series){
        /*
            @Func: Data is returned with a combination indices, indices look like like '2:0:0' or '0:0:0:0' where each
            number describes parameters like country data, year of data, unit of measure...
            @In order to organized data by country and year, it is required to know.
                1- what parameter each index belongs to, e.g '2:0:0' the '2' index is related to countries, the first '0'
                (after the 2) is related to year and the last '0' belongs to units of measures.
                2- inside an index
            This functions gets parameter 1, it finds what index belongs to what
         */
        var keyPositions = new KeyPostitions()
        for(let serie of series){
            if(serie['values']){
                keyPositions.push(serie['values'], serie['id'])
            }
        }
        return keyPositions;
    }

    getTimePositions(observations){
        /*
            @Func: Convert Times returned by API into intergers
         */
        if(observations[0]['id'] == "TIME_PERIOD"){
            var times = observations[0]['values'].map(time => parseInt(time['id']))
            return times;
        }

    }

    getGeoOrder(series){ //CLEAN THIS, LESS LOOPING
        var geoOrder = [];
        for(let serie of series){
            if(serie['id'] == 'LOCATION'){
                for(let location of serie['values']){
                    geoOrder.push(location['id'])
                }
            }
        }
    }

}

class KeyPostitions extends Array{
    /*
        @Array: Extension of array with customize push functionality.
            @push: Creates an Object 'newObject', populates it and push it into the array
     */
     push(objectToPush, name){
        if(Array.isArray(objectToPush)) {
            if (objectToPush.length > 1) {
                var newObject = {name: name,
                                 values: []
                }
                for(let i = 0; i < objectToPush.length; i++){
                    newObject.values.push(objectToPush[i]['id'])
                }
                return super.push(newObject);
            } else {
                var newObject = {name: name,
                                 values: objectToPush[0]['id']
                }
                return super.push(newObject);
            }
        }
     }


}

class UnescoDataRequest extends dataRequest {

    constructor(requestObject){
        super(requestObject);
    }

    getSector(){
        return this.Sector.id.split("-Rev")[0];
    }

    createTimeOptions(){
        /*
            @Fun: Get minimum and maximum years from this.SelectedTimes and add them to pathArray
         */
        var minYear = Math.min(...this.SelectedTimes)
        var maxYear = Math.max(...this.SelectedTimes)
        this.addToPathArray('sdmx-json', 'format');
        this.addToPathArray(minYear.toString(), 'startPeriod');
        this.addToPathArray(maxYear.toString(), 'endPeriod');
        this.addToPathArray('en', 'locale')

    }

    createGeoOptions(){
        /*
            @Func: Create string composed of a concatenation of this.SelectedGeo array in order to create a API request
            with the required locations.
         */
        var locations = this.SelectedGeo;
        var geoPath = '';
        for(let location of locations){
            geoPath = geoPath.concat(location, '+');
        }
        geoPath = geoPath.slice(0, geoPath.length - 1)
        return geoPath
    }

    addToPath(itemToAdd){
        if ((Array.isArray(itemToAdd)) || (typeof itemToAdd === 'string') || (typeof itemToAdd == 'object' && itemToAdd != null)) {
            if (Array.isArray(itemToAdd)) {
                for (let y of itemToAdd) {
                    this.APIUrl = this.APIUrl.concat(y, '.');
                }
            }
            else if(typeof itemToAdd == 'object'){
                if(itemToAdd.hasOwnProperty('id')){
                    this.APIUrl = this.APIUrl.concat(itemToAdd.id, '.');
                }
                else{
                    for(var key in itemToAdd) {
                        this.APIUrl = this.APIUrl.concat(itemToAdd[key], '.');
                    }
                }
            }
            else if (typeof itemToAdd === 'string') {
                this.APIUrl = this.APIUrl.concat(itemToAdd, '.') ;
            }
        }
    }

    createPath(){
        var order = this.queryMap.orderOption;
        for (let item of order){
            switch(true){
                case (item == C.TOPIC) ||(item == C.INDICATOR) || (item == C.MEASURE):
                    var x = this[item];
                    this.addToPath(x);
                    break;
                case (item == C.GEO):
                    this.APIUrl = this.APIUrl.concat(this.createGeoOptions());
                    break;
                default:
                    this.addToPath(item);
                    break;
            }
        }
    }

    createAPIRequest(){
        return Promise.all([
            this.APIUrl = ThirdPartyIPIBaseAddress.Unesco,
            this.APIUrl = this.APIUrl.concat(',', this.getSector(), ',', '1.0', '/'),
            this.createPath(),
            this.createGeoOptions(),
            this.APIUrl = this.APIUrl.concat('?'),
            this.createTimeOptions(),
            this.addPathArrayToUrl(),
        ])
    }
}

export {dataRequest, EUdataRequest, OECDdataRequest, UnescoDataRequest}