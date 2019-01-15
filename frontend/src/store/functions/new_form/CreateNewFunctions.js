import {
    fetching_data,
    select_topic,
    set_indicators,
    set_timeGeo,
    set_units,
    set_query_map,
    select_unit, save_result,
    save_reference
} from "actions/actions";

import EurostatDatabases from "data/Eurostat/EurostatMap";
import dataRequest from 'classes/dataRequest'
import {getCookie} from 'functions/auth/Cookies'
import {urls} from 'constants/constants'

export const handle_new_change = (e, prevstate) => {
    /*
        @Func: Get change in New Form and update the state.
        @Arg:
            e: Input that was changed
            prevstate: previous state of 'Create_new'
        @returns:
            newState: updated version of 'Create_new' state.
     */
    const name = e.target.name;
    const value = e.target.value;
    const newState = {...prevstate};
    newState[name] = value;
    return newState;
}

export const attach_reference = (id) => {
    return (dispatch, getState) => {

        try {

            var searchResults = getState().Results_management.results[id]
            if(searchResults.attached){
                throw 'already attached'
            }
            searchResults.attached = true;
        }
        catch (error) {
            var searchResults = '';
        }
        finally {

            return dispatch(save_reference(searchResults));
        }
    }
}



export const handle_indicator_request = (topicId='', topicName='') => {
    /*
        @Func: Request indicators and unit measures to server by providing a specific sector & topic.
        @Arg:
            topicId (string): Selected topic id.
            topicName (string): Topic name.
        @returns: promise with:
            set_query_map: find the time and Urlstructure and saved on state.
            set_timeGeo:

     */
    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken'); //get saved cookie
        var Sector = getState().Current_search.Sector.id; //get sector id
        dispatch(fetching_data());
        return fetch(`${urls.GET_INDICATORS}/${Sector}/${topicId}/`, {
                method: 'GET',
                mode: 'same-origin',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrftoken
                },
            })
            .then(response => {

                return response.json()
            })
            .then(response => {
                if(response.status == 'ok'){
                    return Promise.all([
                        dispatch(set_query_map(Sector, topicId)),
                        dispatch(set_timeGeo()),
                        dispatch(set_units(response['data']['units'])),
                        dispatch(set_indicators(response['data']['indicators'])),
                        dispatch(select_topic(topicId, topicName)),
                        dispatch(select_unit()),
                                        ])
                }
                else{

                }
            })
            .catch(error => {
                console.log('error: ' + error);
            })
    }
}


var findSector = {
    [Symbol.iterator](sector){
        let x = 0;
        return {
            [Symbol.iterator](){return this;},
            next(){
                let tempCode = EurostatDatabases[x].code;
                if(tempCode === sector){
                    var databases = [...EurostatDatabases[x].DataBases]
                    return{value: databases, done: false};
                }
                else{
                    x = x + 1;
                    return{value: false, done: false};
                }
            },
            return(v){
                console.log('finished iterator');
                return{value: v, done: true};
            }
        }
    }
}

export const getSectorTopics = sector => {
    var findSectorIterator = findSector[Symbol.iterator](sector)
    for (var v of findSectorIterator){
        if(v){
            var topics = createDisplayArrayForTopics(v)
            break;
        }
    }
    return topics;
}

export const markItemSelected = (list, newItem) => {
    var newList = JSON.parse(JSON.stringify(list));
    var clickedItem = newList.find(item => item['id'] == newItem);
    clickedItem.checked = true;
    return newList;
}

export const canMakeRequest = ( timeList, geoList ) => {
    var timeSelected = timeList.find(time => time['checked'] == true)
    var geoSelected = geoList.find(geo => geo['checked'] == true)
    if(timeSelected && geoSelected){
        return false;
    }
    return true;
}

