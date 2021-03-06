import {
    fetching_data,
    select_topic,
    set_indicators,
    set_timeGeo,
    set_units,
    set_query_map,
    select_unit,
    display_table,
    attach_table,
    attach_graph,
    finished_requestiong,
    set_table_attached,
    error_search_data,
    set_chart_attached,
    clean_new_state,
    clean_current_search,
    clean_result_management,
    app_fetching
} from "actions/actions";
import {history} from 'root/App.js';
import {getDatabase} from 'functions/Current_search/SearchIterGen'
import EurostatDatabases from "data/Eurostat/EurostatMap";
import {EUdataRequest, OECDdataRequest, UnescoDataRequest}  from 'classes/dataRequest'
import {getCookie} from 'functions/auth/Cookies'
import {urls, DatabaseConstants as thirdParty} from 'constants/constants'
import {dataRequest} from "root/store/classes/dataRequest";

export const handle_new_change = (e, prevstate) => {
    /**
        @Func: Get change (keyboard interrupt) in New Form and update the state.
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




export const attach_data_reference = (id) => {
    /** Performed when user clicks on 'attach' button for either table or chart.
        @Func: Get tables from Results_management.tables and call attach_table if result was not attached yet.
        @Arg: id(int) time.stamp when reference was requested and is the Identification of the reference.
        @Return: 'dispatch(attach_table(table))', if the object is already attached, an empty object is attached
        (nothing gets attached). Otherwise attach the table.
     */
    return (dispatch, getState) => {
        try {
            var table = getState().Results_management.tables.find(item => item.id == id)
            if(table.attached){
                throw 'already attached'
            }
            dispatch(set_table_attached(id))
        }
        catch (error) {
            var table = '';
        }
        finally {
            return dispatch(attach_table(table));
        }
    }
}



export const attach_graph_reference = (id) => {
    /** performed When user clicks on 'attach' button for either table or chart
        @Func:
            1-Get charts from Results_management.charts.
            2-Find if chart is attached already or not.
            3-Attach graph 'attach_graph' if chart was not attached yet.
        @Arg: id(int) time.stamp when reference was requested and is the Identification of the reference.
        @Return: 'dispatch(attach_graph(table))', if the object is already attached, an empty object is attached
        (nothing gets attached). Otherwise attach the table.
     */
     return (dispatch, getState) => {
        try {

            var charts = getState().Results_management.charts
            charts = charts.map(chart =>  JSON.parse(chart)) //charts array is composed of STRINGIFIED JSON objects and needs to be parse before it can be analyze.
            var chartToAttach = charts.find(chart => chart.id == id)

            if(chartToAttach.attached){
                throw 'already attached'
            }
            dispatch(set_chart_attached(chartToAttach.id))
        }
        catch (error) {
            var chartToAttach = '';
        }
        finally {
            return dispatch(attach_graph(JSON.stringify(chartToAttach)));
        }
    }
}

export const getTopicMap = (thirdPartyAPI, sectorId, topicId) => {
    /**
        @func: Given a sector id and Topic id, it finds the corresponding queryOptions object and returns it.
        @Args: SectorId (string), topiId (string).
        @Returns: queryOptions Object.
     */
    var rev = parseInt(topicId.split('-')[1])
    topicId = topicId.split('-')[0]

    var database = getDatabase(thirdPartyAPI)
    try {
        var sector = database.find(sector => sector['id'] == sectorId)
        var sectorTopics = sector['Topics']
        var topic = sectorTopics.find(topic => topic['id'] == topicId && topic['rev'] == rev)
    }
    catch (e) {
       var topic = {}
    }
    finally {
        return topic
    }
}

