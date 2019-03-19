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
    setProgress100Comp,
    pushGeoToArray
} from "functions/Current_search/stateManipulation";
import {getTopicMap} from 'functions/Create_new/CreateNewFunctions'
import {getCookie} from "root/store/functions/auth/Cookies";
import {urls} from "constants/constants";
import OptionsCardTitle from 'ui/search_data/optionsCardTitle'
import CardCol12 from 'ui/common/cards/CardCol12'
import TimeOptions from "components/search_data/TimeOption";
import {canMakeRequest} from "root/store/functions/Create_new/CreateNewFunctions";
import {RequestButton} from "components/search_data/RequestButton";
import Progress from "components/search_data/progressBar";

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
                                                    <TimeOptions list={Geo} onChange={this.onChangeGeo}/>
                                                </div>
                                            </div>
                                        </div>
                                    </CardCol12>
                             </div>
                        : null
                    }

                    <div className='col-12'>
                        <RequestButton active={requestActive}/>
                        <Progress progressNumber={progress} />
                    </div>



                </div>
            </PageTemplate>
        )
    }
}


export default UserSearchComponent