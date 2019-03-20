import React from 'react';
import {Component} from 'react'
import SearchComponent from "components/search_data/SearchComponent";
import {DataBaseSelect} from 'root/store/initialData'
import PageTemplate from 'components/main/PageTemplate'
import {
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
} from "functions/Current_search/stateManipulation";
import {getTopicMap} from 'functions/Create_new/CreateNewFunctions'
import {getCookie} from "root/store/functions/auth/Cookies";
import {urls} from "constants/constants";
import OptionsCardTitle from 'ui/search_data/optionsCardTitle'
import CardCol12 from 'ui/common/cards/CardCol12'
import TimeOptions from "components/search_data/TimeOption";
import {canMakeRequest, getDataRequest, prepareRequestData} from "functions/Create_new/CreateNewFunctions";
import {RequestButton} from "components/search_data/RequestButton";
import Progress from "components/search_data/progressBar";
import {display_table, error_search_data, finished_requestiong} from "root/actions/actions";
import GeoOptions from "components/search_data/GeoOption";
import DataDisplayNonRedux from 'components/data_representation/dataDisplayNonRedex'
import {
    pushResult,
    removeResult,
    pushGraph,
    removeGraph,
    setInfoMessageAtDisplay} from "functions/Results_management/stateManipulation";
import {
    findItemInArray,
    prepareGraphData,
    getGraphClass} from 'functions/Results_management/Results'
import GraphDisplay from "components/data_representation/graph/graphDisplay"

class UserSearchComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentSearch: {
                id: "",
                PossibleThirdPartyAPI: DataBaseSelect,
                ThirdPartyAPI: {},
                PossibleSectors: [],
                Sector: {},
                PossibleTopics: [],
                Topic: {},
                TopicMap: {},
                version: 1,
                PossibleIndicators: [],
                Indicator: {},
                PossibleUnitMeasure: [],
                Unit: {},
                Times: [],
                SelectedTimes: [],
                Geo: [],
                SelectedGeo: [],
                queryMap: {},
                requestActive: true,
                fetching: false,
                progress: 0,
                errorMessage: ''
            },
            results: {
                numberQueries: 0,
                tables: [],
                charts:[]
            }
        }
        this.onSelectDatabase = this.onSelectDatabase.bind(this)
        this.onSelectSector = this.onSelectSector.bind(this)
        this.onSelectTopic = this.onSelectTopic.bind(this)
        this.select_topic = this.select_topic.bind(this)
        this.set_query_map = this.set_query_map.bind(this)
        this.set_timeGeo = this.set_timeGeo.bind(this)
        this.set_units = this.set_units.bind(this)
        this.set_indicators = this.set_indicators.bind(this)
        this.select_unit = this.select_unit.bind(this)
        this.onSelectIndicator = this.onSelectIndicator.bind(this)
        this.onChangeTime = this.onChangeTime.bind(this)
        this.onChangeGeo = this.onChangeGeo.bind(this)
        this.onRequestingData = this.onRequestingData.bind(this)
        this.onChangeUnitMeasure = this.onChangeUnitMeasure.bind(this)
        this.onRemoveTable = this.onRemoveTable.bind(this)
        this.onGraph = this.onGraph.bind(this)
        this.onRemoveGraph =  this.onRemoveGraph.bind(this)
        this.onMessageTable = this.onMessageTable.bind(this)
    }

    onSelectDatabase(e, id, name){
        e.preventDefault();
        this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                ThirdPartyAPI: {
                    id: id,
                    name: name
                },
                PossibleThirdPartyAPI: setItemSelected(this.state.currentSearch.PossibleThirdPartyAPI, id),
                PossibleSectors: getSectorsByDatabase(id),
                PossibleTopics: [],
                Topic: {},
                TopicMap: {},
                version: 1,
                PossibleIndicators: [],
                Indicator: {},
                PossibleUnitMeasure: [],
                Unit: {},
                Times: [],
                SelectedTimes: [],
                Geo: [],
                SelectedGeo: [],
                queryMap: {},
                requestActive: true,
                progress: 20,
                errorMessage: ''
            }
        })
    }
    onSelectSector(e, id, name){
        e.preventDefault();
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                 Sector: {
                    id: id,
                    name: name
                },
                PossibleSectors: setItemSelected(this.state.currentSearch.PossibleSectors, id),
                PossibleTopics: getTopicsBySector(this.state.currentSearch.ThirdPartyAPI.id, id),
                Topic: {},
                TopicMap: {},
                version: 1,
                PossibleIndicators: [],
                Indicator: {},
                PossibleUnitMeasure: [],
                Unit: {},
                Times: [],
                SelectedTimes: [],
                Geo: [],
                SelectedGeo: [],
                queryMap: {},
                requestActive: true,
                progress: 40,
                errorMessage: ''
            }
        })
    }
    onSelectTopic(e, topicId, topicName){
        e.preventDefault();

        var csrftoken = getCookie('csrftoken'); //get saved cookie
        var Sector = this.state.currentSearch.Sector.id; //get sector id
        var ThirdPartyAPI = this.state.currentSearch.ThirdPartyAPI.id;
        var version = parseInt(topicId.split('-')[1])
        var data = {
            'sector': Sector,
            'topic': topicId.split('-')[0],
            'version': version,
            'ThirdPartyAPI': ThirdPartyAPI
        }
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
                    this.select_topic(topicId, topicName),
                    this.set_query_map(Sector, topicId),
                    this.set_timeGeo(),
                    this.set_units(response['units']),
                    this.set_indicators(response['indicators']),
                    this.select_unit(),
                                    ])
            })
    }
    onSelectIndicator(e, id, name){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                Indicator: {
                    id: id,
                    name: name
                },
                Times: unSelectItems(this.state.currentSearch.Times),
                SelectedTimes: [],
                Geo: unSelectItems(this.state.currentSearch.Geo),
                SelectedGeo: [],
                PossibleIndicators: setItemSelected(this.state.currentSearch.PossibleIndicators, id),
                progress: 80
            }
        })
    }
    select_topic(id, name){

         return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                Topic: {
                     id: id,
                     name: name,
                },
                PossibleTopics: setItemSelected(this.state.currentSearch.PossibleTopics, id),
                TopicMap: getTopicMap(this.state.currentSearch.ThirdPartyAPI.id, this.state.currentSearch.Sector.id, id),
                progress: 60,
                errorMessage: ''
            }
        })
    }
    set_query_map(){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                queryMap: {...this.state.currentSearch.TopicMap.UrlStructure},
            }
        })
    }
    set_timeGeo(){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                Times: createTimeList(this.state.currentSearch.TopicMap.Time.Start, this.state.currentSearch.TopicMap.Time.End),
                Geo: createGeoList(this.state.currentSearch.TopicMap.Geo)
            }
        })
    }
    set_units(list){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                PossibleUnitMeasure: createIndicatorUnitList(list)
            }
        })
    }
    set_indicators(list){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                PossibleIndicators: createIndicatorUnitList(list)
            }
        })
    }
    select_unit(unit=''){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                Unit: setUnitSelected(this.state.currentSearch.PossibleUnitMeasure, unit),
            }
        })
   }
    onChangeTime(e, id){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                Times: markItemChecked(this.state.currentSearch.Times, id),
                SelectedTimes: pushItemToArray(this.state.currentSearch.SelectedTimes, id)
            }
        }, () => this.check_request())
    }
    onChangeGeo(e, id, name){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                Geo: markItemChecked(this.state.currentSearch.Geo, id),
                SelectedGeo: pushGeoToArray(this.state.currentSearch.SelectedGeo, id, name),
            }
        }, () => this.check_request())


    }
    check_request(){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                requestActive: canMakeRequest(this.state.currentSearch.Times, this.state.currentSearch.Geo),
                progress: setProgress100(this.state.currentSearch.SelectedTimes, this.state.currentSearch.SelectedGeo)
            }
        })
   }

    onRequestingData(){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                requestActive: true,
            }
        }, () => this.handle_data_request())
    }

    handle_data_request(){
        var requestObject = prepareRequestData(JSON.parse(JSON.stringify(this.state.currentSearch)))
        var dataRequestItem = getDataRequest(requestObject) // Get required class
        return Promise.all([
            dataRequestItem.createAPIRequest(), //create API url request (i.e https://eurostat/NCE1/2008/....)
            dataRequestItem.makeAPIcall() //Fetch API data by 'Fetch' Get method.
                .then(result => {
                    this.display_table(result);
                })
                .then(result => this.finished_requesting())
        ]).catch(error => {
            console.log('error ' + error)
        })
    }

    display_table(result){
        return this.setState({
            ...this.state,
            results:{
                ...this.state.results,
                numberQueries: this.state.results.numberQueries + 1,
                tables: pushResult(this.state.results.tables, result),
            }
        })
    }

    finished_requesting(){
        return this.setState({
            ...this.state,
            currentSearch: {
                ...this.state.currentSearch,
                requestActive: false,
            }
        })
    }

    onChangeUnitMeasure(e, resultId, unitId){
        e.preventDefault();
        var resultsMade = this.state.results.tables;
        var foundResult = {...resultsMade.find(item => item['id'] == resultId)};
        foundResult.searchObject.Unit = findItemInArray(unitId, foundResult.searchObject.PossibleUnitMeasure);
        var requestObject = prepareRequestData(foundResult.searchObject);
        var dataRequestItem = getDataRequest(requestObject)
        return Promise.all([
            dataRequestItem.createAPIRequest(),
            dataRequestItem.makeAPIcall()
                .then(result =>{
                    return this.display_table(result);
                })
        ])
    }

    onRemoveTable(e, resultId){
        e.preventDefault()
        return this.setState({
            ...this.state,
            results:{
                ...this.state.results,
                numberQueries: this.state.results.numberQueries - 1,
                tables: removeResult(this.state.results.tables, resultId),
            }
        })
    }

    onRemoveGraph(e, chartId){
        e.preventDefault()
        return this.setState({
            ...this.state,
            results:{
                ...this.state.results,
                charts: removeGraph(this.state.results.charts, chartId)
            }
        })
    }

    onGraph(e, resultId){
        e.preventDefault();
        var results = this.state.results.tables;
        var resultToGraph = results.find(result => result['id'] == resultId); // Get JSON data
        var graphData = prepareGraphData(resultToGraph);
        var graphObject = getGraphClass(graphData);
        graphObject.createData();

        var chart = {
            'id': Date.now(),
            'attached': false,
            'explanation': graphObject.displayMessage,
            'type': graphObject.type,
            'data': graphObject.data,
            'options': graphObject.options,
            'DisplayMessage': {
                message: '',
                type: 'alert-info'
            }
        }

        return this.setState({
            ...this.state,
            results:{
                ...this.state.results,
                charts: pushGraph(this.state.results.charts, chart)
            }
        })
    }

    onMessageTable(resultId, message){
        return this.setState({
            ...this.state,
            results: {
                ...this.state.results,
                tables: setInfoMessageAtDisplay(this.state.results.tables, resultId, message)
            }
        })
    }

    render(){
        var {PossibleThirdPartyAPI,
            ThirdPartyAPI,
            PossibleSectors,
            Sector,
            PossibleTopics,
            Topic,
            PossibleIndicators,
            Indicator,
            Times,
            Geo,
            requestActive,
            progress} = this.state.currentSearch
        return(
            <PageTemplate>
                <div className='row'>
                    <div className='col-4'>
                        <SearchComponent title={'Databases'}
                                         list={PossibleThirdPartyAPI}
                                         onSelect={this.onSelectDatabase}/>
                    </div>
                    {(!(Object.keys(ThirdPartyAPI).length === 0 && ThirdPartyAPI.constructor === Object)) ?
                        <div className='col-4'>
                            <SearchComponent title={'Sectors'} list={PossibleSectors} onSelect={this.onSelectSector}/>
                        </div>
                        : null

                    }
                    {(!(Object.keys(Sector).length === 0 && Sector.constructor === Object)) ?
                        <div className='col-4'>
                            <SearchComponent title={'topics'} list={PossibleTopics} onSelect={this.onSelectTopic}/>
                        </div>
                        : null
                    }
                    {(!(Object.keys(Topic).length === 0 && Topic.constructor === Object)) ?
                        <div className='col-4'>
                            <SearchComponent title={'Indicators'} list={PossibleIndicators} onSelect={this.onSelectIndicator}/>
                        </div>
                        : null
                    }
                    {(!(Object.keys(Indicator).length === 0 && Indicator.constructor === Object)) ?
                            <div className='col-4'>
                                    <CardCol12 Component={OptionsCardTitle}>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className="col-6">
                                                   <TimeOptions list={Times} onChange={this.onChangeTime}/>
                                                </div>
                                                <div className='col-6'>
                                                    <GeoOptions list={Geo} onChange={this.onChangeGeo}/>
                                                </div>
                                            </div>
                                        </div>
                                    </CardCol12>
                             </div>
                        : null
                    }

                    <div className='col-12'>
                        <RequestButton active={requestActive} onClick={this.onRequestingData}/>
                        <Progress progressNumber={progress} />
                    </div>
                    <div className='col-12'>
                        <DataDisplayNonRedux list={this.state.results.tables}
                                             onChangeUnit={this.onChangeUnitMeasure}
                                             onRemove={this.onRemoveTable}
                                             onGraph={this.onGraph}
                                             onMessageTable={this.onMessageTable}/>
                    </div>
                    <div className='col-12'>
                        <GraphDisplay list={this.state.results.charts}
                                      onRemove={this.onRemoveGraph}/>
                    </div>

                </div>
            </PageTemplate>
        )
    }
}


export default UserSearchComponent