import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Table from "components/data_representation/table";
import DataTitle from 'ui/search_data/dataTitle'
import {AttachDataRequest} from 'components/data_representation/attachData'
import {
    DisplayDataMessage
} from 'containers/searchDataContainers'
import DataOptionsSearch from 'components/data_representation/dataOptions/dataOptionsSearch'
import ChangeUnitMeasureSearch from 'components/data_representation/changeUnitMeasure/changeUniteMeasureSearch'
import {getCookie} from "root/store/functions/auth/Cookies";
import download from "downloadjs";
import {urls} from "root/constants/constants";
class DataDisplayNonRedux extends Component{
    constructor(props){
        super(props)
        this.onExcel =  this.onExcel.bind(this)
    }

    onExcel(e, resultId){
        e.preventDefault()
        var csrftoken = getCookie('csrftoken');
        var results = this.props.list
        var resultToExcel = results.find(result => result['id'] == resultId)
        if (resultToExcel){
             var data = {
                'result': resultToExcel.resultObject.filterResult,
                 'searchObject': resultToExcel.searchObject
            }
            return fetch(`${urls.DOWNLOAD_EXCEL}`, {
                method: 'POST',
                mode: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    return response.blob();
                })
                .then(blob =>{
                   return download(blob, 'tablenew_data.xls', 'application/ms-excel')
                })
        }
    }
    render(){
        let {list, onRemove, onChangeUnit, onGraph } =  this.props;
        return(
            <section className='row'>
                {(list.length > 0) ?
                    list.map((result, i) =>
                        <div className='col-6' key={`RES-${result.id}-${i}`}>
                                <div className='card'>
                                        <div className='card-header bg-primary'>
                                            <div className='col-12'>
                                                <DataTitle
                                                    title={result.searchObject.Topic.name}
                                                    resultId={result.id}
                                                    explination={result.searchObject.displayMessage}
                                                    onRemove={onRemove}/>
                                            </div>
                                        </div>
                                        <div className='resultCardBody card-body'>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <Table columnList={result.searchObject.SelectedTimes}
                                                           rowList={result.resultObject.filterResult}
                                                    />
                                                </div>
                                                <div className='col-12'>
                                                    <DisplayDataMessage message={result.DisplayMessage.message}
                                                                        type={result.DisplayMessage.type}
                                                    />
                                                </div>
                                                <div className='col-12'>
                                                    <div className='row'>
                                                        <div className='offset-1 col-5'>
                                                            <DataOptionsSearch resultId={result.id}
                                                                               resultSaved={result.saved}
                                                                               onGraph={onGraph}
                                                                               onExcel={this.onExcel}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                {(result.searchObject.PossibleUnitMeasure.length > 1) ?
                                                    <div className='col-8 offset-2 MT1 MB1'>
                                                        <ChangeUnitMeasureSearch list={result.searchObject.PossibleUnitMeasure}
                                                                           resultId={result.id}
                                                                           onClick={onChangeUnit}/>
                                                    </div> : null
                                                }
                                            </div>
                                        </div>
                                </div>
                        </div>
                    )
                    : null
                }
            </section>
        )
    }
}

export default DataDisplayNonRedux