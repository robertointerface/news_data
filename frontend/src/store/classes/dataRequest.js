import {ThirdPartyIPIBaseAddress} from '../initialData'
import {getCookie} from "functions/auth/Cookies";
import {save_result} from 'actions/actions'
import React from 'react';
import {urls} from 'constants/constants'

export class dataRequest {

    constructor(requestObject){
        this.Sector = requestObject.Sector;
        this.Topic = requestObject.Topic;
        this.Indicator = requestObject.Indicator;
        this.Unit = requestObject.Unit;
        this.ChangeUnits = requestObject.PossibleUnitMeasure;
        this.Times = requestObject.SelectedTimes;
        this.Geo = requestObject.SelectedGeo;
        this.queryMap = requestObject.queryMap;
        this.pathArray = [];
        this.result = {};
        this.APIUrl = '';
        this.displayMessage = this.createDisplayMessage();
        this.requestDate = Date.now()
    }

    createDisplayMessage(){
        /*
            @Fun: create short message that explains in a short sentence the data result.
            @return (string): composed message
         */
        var displayMessage = '';
        var orderArray = this.queryMap.UrlStructure.DisplayMessageOrder;
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
    createAPIRequest(){
        /*
            @Func: Create API Request url.
            @Return true if successful.
         */

        var baseUrl = ThirdPartyIPIBaseAddress.EuroStatUrl;
        this.APIUrl = `${baseUrl}/${this.Topic.id}?`;
        var pathParameter;
        for (var i of this.pathArray){
            pathParameter = '';
            pathParameter = pathParameter.concat(i.name, '=', i.value)
            this.APIUrl = this.APIUrl.concat('&', pathParameter)
        }
        console.log('this.APIUrl: ' + this.APIUrl);
        return true;
    }

    createEUpath(){
        /*
            @Func: Create Array of objects with syntax { name: "", value: "" }, each object represent a parameter that
             is used to create a Url path with syntax name=value.
         */
        this.addToPathArray(this.Indicator.id, this.queryMap.UrlStructure.IndicatorName);
        this.addToPathArray(this.Unit.id, this.queryMap.UrlStructure.UnitName);
        this.addToPathArray('1', 'precision');
        this.addToPathArray(this.Times, 'time');
        this.addToPathArray(this.Geo, 'geo');

        for (let key of Object.keys(this.queryMap.UrlStructure.extras)){
            this.addToPathArray(this.queryMap.UrlStructure.extras[key], key)
        }
        return true;
    }

    addToPathArray(item, name) {
        /*
            @Func: Create objects with syntax: { name: name, value: item}.
            if item is Array type, it iterates through the array by using urlOptionsIter() to create an object for
            each value in the array.
            @Args:
                item (string or array).
                name (string).
         */
        if((Array.isArray(item)) || (typeof item === 'string')) {
            if (Array.isArray(item)) {
                var it = this.urlOptionsIter();
                it.name = name;
                it.array = item;
                var iterator = it[Symbol.iterator]();
                for (var item of iterator) {
                    this.pathArray.push(item);
                }
            }
            else {
                var item = {
                    name: name,
                    value: item
                }
                this.pathArray.push(item)
            }
        }


        return true;
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

    makeAPIcall(){
        /*
            @Func: Make API call to get data. Call server and pass the composed url.

         */
        var csrftoken = getCookie('csrftoken');
        var data = {
            'APIUrl': this.APIUrl
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
                console.log('response after json: ' + JSON.stringify(response));
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
            Sector: searchObject.Sector,
            APIUrl: searchObject.APIUrl,
            Indicator: searchObject.Indicator,
            Unit: searchObject.Unit,
            ChangeUnits: searchObject.ChangeUnits,
            Times: searchObject.Times,
            Geo: searchObject.Geo,
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

    filterResult(){
        /*
            @Func: Organize given API result in format {name: GeoLocation (i.e UK), values: [](Array of values ordered chronologically)}
            @Return: (array of objects): each object is geoObject.
         */
        var timeLength = this.Times.length;
        var TimeIndexes = {};
        var values = this.result['value'];
        var finalValue = [];

        for (var time of this.Times){
            TimeIndexes[time] = this.getIndex('time', time);
        }

        for(var geo of this.Geo){
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

export default dataRequest

function isString(s) {
    return typeof(s) === 'string' || s instanceof String;
}