export const handle_indicator_request = (topicId='', topicName='') => {
    /**
        @Func: Request indicators and unit measures to server by providing a specific sector & topic.
        @Arg:
            topicId (string): Selected topic id.
            topicName (string): Topic name.
        @returns:
            promise with:
                set_query_map: find the time and Urlstructure and saved on state.
                set_timeGeo: Create time and geo lists.
                set_units: copy to state the unit list returned from the server
                set_indicators: copy to state the indicator list returned from the server
                select_unit: select a default unit
            catch error: error_search_data
     */
    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken'); //get saved cookie
        var Sector = getState().Current_search.Sector.id; //get sector id
        var ThirdPartyAPI = getState().Current_search.ThirdPartyAPI.id;
        var version = parseInt(topicId.split('-')[1])
        var data = {
            'sector': Sector,
            'topic': topicId.split('-')[0],
            'version': version,
            'ThirdPartyAPI': ThirdPartyAPI
        }
        dispatch(fetching_data());
        return fetch(`${urls.GET_INDICATORS}`, {
                method: 'POST',
                mode: 'same-origin',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if(response.status == 200){
                    return response.json()
                }
                else{
                    throw 'error loading, please try again.'
                }
            })
            .then(response => {
                return Promise.all([
                    dispatch(select_topic(topicId, topicName)),
                    dispatch(set_query_map(Sector, topicId)),
                    dispatch(set_timeGeo()),
                    dispatch(set_units(response['units'])),
                    dispatch(set_indicators(response['indicators'])),
                    dispatch(select_unit()),
                                    ])
            })
            .catch(error => {
                return dispatch(error_search_data(error))
            })
    }
}
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
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




export const canMakeRequest = (indicator={}, timeList=[], geoList=[] ) => {
    /*
        @Func: Verify if user has selected a minimum of one time and one geo.
        @Return: False if a minimum of 1 item is selected on timeList and geo List
            otherwise return true
     */
    var timeSelected = timeList.find(time => time['checked'] == true)
    var geoSelected = geoList.find(geo => geo['checked'] == true)
    if(!(Object.keys(indicator).length === 0 && indicator.constructor === Object) && timeSelected && geoSelected){
       return false
    }
    return true
}



export const getDataRequest = function (requestObject) {
    /*
        create new class depending on the provided option
        @Args: requestObject(JSON Object)
        @Return: New class
     */
    switch(requestObject.ThirdPartyAPI.id){
        case thirdParty.EU:
            return new EUdataRequest(requestObject)
        case thirdParty.OECD:
            return new OECDdataRequest(requestObject)
        case thirdParty.UNESCO:
            return new UnescoDataRequest(requestObject)
        default:
            return
    }
}

export const handle_data_request = () => {
    /*
        @Func: Use State.Current_search to create class (inheriting from dataRequest) which takes care of all the
        necessary actions to get data from third party API such as OECD or EUROSTAT.
        @Args: None, it uses redux state 'State.Current_search'
        @Returns: dispatch(finished_requestiong() if successful, otherwise dispatch(error_search_data(error
     */
    return (dispatch, getState) => {

        var requestObject = prepareRequestData(JSON.parse(JSON.stringify(getState().Current_search)))
        var dataRequestItem = getDataRequest(requestObject) // Get required class
        return Promise.all([
            dataRequestItem.createAPIRequest(), //create API url request (i.e https://eurostat/NCE1/2008/....)
            dataRequestItem.makeAPIcall() //Fetch API data by 'Fetch' Get method.
                .then(result => {
                    return dispatch(display_table(result));
                })
                .then(result => {
                    dispatch(app_fetching(false));
                    dispatch(finished_requestiong())
                })
        ]).catch(error => {
            return dispatch(error_search_data(error))
        })
    }
}


export const prepareRequestData = CurrentSearch => {
    /*
        @Func: creates an JSON object with some arguments from state.Current_search, necessary to eliminate unnecessary
        parameters that are not required to Fetch data from third party APIS and make a copy of the necessary parameters.
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


export const handle_publish_long_new = () =>{

    return (dispatch, getState) => {
        var csrftoken = getCookie('csrftoken'); //get saved cookie
        var newData = getState().Create_new
        var data = {
            newData: newData
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
        .then(response => {
            if(response.status == 200){ ///CLEAR ALL NEW DATA
                dispatch(clean_new_state());
                dispatch(clean_current_search());
                dispatch(clean_result_management());
                dispatch(app_fetching(false));
                history.push('/display/hot')
            }else{
                throw 'error loading news'
            }
        })
            .catch(error =>{
                 dispatch(app_fetching(false));
            })
    }
}