export const setItemSelected = (list=[], id) => {
    /*
        @Func: set object property 'select=true' in given list.
            only one object can have select = true at the time and the previous selected item must be 'unselected'

        @args:
            list: Array of objects.
            id: string, object id which will be updated.
        @returns: updated list

     */
    var oldItem = list.find(item => item.select == true)
    if (oldItem){
        oldItem.select = false; //unselect previous selected Item
    }
    var itemSelected = list.find(item => item['id'] == id)
    if(itemSelected){
        itemSelected.select = true;
    }
    return list;

}

export const pushItemToArray = (list=[], item) => {
    /*
        @Func: Push item into array.
        @Args:
            list (array).
            item: (integer, string, object....).
        @return list (array).
     */
    if(item){
        list.push(item);
    }
    return list;
}

export const setUnitSelected = (list=[], id='') => {
    /*
        @Func: find object on list.
        @Args:
            list (Array): list of object with a compulsory property 'id'.
            id (string):  object id to find.
     */
    if(id.length == 0 || typeof id === 'undefined') {
        return {
            id: list[0]['id'],
            name: list[0]['name']
        };
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


export const handle_data_request = () => {
    return (dispatch, getState) => {
        var requestObject = prepareRequestData(JSON.parse(JSON.stringify(getState().Current_search)))
        var dataRequestItem = new dataRequest(requestObject);
        return Promise.all([
            dataRequestItem.createEUpath(),
            dataRequestItem.createAPIRequest(),
            dataRequestItem.makeAPIcall()
                .then(result =>{
                    return dispatch(save_result(result));
                })
        ])
    }
}

const prepareRequestData = CurrentSearch => {
    /*
        @Func: create an object with some arguments from state.Current_search in order to save it.
        @Arg:
            state.Current_search.
        @Return (object):

     */
    var requestObject = {};
    ( {
        ThirdPartyAPI: requestObject.ThirdPartyAPI,
        Sector: requestObject.Sector,
        Topic: requestObject.Topic,
        Indicator: requestObject.Indicator,
        PossibleUnitMeasure: requestObject.PossibleUnitMeasure,
        Unit: requestObject.Unit,
        queryMap: requestObject.queryMap,
        SelectedTimes: requestObject.SelectedTimes,
        SelectedGeo: requestObject.SelectedGeo

    } = CurrentSearch )

    return requestObject;
}

function getObjectFromArray(array, objectKey){

        var foundItem = array.find(item => item['id'] == objectKey);
        if (foundItem){
            return foundItem.name;
        }
        return array[0];
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


export const handle_publish_long_new = () =>{

    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken'); //get saved cookie
        var title = getState().Create_new.title
        var data = {
            title: title
        }
        return fetch(`${urls.PUBLISH_LON_NEW}`, {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res =>{

        })
    }
}




/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// POSSIBLE DELETE ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/*export const getSectorTopics = sector => {
    for (let i of EurostatDatabases){
        if (i.code == sector){
            let topics = createDisplayArrayForTopics(i['DataBases'])
            return topics;
        }
    }
}*/
/*
export const getDataBaseInfo = (sector, databaseCode) => {
    for (let i in EurostatDatabases) {
        if (EurostatDatabases[i].code == sector) {
            for (let k in EurostatDatabases[i].DataBases) {
                if (EurostatDatabases[i].DataBases[k].code === databaseCode) {
                    return EurostatDatabases[i].DataBases[k]
                }
            }
        }
    }
}*/


/*export const getSectorsByDatabase = database => {
    switch (database){
        case(DatabaseConstants.EU):
            return getSectors(EurostatDatabases)
        default:
            return []
    }
}*/
/*export const pushGeo = (list, newItem) => {
    var clickedGeo = list.find(time => time['id'] == newItem);
    clickedGeo.checked = true;
    clickedGeo.name += 'mod';
    return list;
}*/
/*


const getSectors = list => {
    var sectorArray = []
    try {
        for (let i in list) {
            sectorArray.push({name: list[i].SubTopicName, code: list[i].code})
        }
    }
    catch (e) {
        sectorArray = []
    }
    finally {
        return sectorArray
    }
}*/
